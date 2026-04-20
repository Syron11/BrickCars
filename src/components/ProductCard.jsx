import { Link } from "react-router-dom";
import { Plus, Eye } from "lucide-react";

const ProductCard = ({ product, addToCart }) => (
  <div className="group relative overflow-hidden bg-[#0F0F0F] border border-[#1A1A1A] transition-all duration-500 hover:border-[#FF1E1E]/50 shadow-2xl">
    {/* Бейдж скидки (опционально) */}
    {product.oldPrice && (
      <div className="absolute top-2 left-2 z-30 bg-[#FF1E1E] text-white font-orbitron font-black text-[8px] px-2 py-1 italic uppercase tracking-widest shadow-lg">
        -
        {Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100,
        )}
        %
      </div>
    )}

    <div className="aspect-square block bg-black overflow-hidden relative">
      <div className="hidden lg:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 items-center justify-center pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-[#FF1E1E]/20 to-transparent"></div>
      </div>
      <img
        src={product.images ? product.images[0] : product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-110 relative z-10"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white/5 font-orbitron font-black text-6xl uppercase italic select-none">
        {product.category.split(" ")[0]}
      </div>
    </div>

    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <p className="text-[#FF1E1E] text-[9px] font-black uppercase tracking-tighter">
          {product.category}
        </p>

        {/* БЛОК ЦЕНЫ СО СКИДКОЙ */}
        <div className="flex flex-col items-end">
          {product.oldPrice && (
            <span className="text-white/30 line-through text-[10px] font-orbitron italic">
              {product.oldPrice.toLocaleString()} ₸
            </span>
          )}
          <span className="text-[#FFD700] font-orbitron font-black text-sm">
            {product.price.toLocaleString()} ₸
          </span>
        </div>
      </div>

      <h3 className="font-orbitron font-bold uppercase italic text-xs mb-6 truncate text-white tracking-wider">
        {product.name}
      </h3>

      <div className="flex gap-2">
        <Link
          to={`/product/${product.id}`}
          className="flex-1 bg-transparent border border-white/10 text-white py-3 font-orbitron font-black text-[9px] uppercase italic tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
        >
          <Eye className="w-3 h-3" />
          <span>Детали</span>
        </Link>

        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="flex-[1.5] bg-white text-black py-3 font-orbitron font-black text-[9px] uppercase italic tracking-widest hover:bg-[#FF1E1E] hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <Plus className="w-3 h-3" />
          <span>В корзину</span>
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
