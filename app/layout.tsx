import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fouad Dadache | Portfolio",
  description:
    "Business Administration Student · AI-Assisted Digital Creator · Community Builder — Co-founder of ECONOVO Student Club.",
  keywords: [
    "Fouad Dadache",
    "Portfolio",
    "Business Administration",
    "AI Creator",
    "ECONOVO",
    "Algeria",
  ],
  authors: [{ name: "Fouad Dadache", url: "https://github.com/fbdadache-a11y" }],
  openGraph: {
    title: "Fouad Dadache | Portfolio",
    description:
      "Business Administration Student · AI-Assisted Digital Creator · Community Builder",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
