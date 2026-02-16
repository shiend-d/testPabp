// src/app/csr/page.tsx
'use client';
import { useState, useEffect } from 'react';

export default function CSRPage() {
  const [items, setItems] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products/search?q=' + query)
      .then(res => res.json())
      .then(data => {
        setItems(data.products);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <div className="max-w-xl mx-auto text-center mb-16 text-black">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter italic">Smart Search</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Cari merk atau tipe gadget..." 
            className="w-full px-6 py-5 rounded-full border-2 border-blue-100 focus:border-blue-500 outline-none transition-all shadow-xl font-medium"
            onChange={(e) => {
              setLoading(true);
              setQuery(e.target.value);
            }}
          />
          {loading && <div className="absolute right-6 top-5 animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map(p => (
          <div key={p.id} className="bg-white p-4 rounded-2xl border border-blue-50 shadow-sm flex flex-col items-center">
            <img src={p.thumbnail} alt={p.title} className="w-24 h-24 object-contain mb-3" />
            <h5 className="font-bold text-xs text-center line-clamp-2 text-black">{p.title}</h5>
            <span className="text-blue-600 font-black mt-2">${p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}