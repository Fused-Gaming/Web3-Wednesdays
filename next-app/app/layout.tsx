import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web3 Wednesdays | Learn Smart Contract Security',
  description:
    'A weekly guided curriculum for beginners learning Solidity and smart contract security through hands-on labs and real exploits.',
  keywords: [
    'Web3',
    'Security',
    'Solidity',
    'Smart Contracts',
    'Exploits',
    'Auditing',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-vln-dark text-vln-text">
        <header className="border-b border-vln-secondary">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-vln-accent">
              Web3 Wednesdays
            </a>
            <ul className="flex gap-6 text-vln-muted">
              <li>
                <a href="/" className="hover:text-vln-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="/modules" className="hover:text-vln-accent">
                  Modules
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-vln-accent">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-12">{children}</main>

        <footer className="border-t border-vln-secondary mt-20 py-8">
          <div className="max-w-7xl mx-auto px-6 text-center text-vln-muted text-sm">
            <p>
              © 2026 Fused Gaming. Web3 Wednesdays is an educational program.
            </p>
            <p className="mt-2">
              ⚠️ All contracts and exploits are intentionally vulnerable for
              learning purposes only. Do not use in production.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
