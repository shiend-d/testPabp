export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Tugas 1: Web Platform</h1>
      <p className="mt-4">Pilih teknik rendering yang ingin dilihat:</p>
      <div className="flex gap-4 mt-6">
        {/* Nanti kita buat tombol navigasi ke halaman SSR, CSR, dan SSG di sini */}
        <button className="p-2 bg-blue-500 text-white rounded">Contoh SSR</button>
      </div>
    </main>
  );
}