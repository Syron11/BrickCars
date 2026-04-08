import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Импорт компонентов
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Импорт страниц
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";

function App() {
  // Состояние корзины
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("brick-cars-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const clearCart = () => {
    setCart([]);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("brick-cars-cart", JSON.stringify(cart));
  }, [cart]);

  // Функция добавления товара в корзину
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    // Автоматически открываем корзину при добавлении для фидбека пользователю
    setIsCartOpen(true);
  };
  

  // Изменение количества товара (+ / -)
  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  // Удаление товара из корзины
  const removeItem = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <div className="min-h-screen bg-[#050505] text-white font-inter flex flex-col">
      <ScrollToTop />
      {/* Шапка сайта (всегда сверху) */}
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.qty, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Основной контент (растягивается, чтобы прижать футер вниз) */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/collection"
            element={<Catalog addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
        </Routes>
      </main>

      {/* Футер (всегда снизу) */}
      <Footer />

      {/* Выезжающая корзина (Overlay) */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        updateQty={updateQty}
        removeItem={removeItem}
        clearCart={clearCart}
      />
    </div>
  );
}

export default App;
