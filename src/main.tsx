import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "../public/fontawesome-all.css";
import registerServiceWorker from "./registerServiceWorker.tsx";

registerServiceWorker();

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
}
