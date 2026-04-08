import { useState, useEffect } from "react"; // Добавили useEffect
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../data/products";
import { ChevronDown } from "lucide-react";

const Catalog = ({ addToCart }) => {
  // 1. Инициализируем sortBy из LocalStorage или ставим дефолт
  const [sortBy, setSortBy] = useState(() => {
    return localStorage.getItem("catalog-sort") || "default";
  });

  // 2. Инициализируем filter из LocalStorage или ставим "Все"
  const [filter, setFilter] = useState(() => {
    return localStorage.getItem("catalog-filter") || "Все";
  });

  // 3. Сохраняем изменения сортировки в память при каждом изменении
  useEffect(() => {
    localStorage.setItem("catalog-sort", sortBy);
  }, [sortBy]);

  // 4. Сохраняем изменения фильтра в память при каждом изменении
  useEffect(() => {
    localStorage.setItem("catalog-filter", filter);
  }, [filter]);

  // --- Логика фильтрации и сортировки остается прежней ---
  const filteredProducts = PRODUCTS.filter((product) => {
    if (filter === "Все") return true;
    return product.category === filter;
  });

  const finalProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
      {/* Шапка каталога */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 border-l-4 border-[#FF1E1E] pl-6">
        <div>
          <h1 className="font-orbitron font-black text-4xl md:text-6xl italic uppercase leading-none text-white">
            Полная <span className="text-[#FF1E1E]">Коллекция</span>
          </h1>
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mt-4 font-bold">
            Вершина инженерного искусства
          </p>
        </div>

        {/* Сортировка */}
        <div className="relative group min-w-[200px]">
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
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FF1E1E] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* КНОПКИ ФИЛЬТРАЦИИ */}
      <div className="flex flex-wrap gap-3 mb-12">
        {["Все", "F1 Серия", "Гиперкар"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 font-orbitron text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border ${
              filter === cat
                ? "bg-[#FF1E1E] border-[#FF1E1E] text-white shadow-[0_0_15px_rgba(255,30,30,0.3)]"
                : "bg-transparent border-[#1A1A1A] text-gray-500 hover:border-[#FF1E1E] hover:text-white"
            }`}
          >
            {cat === "Гиперкар" ? "Гиперкары" : cat}
          </button>
        ))}
      </div>

      {/* Сетка товаров */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {finalProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Заглушка если пусто */}
      {finalProducts.length === 0 && (
        <div className="text-center py-20 border border-[#1A1A1A] bg-[#0A0A0A]">
          <p className="text-gray-500 font-orbitron uppercase text-sm tracking-widest">
            В категории{" "}
            <span className="text-[#FF1E1E]">
              {filter === "Гиперкар" ? "Гиперкары" : filter}
            </span>{" "}
            пока ничего нет.
          </p>
        </div>
      )}
    </div>
  );
};

export default Catalog;
