// src/app/page.tsx
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold mb-6">
        TUGAS 1: PENGEMBANGAN APLIKASI BERBASIS PLATFORM
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Eksplorasi Teknik <br /><span className="text-blue-600">Modern Rendering</span>
      </h1>
      <p className="text-slate-500 max-w-2xl text-lg mb-12">
        Aplikasi katalog gadget ini mengimplementasikan tiga teknik rendering utama Next.js untuk mengoptimalkan performa dan pengalaman pengguna.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Link href="/ssg" className="group p-8 bg-white border border-blue-100 rounded-3xl shadow-sm hover:border-blue-500 transition-all text-left">
          <div className="text-3xl mb-4 group-hover:scale-110 transition">⚡</div>
          <h3 className="text-xl font-bold mb-2">Static Generation</h3>
          <p className="text-sm text-slate-500">Halaman Flash Sale yang dimuat instan menggunakan teknik SSG.</p>
        </Link>
        <Link href="/ssr" className="group p-8 bg-white border border-blue-100 rounded-3xl shadow-sm hover:border-blue-500 transition-all text-left">
          <div className="text-3xl mb-4 group-hover:scale-110 transition">🌐</div>
          <h3 className="text-xl font-bold mb-2">Server Rendering</h3>
          <p className="text-sm text-slate-500">Katalog produk dengan data real-time menggunakan teknik SSR.</p>
        </Link>
        <Link href="/csr" className="group p-8 bg-white border border-blue-100 rounded-3xl shadow-sm hover:border-blue-500 transition-all text-left">
          <div className="text-3xl mb-4 group-hover:scale-110 transition">🖱️</div>
          <h3 className="text-xl font-bold mb-2">Client Interaction</h3>
          <p className="text-sm text-slate-500">Fitur pencarian interaktif dengan State Management (CSR).</p>
        </Link>
      </div>
    </main>
  );
}