'use client'; // Wajib untuk CSR

import { useState, useEffect } from 'react';

export default function CSRPage() {
  // 1. State Management (Kriteria Wajib)
  const [products, setProducts] = useState<any[]>([]); // Menyimpan data produk
  const [search, setSearch] = useState(''); // Menyimpan teks pencarian
  const [loading, setLoading] = useState(true); // Fitur Opsional: Loading Indicator

  // 2. Mengambil data saat halaman pertama kali dibuka
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  // 3. Logika Filter (Interaktivitas)
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Pencarian Produk (CSR)</h1>
      
      {/* Input Pencarian */}
      <input
        type="text"
        placeholder="Cari nama produk..."
        className="w-full p-2 border rounded mb-6 text-black"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Fitur Opsional: Loading Indicator */}
      {loading ? (
        <p className="text-blue-500 animate-pulse">Sedang memuat data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-4 border rounded shadow-sm flex justify-between">
              <span>{product.title}</span>
              <span className="font-bold text-green-600">${product.price}</span>
            </div>
          ))}
        </div>
      )}

      {/* Jika hasil pencarian tidak ketemu */}
      {!loading && filteredProducts.length === 0 && (
        <p className="text-red-500">Produk "{search}" tidak ditemukan.</p>
      )}
    </div>
  );
}