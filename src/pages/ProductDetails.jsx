import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import {
  ArrowLeft,
  ShoppingBag,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();

  // Находим товар в массиве по ID из URL
  const product = PRODUCTS.find((p) => p.id === id);

  // Форматирование цены (например, 150 000 ₸)
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₸";
  };

  // Если товар не найден
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

  return (
    <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto text-white min-h-screen">
      {/* Кнопка назад */}
      <Link
        to="/collection"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-10 uppercase text-[10px] font-black tracking-[0.2em]"
      >
        <ArrowLeft className="w-4 h-4" /> Назад в каталог
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Левая колонка: Изображение */}
        <div className="aspect-square bg-[#0F0F0F] border border-[#1A1A1A] flex items-center justify-center p-8 md:p-16 group relative overflow-hidden">
          {/* Декоративный фон за машиной */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF1E1E]/5 to-transparent opacity-50"></div>

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 relative z-10"
          />
        </div>

        {/* Правая колонка: Инфо */}
        <div className="flex flex-col">
          <p className="text-[#FF1E1E] font-black uppercase tracking-[0.3em] text-xs mb-4">
            {product.category || "Аутентичная Реплика"}
          </p>
          <h1 className="font-orbitron text-4xl md:text-6xl font-black italic uppercase leading-[0.9] mb-6">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-orbitron font-black text-[#FFD700]">
              {formatPrice(product.price)}
            </span>
            <span className="px-3 py-1 bg-[#1A1A1A] text-[9px] uppercase tracking-widest font-bold text-green-500 border border-green-500/30">
              В наличии
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
            {product.description ||
              "Коллекционная модель премиум-класса с исключительным вниманием к деталям. Идеальный выбор для истинных ценителей автоспорта."}
          </p>

          {/* Характеристики */}
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

          {/* Кнопка добавления */}
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-[#FF1E1E] hover:bg-white hover:text-black text-white py-5 font-orbitron font-black uppercase italic tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(255,30,30,0.2)]"
          >
            <ShoppingBag className="w-5 h-5" /> Добавить в коллекцию
          </button>

          {/* Дополнительные плашки */}
          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="flex flex-col items-center text-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gray-600" />
              <span className="text-[8px] uppercase text-gray-500 tracking-tighter">
                Официальная Лицензия
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <Truck className="w-5 h-5 text-gray-600" />
              <span className="text-[8px] uppercase text-gray-500 tracking-tighter">
                Доставка по РК
              </span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <RotateCcw className="w-5 h-5 text-gray-600" />
              <span className="text-[8px] uppercase text-gray-500 tracking-tighter">
                14 дней на возврат
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
