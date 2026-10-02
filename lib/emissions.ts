export type EmissionCategory = 'electricity' | 'travel' | 'food' | 'waste';

export type CalculationInput = {
  category: EmissionCategory;
  amount: number;
  mode?: string;
};

export const emissionFactors: Record<EmissionCategory, Record<string, number>> = {
  electricity: {
    default: 0.233,
    grid: 0.233,
    solar: 0.04
  },
  travel: {
    car: 0.18,
    bus: 0.08,
    train: 0.04,
    flight: 0.13
  },
  food: {
    meat: 2.5,
    dairy: 1.1,
    vegan: 0.45,
    local: 0.6
  },
  waste: {
    landfill: 0.5,
    recycled: 0.15,
    compost: 0.08,
    mixed: 0.25
  }
};

export function calculateEmissions({ category, amount, mode = 'default' }: CalculationInput) {
  const factor = emissionFactors[category][mode] ?? emissionFactors[category].default ?? 0;
  const total = amount * factor;

  return {
    category,
    mode,
    amount,
    factor,
    totalCo2e: Number(total.toFixed(2)),
    label: `${Number(total.toFixed(2))} kgCO2e`
  };
}

export function compareScenario(baseline: number, reduction: number) {
  const projected = Math.max(baseline - reduction, 0);
  const savings = baseline - projected;

  return {
    baseline,
    projected,
    savings,
    savingsPercent: baseline > 0 ? Number(((savings / baseline) * 100).toFixed(1)) : 0
  };
}
