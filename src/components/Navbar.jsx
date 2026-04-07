import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (path, e) => {
    if (location.pathname === path) {
      e.preventDefault();
      scrollToTop();
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#050505]/95 backdrop-blur-xl border-b border-[#1A1A1A] h-16 md:h-20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative">
        {/* ЛЕВАЯ ЧАСТЬ: Кнопка меню (Мобильная) и ЛОГОТИП */}
        <div className="flex items-center gap-4 z-10">
          <button
            className="md:hidden p-2 text-white hover:text-[#FF1E1E] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <Link
            to="/"
            onClick={(e) => handleNavClick("/", e)}
            className="flex items-center gap-4 group relative h-full py-2"
          >
            <div className="relative h-full flex items-center">
              <img
                src="/src/assets/logo.png"
                alt="BrickCars"
                className="h-10 md:h-14 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,30,30,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,30,30,0.8)] transition-all duration-500"
              />
            </div>

            <div className="flex flex-col leading-none">
              {/* УБРАН group-hover:text-[#FFD700] */}
              <h1 className="font-orbitron font-black italic text-xl md:text-2xl tracking-tighter text-white transition-colors duration-300">
                BRICK
                <span className="text-[#FF1E1E]">CARS</span>
              </h1>
            </div>
          </Link>
        </div>

        {/* ЦЕНТРАЛЬНАЯ НАВИГАЦИЯ (Абсолютное центрирование экрана) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
          <Link
            to="/"
            onClick={(e) => handleNavClick("/", e)}
            className={`font-orbitron text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group ${
              location.pathname === "/"
                ? "text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Главная
            <span
              className={`absolute -bottom-2 left-0 h-[2px] bg-[#FF1E1E] shadow-[0_0_8px_#FF1E1E] transition-all duration-300 ${
                location.pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>

          <Link
            to="/collection"
            onClick={(e) => handleNavClick("/collection", e)}
            className={`font-orbitron text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group ${
              location.pathname === "/collection"
                ? "text-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            Каталог
            <span
              className={`absolute -bottom-2 left-0 h-[2px] bg-[#FF1E1E] shadow-[0_0_8px_#FF1E1E] transition-all duration-300 ${
                location.pathname === "/collection"
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Блок Корзины */}
        <div className="flex items-center z-10">
          <button
            onClick={onOpenCart}
            className="relative p-3 bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FF1E1E]/50 transition-all active:scale-95 group rounded-sm shadow-xl shadow-black/80"
          >
            <ShoppingBag className="w-5 h-5 text-white group-hover:text-[#FF1E1E] transition-colors duration-300" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#FF1E1E] text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black text-white shadow-[0_0_12px_#FF1E1E] animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Мобильное Меню */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#050505] border-b border-[#1A1A1A] md:hidden transition-all duration-500 ${
          isMenuOpen
            ? "max-h-80 opacity-100 py-10"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-8 font-orbitron font-bold uppercase text-[13px] tracking-[0.5em]">
          <Link
            to="/"
            onClick={(e) => handleNavClick("/", e)}
            className={
              location.pathname === "/" ? "text-[#FF1E1E]" : "text-white"
            }
          >
            Главная
          </Link>
          <Link
            to="/collection"
            onClick={(e) => handleNavClick("/collection", e)}
            className={
              location.pathname === "/collection"
                ? "text-[#FF1E1E]"
                : "text-white"
            }
          >
            Каталог
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
