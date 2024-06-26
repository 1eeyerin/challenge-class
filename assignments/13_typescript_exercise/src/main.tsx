import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TanstackQueryProvider from "./query/TanstackQueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanstackQueryProvider>
      <App />
    </TanstackQueryProvider>
  </React.StrictMode>
);
