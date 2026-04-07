import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";
import { ChevronDown } from "lucide-react";

const Catalog = ({ addToCart }) => {
  const [sortBy, setSortBy] = useState("default");

  // Логика сортировки
  const sortedProducts = [...PRODUCTS].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
      {/* Шапка каталога с сортировкой */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-l-4 border-[#FF1E1E] pl-6">
        <div>
          <h1 className="font-orbitron font-black text-4xl md:text-6xl italic uppercase leading-none text-white">
            Полная <span className="text-[#FF1E1E]">Коллекция</span>
          </h1>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mt-4 font-bold">
            Вершина инженерного искусства автоспорта
          </p>
        </div>

        {/* Блок выбора сортировки */}
        <div className="relative group min-w-[220px]">
          <label className="block text-[9px] uppercase tracking-widest text-gray-600 mb-2 font-black">
            Сортировать по
          </label>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none bg-[#0F0F0F] border border-[#1A1A1A] text-white text-[11px] font-orbitron uppercase tracking-widest py-3 px-5 pr-12 focus:border-[#FF1E1E] outline-none cursor-pointer transition-all hover:bg-[#151515]"
            >
              <option value="default">Рекомендуемые</option>
              <option value="price-low">Цена: Сначала дешевле</option>
              <option value="price-high">Цена: Сначала дороже</option>
              <option value="name">Название: А — Я</option>
            </select>
            {/* Иконка стрелочки */}
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF1E1E] pointer-events-none group-hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>

      {/* Сетка товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Сообщение, если товаров нет */}
      {PRODUCTS.length === 0 && (
        <div className="text-center py-20 border border-dashed border-[#1A1A1A]">
          <p className="text-gray-500 font-orbitron uppercase text-sm tracking-widest">
            Ангар пуст. Заходите позже.
          </p>
        </div>
      )}
    </div>
  );
};

export default Catalog;
