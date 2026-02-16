// src/app/layout.tsx
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 font-sans">
        <nav className="sticky top-0 z-50 bg-slate-950/90 border-b border-slate-800 shadow-sm backdrop-blur">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-400 tracking-tighter">
              TechMarket
            </Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
              <Link href="/ssg" className="hover:text-blue-300 transition">
                Flash Sale (SSG)
              </Link>
              <Link href="/ssr" className="hover:text-blue-300 transition">
                Katalog (SSR)
              </Link>
              <Link href="/csr" className="hover:text-blue-300 transition">
                Cari Gadget (CSR)
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-slate-950 border-t border-slate-800 py-10 text-center text-slate-500 text-sm">
          © 2026 TechMarket Hub - Universitas Siliwangi Informatika
        </footer>
      </body>
    </html>
  );
}
