import React, { useEffect } from "react";
import AppRouter from "./routes/AppRouter";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Disable certain key combinations (F12, Ctrl+Shift+I, etc.)
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey &&
          e.shiftKey &&
          ["I", "J", "C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toLowerCase() === "u") // Ctrl+U = view source
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return <AppRouter />;
};

export default App;
