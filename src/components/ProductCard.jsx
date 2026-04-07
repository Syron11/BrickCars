import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const ProductCard = ({ product, addToCart }) => (
  <div className="group relative overflow-hidden bg-[#0F0F0F] border border-[#1A1A1A] transition-all duration-500 hover:border-[#FF1E1E]/50 shadow-2xl">
    {/* Ссылка на страницу товара и изображение */}
    <Link
      to={`/product/${product.id}`}
      className="aspect-square block bg-black overflow-hidden relative"
    >
      {/* Слой при наведении (Overlay) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
        <span className="font-orbitron font-black text-[10px] uppercase italic tracking-widest border border-white px-5 py-2 text-white">
          Смотреть детали
        </span>
      </div>

      {/* Реальное изображение товара */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110 relative z-10"
      />

      {/* Фоновый текст категории (для стиля) */}
      <div className="absolute inset-0 flex items-center justify-center text-white/5 font-orbitron font-black text-6xl uppercase italic select-none">
        {product.category.split(" ")[0]}
      </div>
    </Link>

    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <p className="text-[#FF1E1E] text-[9px] font-black uppercase tracking-tighter">
          {product.category}
        </p>
        {/* ИСПРАВЛЕННАЯ ЦЕНА В ТЕНГЕ */}
        <span className="text-[#FFD700] font-orbitron font-black text-sm">
          {product.price.toLocaleString()} ₸
        </span>
      </div>

      <h3 className="font-orbitron font-bold uppercase italic text-xs mb-6 truncate text-white tracking-wider">
        {product.name}
      </h3>

      {/* Кнопка покупки */}
      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart(product);
        }}
        className="w-full bg-white text-black py-3 font-orbitron font-black text-[10px] uppercase italic tracking-widest hover:bg-[#FF1E1E] hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2"
      >
        <Plus className="w-3 h-3" /> В корзину
      </button>
    </div>
  </div>
);

export default ProductCard;
