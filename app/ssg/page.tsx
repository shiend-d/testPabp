// src/app/ssg/page.tsx
export default async function SSGPage() {
  const res = await fetch(
    "https://dummyjson.com/products/category/laptops?limit=4",
  );
  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-bold">Flash Sale Hari Ini</h2>
          <p className="text-slate-400">
            Penawaran terbaik dengan harga statis (Teknik SSG).
          </p>
        </div>
        <div className="bg-red-600/90 text-white px-4 py-2 rounded-lg font-mono font-bold animate-pulse text-sm">
          23 : 59 : 59
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {data.products.map((p: any) => (
          <div
            key={p.id}
            className="bg-slate-900/70 rounded-2xl p-4 border border-slate-800 shadow-sm">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-40 object-contain mb-4 bg-slate-950 rounded-xl"
            />
            <h4 className="font-bold text-slate-100 line-clamp-1">{p.title}</h4>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-blue-400 font-extrabold">${p.price}</span>
              <span className="text-xs text-slate-500 line-through">$999</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
