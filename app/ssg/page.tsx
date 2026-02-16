// Ini adalah contoh SSG (Default di Next.js App Router)
export default async function SSGPage() {
  // Mengambil data dari API publik (DummyJSON) 
  const response = await fetch('https://dummyjson.com/products?limit=5');
  const data = await response.json();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Daftar Produk (Teknik SSG)</h1>
      <div className="grid gap-4">
        {data.products.map((item: any) => (
          <div key={item.id} className="p-4 border rounded shadow-sm">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}