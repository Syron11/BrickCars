import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-[#1A1A1A] pt-16 pb-8 px-4 mt-auto relative z-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Логотип и описание */}
        <div className="col-span-1 md:col-span-1">
          <Link
            to="/"
            className="font-orbitron font-black italic uppercase tracking-tighter leading-none flex flex-col mb-6"
          >
            <span className="text-white text-2xl leading-none">BRICK</span>
            <span className="text-[#FF1E1E] text-2xl ml-4 leading-none shadow-[#FF1E1E]/20 drop-shadow-sm">
              CARS
            </span>
          </Link>
          <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-relaxed">
            Премиальные коллекционные модели для ценителей инженерного искусства
            и скорости. Каждая деталь — это история великих побед.
          </p>
        </div>

        {/* Навигация */}
        <div>
          <h4 className="font-orbitron font-bold uppercase text-[11px] text-white mb-6 tracking-widest">
            Навигация
          </h4>
          <ul className="space-y-4 text-[10px] uppercase font-bold text-gray-500 tracking-widest">
            <li>
              <Link to="/" className="hover:text-[#FF1E1E] transition-colors">
                Главная
              </Link>
            </li>
            <li>
              <Link
                to="/collection"
                className="hover:text-[#FF1E1E] transition-colors"
              >
                Каталог моделей
              </Link>
            </li>
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h4 className="font-orbitron font-bold uppercase text-[11px] text-white mb-6 tracking-widest">
            Поддержка
          </h4>
          <ul className="space-y-4 text-[10px] uppercase font-bold text-gray-500 tracking-widest">
            <li className="flex items-center gap-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-[#FF1E1E]" />
              <span className="font-inter lowercase tracking-normal">
                info@brickcars.kz
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[#FF1E1E]"
              />
              <span className="font-inter italic">Астана, Казахстан</span>
            </li>
          </ul>
        </div>

        {/* Соцсети и Автор 3D модели */}
        <div>
          <h4 className="font-orbitron font-bold uppercase text-[11px] text-white mb-6 tracking-widest">
            Связь и Ассеты
          </h4>
          <div className="flex gap-3 mb-8">
            <a
              href="https://instagram.com/твой_логин"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#0F0F0F] border border-[#1A1A1A] hover:border-[#E1306C] transition-all group rounded-sm text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/77XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#0F0F0F] border border-[#1A1A1A] hover:border-[#25D366] transition-all group rounded-sm text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/твой_логин"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#0F0F0F] border border-[#1A1A1A] hover:border-[#24A1DE] transition-all group rounded-sm text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faTelegramPlane} className="w-4 h-4" />
            </a>
          </div>

          {/* Блок автора модели */}
          <div className="pt-4 border-t border-[#1A1A1A]">
            <a
              href="https://sketchfab.com/TheoDevF12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <div className="w-1.5 h-1.5 bg-[#FF1E1E] rounded-full group-hover:animate-ping shadow-[0_0_5px_#FF1E1E]"></div>
              <span className="text-[9px] text-gray-600 uppercase font-bold tracking-tighter group-hover:text-gray-300 transition-colors">
                3D Asset:{" "}
                <span className="text-gray-400">TheoDevF1 (Sketchfab)</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Копирайт и юридическая часть */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-[#1A1A1A]/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-inter text-center md:text-left">
          © 2026 BRICK CARS KAZAKHSTAN. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </p>
        <p className="text-[7px] text-gray-700 uppercase tracking-widest max-w-md text-center md:text-right italic">
          Независимый дистрибьютор. Все товарные знаки принадлежат их законным
          владельцам.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
