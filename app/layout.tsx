import type { Metadata } from 'next';
import './globals.css';
import './sections.css';

export const metadata: Metadata = {
  title: 'Econovo Club | Turning Students Into Problem Solvers',
  description:
    'Econovo is a university club connecting economics, business, innovation, and practical skills.',
  icons: {
    icon: 'https://i.postimg.cc/vBCdy1F4/copilot-image-1784613842249.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          // Runs before paint to avoid a light/dark flash on load
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('ec-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = stored || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
