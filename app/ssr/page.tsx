// File: src/app/ssr/page.tsx

export default async function SSRPage() {
  // Baris di bawah ini adalah "rahasia" SSR: 
  // cache: 'no-store' memberitahu Next.js untuk SELALU ambil data baru setiap ada request
  const response = await fetch('https://dummyjson.com/products', { cache: 'no-store' });
  const data = await response.json();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Katalog Produk Terbaru (SSR)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.products.map((product: any) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md hover:shadow-xl transition">
            <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-blue-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}