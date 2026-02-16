// src/app/csr/page.tsx
"use client";
import { useState, useEffect } from "react";

export default function CSRPage() {
  const [items, setItems] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trimmed = query.trim();

    if (trimmed.length === 0) {
      Promise.all([
        fetch("https://dummyjson.com/products/category/laptops").then((res) =>
          res.json(),
        ),
        fetch("https://dummyjson.com/products/category/smartphones").then(
          (res) => res.json(),
        ),
        fetch(
          "https://dummyjson.com/products/category/mobile-accessories",
        ).then((res) => res.json()),
      ]).then(([laptops, smartphones, accessories]) => {
        const merged = [
          ...(laptops.products || []),
          ...(smartphones.products || []),
          ...(accessories.products || []),
        ];
        setItems(merged);
        setLoading(false);
      });
      return;
    }

    fetch("https://dummyjson.com/products/search?q=" + trimmed)
      .then((res) => res.json())
      .then((data) => {
        const electronicsOnly = (data.products || []).filter(
          (product: any) =>
            product.category === "laptops" ||
            product.category === "smartphones" ||
            product.category === "mobile-accessories",
        );
        setItems(electronicsOnly);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <div className="max-w-xl mx-auto text-center mb-16 text-slate-100">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">
          Fitur Pencarian
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari merk atau tipe gadget..."
            className="w-full px-6 py-5 rounded-full border-2 border-slate-800 bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 outline-none transition-all shadow-xl font-medium"
            onChange={(e) => {
              setLoading(true);
              setQuery(e.target.value);
            }}
          />
          {loading && (
            <div className="absolute right-6 top-5 animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {items.map((p) => (
          <div
            key={p.id}
            className="bg-slate-900/70 p-4 rounded-2xl border border-slate-800 shadow-sm flex flex-col items-center">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-24 h-24 object-contain mb-3"
            />
            <h5 className="font-bold text-xs text-center line-clamp-2 text-slate-100">
              {p.title}
            </h5>
            <span className="text-blue-400 font-black mt-2">${p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
