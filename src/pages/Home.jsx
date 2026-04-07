import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Zap, ShieldCheck } from "lucide-react";
import ModelView from "../components/ModelView";

const Home = () => {
  // Универсальный путь к модели, который учитывает base URL (для GitHub Pages)
  const carModelPath = `${import.meta.env.BASE_URL}models/car.glb`.replace(
    /\/+/g,
    "/",
  );

  return (
    <div className="pt-20 bg-[#050505] min-h-screen relative overflow-hidden">
      {/* ТЕХНОГЕННЫЙ ФОН (Статичный) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Сетка чертежа */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Мягкое статичное свечение в центре */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 40%, rgba(255,30,30,0.06) 0%, transparent 60%)`,
          }}
        ></div>
      </div>

      {/* MAIN HERO SECTION */}
      <section className="relative flex flex-col items-center justify-start pt-10 px-6 z-10">
        {/* Фоновое пульсирующее свечение */}
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF1E1E]/10 rounded-full blur-[130px] -z-10 animate-pulse"></div>

        {/* HEADER BLOCK — Название магазина и заголовок */}
        <div className="text-center mb-0 flex flex-col items-center">
          <span className="text-[#FF1E1E] font-orbitron font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-3 block animate-in fade-in duration-1000">
            Premium Collector Edition
          </span>

          <h1
            className="font-orbitron text-6xl md:text-[120px] font-black italic uppercase tracking-tighter leading-[0.8] mb-0 select-none text-white
                         relative pr-[0.15em] md:pr-[0.25em]"
          >
            <span className="block drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              BRICK
            </span>
            <span className="text-[#FF1E1E] drop-shadow-[0_0_30px_rgba(255,30,30,0.4)] block">
              CARS
            </span>
          </h1>
        </div>

        {/* 3D MODEL BLOCK */}
        <div className="w-full max-w-5xl h-[280px] md:h-[420px] -mt-16 md:-mt-28 relative z-20 animate-in zoom-in-95 duration-1000">
          {/* ИСПОЛЬЗУЕМ ИСПРАВЛЕННЫЙ ПУТЬ */}
          <ModelView modelPath={carModelPath} />
        </div>

        {/* DESCRIPTION & CTA */}
        <div className="text-center z-30 -mt-6 md:-mt-10">
          <div className="max-w-md mx-auto mb-8">
            <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium leading-relaxed">
              Сборные модели гиперкаров и легенд F1. <br />
              <span className="text-white/80 italic border-b border-[#FF1E1E]/30 pb-1 mt-2 inline-block">
                Инженерная точность в каждом блоке.
              </span>
            </p>
          </div>

          <Link
            to="/collection"
            className="group relative inline-flex overflow-hidden bg-[#FF1E1E] px-14 py-5 font-orbitron font-black uppercase italic tracking-widest text-[11px] text-white transition-all duration-500 hover:bg-white hover:text-black shadow-[0_15px_40px_rgba(255,30,30,0.2)] active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative z-10 flex items-center gap-2">
              Открыть каталог{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>
        </div>

        {/* ПЛИТКИ ПРЕИМУЩЕСТВ */}
        <div className="mt-20 mb-20 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl w-full px-4">
          <FeatureCard
            icon={<Trophy className="text-[#FFD700] w-5 h-5" />}
            title="Limited Edition"
            desc="Эксклюзивные серии"
          />
          <FeatureCard
            icon={<Zap className="text-[#FF1E1E] w-5 h-5" />}
            title="Доставка по РК"
            desc="Все города Казахстана"
          />
          <FeatureCard
            icon={<ShieldCheck className="text-white w-5 h-5" />}
            title="Премиум Качество"
            desc="Высокая детализация"
          />
        </div>
      </section>

      {/* ФИНАЛЬНЫЙ ГРАДИЕНТ ВНИЗУ */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="group bg-[#0A0A0A]/60 backdrop-blur-md border border-[#1A1A1A] p-7 hover:border-[#FF1E1E]/40 transition-all duration-500 flex items-center gap-5">
    <div className="p-2.5 bg-black border border-[#1A1A1A] group-hover:border-[#FF1E1E]/50 transition-colors shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-orbitron font-bold uppercase text-[10px] text-white tracking-widest leading-none mb-1">
        {title}
      </h4>
      <p className="text-[8px] text-gray-500 uppercase tracking-tight font-medium">
        {desc}
      </p>
    </div>
  </div>
);

export default Home;
