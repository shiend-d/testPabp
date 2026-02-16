// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 font-sans">
        <nav className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tighter">TechMarket</Link>
            <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
              <Link href="/ssg" className="hover:text-blue-600 transition">Flash Sale (SSG)</Link>
              <Link href="/ssr" className="hover:text-blue-600 transition">Katalog (SSR)</Link>
              <Link href="/csr" className="hover:text-blue-600 transition">Cari Gadget (CSR)</Link>
            </div>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition">Mulai Belanja</button>
          </div>
        </nav>
        {children}
        <footer className="bg-white border-t border-blue-100 py-10 text-center text-slate-400 text-sm">
          © 2026 TechMarket Hub - Universitas Siliwangi Informatika
        </footer>
      </body>
    </html>
  );
}