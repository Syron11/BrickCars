import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";

const Cart = ({ isOpen, onClose, items, updateQty, removeItem }) => {
  // Расчет общей суммы всей корзины
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Функция для красивого вывода тенге (150 000 ₸)
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₸";
  };

  // Функция отправки заказа в WhatsApp
  const checkoutWhatsApp = () => {
    const phoneNumber = "77777777777"; // ЗАМЕНИ НА СВОЙ НОМЕР БЕЗ + (например: 77071234567)

    // Формируем список товаров с детализацией: Цена за шт x Кол-во — Сумма
    const itemsList = items
      .map((i) => {
        const itemTotal = i.price * i.qty;
        return `🏎️ ${i.name}\n[${formatPrice(i.price)} x ${i.qty} шт] — ${formatPrice(itemTotal)}`;
      })
      .join("\n\n");

    const finalText = `*НОВЫЙ ЗАКАЗ (GRID LEGENDS)*\n\n${itemsList}\n\n*--------------------*\n*ИТОГО К ОПЛАТЕ: ${formatPrice(total)}*\n\n📍 Доставка: Казахстан\n📦 Проверьте наличие и детали сборки.`;

    // Открываем WhatsApp в новой вкладке
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalText)}`,
      "_blank",
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex justify-end">
      {/* Клик по фону закрывает корзину */}
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-[420px] bg-[#0A0A0A] h-full flex flex-col border-l border-[#1A1A1A] shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Шапка корзины */}
        <div className="p-6 border-b border-[#1A1A1A] flex justify-between items-center bg-[#0F0F0F]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <ShoppingBag className="w-6 h-6 text-[#FF1E1E]" />
              {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </div>
            <h2 className="font-orbitron font-black italic uppercase text-white tracking-[0.2em] text-lg">
              Корзина
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white hover:rotate-90 transition-all duration-300"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Список товаров */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {items.length === 0 ? (
            <div className="text-center py-20 opacity-20 flex flex-col items-center">
              <ShoppingBag className="w-16 h-16 mb-4" />
              <p className="font-orbitron text-[10px] uppercase tracking-[0.4em]">
                В ангаре пусто
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 group animate-in fade-in slide-in-from-bottom-2"
              >
                {/* Превью товара */}
                <div className="w-24 h-24 bg-[#0F0F0F] border border-[#1A1A1A] p-2 flex-shrink-0 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain relative z-10"
                  />
                  <div className="absolute inset-0 bg-[#FF1E1E]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Инфо о товаре */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-orbitron font-bold uppercase italic text-[11px] text-white leading-tight mb-1 flex-1">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-700 hover:text-[#FF1E1E] transition-colors ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[#FFD700] font-black text-sm tracking-tight">
                      {formatPrice(item.price)}{" "}
                      <span className="text-[9px] text-gray-500 font-normal">
                        / шт.
                      </span>
                    </p>
                  </div>

                  {/* Контроллер количества */}
                  <div className="flex items-center mt-3">
                    <div className="flex items-center border border-[#1A1A1A] bg-black overflow-hidden">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="p-2 hover:bg-[#1A1A1A] text-gray-400 hover:text-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-[11px] font-orbitron font-bold text-white px-4 min-w-[40px] text-center border-x border-[#1A1A1A]">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="p-2 hover:bg-[#1A1A1A] text-gray-400 hover:text-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="ml-auto text-[10px] font-black text-gray-500 uppercase italic">
                      {formatPrice(item.price * item.qty)}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Футер корзины */}
        {items.length > 0 && (
          <div className="p-8 border-t border-[#1A1A1A] bg-[#0F0F0F]">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-bold tracking-[0.2em] mb-1">
                  Итого к оплате
                </p>
                <p className="font-orbitron font-black text-3xl text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                  {formatPrice(total)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-green-500 uppercase font-bold italic mb-1 tracking-widest">
                  ● В наличии
                </p>
                <p className="text-[9px] text-gray-500 uppercase font-bold tracking-tighter italic">
                  Доставка по РК
                </p>
              </div>
            </div>

            <button
              onClick={checkoutWhatsApp}
              className="group w-full bg-[#FF1E1E] text-white py-5 font-orbitron font-black uppercase italic tracking-[0.15em] text-xs hover:bg-white hover:text-black transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Оформить заказ в WhatsApp
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>

            <p className="text-center mt-5 text-[8px] text-gray-600 uppercase tracking-[0.2em] font-medium">
              Менеджер свяжется с вами для уточнения города доставки
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
