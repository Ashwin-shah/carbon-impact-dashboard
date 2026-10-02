export const metadata = {
  title: 'Carbon Impact Dashboard',
  description: 'Sustainability dashboard for emissions tracking, reduction planning, and reporting.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
