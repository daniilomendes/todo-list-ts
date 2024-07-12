import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { TodoContextProvider } from "./contexts/TodoContext.tsx";

import "./index.module.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
