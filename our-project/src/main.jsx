import { createRoot } from "react-dom/client";
import App from './App.jsx';
import { shopingContextProvider as ShopingContextProvider } from "./shopingContext/shoping.context.jsx";

createRoot(document.getElementById('root')).render(
  <ShopingContextProvider>
    <App />
  </ShopingContextProvider>
);