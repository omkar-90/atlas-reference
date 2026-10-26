import React from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export const metadata = {
  title: 'Atlas Documentation — Plots & Charts Reference',
  description: 'Authoritative documentation and Scopus-indexed research citations for Atlas visualization and surrogate modeling workflows.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = stored ? stored : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--ifm-background-color)] text-[var(--ifm-font-color-base)]">
        <Navbar />
        <div className="flex max-w-[1140px] mx-auto min-h-[calc(100vh-3.5rem)]">
          <Sidebar />
          <main className="flex-1 min-w-0 px-6 pt-8 pb-16 md:px-10 max-w-[760px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
