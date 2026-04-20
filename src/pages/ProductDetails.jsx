import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import {
  ArrowLeft,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  // Состояние для фото и свайпа
  const [activeImg, setActiveImg] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₸";
  };

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center text-white min-h-screen">
        <h2 className="font-orbitron text-2xl mb-4">Модель не найдена</h2>
        <Link
          to="/collection"
          className="text-[#FF1E1E] uppercase text-xs font-black tracking-widest hover:underline"
        >
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  const images = product.images || [product.image];

  // Логика переключения
  const nextSlide = () => {
    setActiveImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Обработка свайпа
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto text-white min-h-screen">
      <Link
        to="/collection"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-10 uppercase text-[10px] font-black tracking-[0.2em]"
      >
        <ArrowLeft className="w-4 h-4" /> Назад в каталог
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* ЛЕВАЯ КОЛОНКА: ГАЛЕРЕЯ СО СВАЙПОМ */}
        <div className="flex flex-col gap-4">
          <div
            className="aspect-square bg-[#0F0F0F] border border-[#1A1A1A] flex items-center justify-center p-4 md:p-8 group relative overflow-hidden touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF1E1E]/5 to-transparent opacity-50"></div>

            <img
              src={images[activeImg]}
              alt={product.name}
              key={activeImg}
              className="w-full h-full object-cover z-10 transition-all duration-500 animate-in fade-in zoom-in-95 pointer-events-none"
            />

            {/* Стрелки для ПК */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#FF1E1E] text-white p-2 transition-all opacity-0 group-hover:opacity-100 border border-white/10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#FF1E1E] text-white p-2 transition-all opacity-0 group-hover:opacity-100 border border-white/10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 right-4 z-20 bg-black/60 px-3 py-1 text-[10px] font-orbitron text-white/70 backdrop-blur-sm border border-white/5 uppercase">
                  {activeImg + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          {/* Миниатюры */}
          {images.length > 1 && (
            <div className="grid grid-cols-5 gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImg(index)}
                  className={`aspect-square bg-[#0F0F0F] border-2 transition-all duration-300 overflow-hidden relative group ${
                    activeImg === index
                      ? "border-[#FF1E1E]"
                      : "border-[#1A1A1A] hover:border-white/20"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {activeImg !== index && (
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ПРАВАЯ КОЛОНКА: ВСЯ ИНФА */}
        <div className="flex flex-col">
          <p className="text-[#FF1E1E] font-black uppercase tracking-[0.3em] text-xs mb-4">
            {product.category || "Аутентичная Реплика"}
          </p>
          <h1 className="font-orbitron text-4xl md:text-6xl font-black italic uppercase leading-[0.9] mb-6">
            {product.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex flex-col">
              {product.oldPrice && (
                <span className="text-white/30 line-through text-lg font-orbitron italic leading-none mb-1">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
              <span className="text-4xl font-orbitron font-black text-[#FFD700] leading-none">
                {formatPrice(product.price)}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="px-3 py-1 bg-[#1A1A1A] text-[9px] uppercase tracking-widest font-bold text-green-500 border border-green-500/30 w-fit">
                В наличии
              </span>
              {product.oldPrice && (
                <span className="bg-[#FF1E1E] text-white text-[9px] px-2 py-1 font-black uppercase italic tracking-tighter">
                  Выгода {formatPrice(product.oldPrice - product.price)}
                </span>
              )}
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
            {product.description}
          </p>

          {product.specs && (
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10 border-y border-[#1A1A1A] py-8">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <p className="text-gray-600 text-[9px] uppercase tracking-widest mb-1">
                    {key}
                  </p>
                  <p className="font-orbitron font-bold text-xs uppercase tracking-wider text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-[#FF1E1E] hover:bg-white hover:text-black text-white py-5 font-orbitron font-black uppercase italic tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(255,30,30,0.2)]"
          >
            <ShoppingBag className="w-5 h-5" /> Добавить в коллекцию
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
