import "./globals.css";

export const metadata = {
  title: "Fouad Dadache",
  description: "Personal Portfolio & CV",
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
