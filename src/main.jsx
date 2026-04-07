import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // Поменяли импорт
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Заменили BrowserRouter на HashRouter */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
