// src/app/ssr/page.tsx
export default async function SSRPage() {
  const [laptopsRes, smartphonesRes, miscRes] = await Promise.all([
    fetch("https://dummyjson.com/products/category/laptops", {
      cache: "no-store",
    }),
    fetch("https://dummyjson.com/products/category/smartphones", {
      cache: "no-store",
    }),
    fetch("https://dummyjson.com/products?limit=12", {
      cache: "no-store",
    }),
  ]);

  const [laptopsData, smartphonesData, miscData] = await Promise.all([
    laptopsRes.json(),
    smartphonesRes.json(),
    miscRes.json(),
  ]);

  const miscProducts = (miscData.products || []).filter(
    (product: any) =>
      product.category !== "laptops" && product.category !== "smartphones",
  );

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-2">Katalog Produk Terbaru</h2>
      <p className="text-slate-400 mb-12 text-sm italic">
        Data diambil langsung dari server setiap detik (Teknik SSR).
      </p>

      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6">Laptop</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {laptopsData.products.map((p: any) => (
            <div
              key={p.id}
              className="group bg-slate-900/70 rounded-3xl overflow-hidden border border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="h-56 bg-slate-950 relative p-6">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition"
                />
              </div>
              <div className="p-6 text-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl">{p.title}</h3>
                  <span className="bg-blue-900/40 text-blue-200 text-[10px] font-black px-2 py-1 rounded tracking-tighter uppercase">
                    {p.brand}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                  {p.description}
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-500 transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-6">Smartphone</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {smartphonesData.products.map((p: any) => (
            <div
              key={p.id}
              className="group bg-slate-900/70 rounded-3xl overflow-hidden border border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="h-56 bg-slate-950 relative p-6">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition"
                />
              </div>
              <div className="p-6 text-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl">{p.title}</h3>
                  <span className="bg-blue-900/40 text-blue-200 text-[10px] font-black px-2 py-1 rounded tracking-tighter uppercase">
                    {p.brand}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                  {p.description}
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-500 transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold mb-6">Misc / Lainnya</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {miscProducts.map((p: any) => (
            <div
              key={p.id}
              className="group bg-slate-900/70 rounded-3xl overflow-hidden border border-slate-800 shadow-sm hover:shadow-xl transition-all">
              <div className="h-56 bg-slate-950 relative p-6">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition"
                />
              </div>
              <div className="p-6 text-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl">{p.title}</h3>
                  <span className="bg-blue-900/40 text-blue-200 text-[10px] font-black px-2 py-1 rounded tracking-tighter uppercase">
                    {p.brand}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-6 line-clamp-2">
                  {p.description}
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-500 transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
