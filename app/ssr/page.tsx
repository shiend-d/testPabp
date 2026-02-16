// src/app/ssr/page.tsx
export default async function SSRPage() {
  const res = await fetch('https://dummyjson.com/products/category/laptops', { cache: 'no-store' });
  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-2">Katalog Laptop Terbaru</h2>
      <p className="text-slate-500 mb-10 text-sm italic">Data diambil langsung dari server setiap detik (Teknik SSR).</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.products.map((p: any) => (
          <div key={p.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="h-56 bg-blue-50 relative p-6">
              <img src={p.thumbnail} alt={p.title} className="w-full h-full object-contain group-hover:scale-110 transition" />
            </div>
            <div className="p-6 text-black">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">{p.title}</h3>
                <span className="bg-blue-100 text-blue-600 text-[10px] font-black px-2 py-1 rounded tracking-tighter uppercase">{p.brand}</span>
              </div>
              <p className="text-sm text-slate-500 mb-6 line-clamp-2">{p.description}</p>
              <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition">Lihat Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}