import '../app/globals.css';

export const metadata = {
  title: 'Calculator App',
  description: 'iPhone-inspired calculator with GSAP animations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}