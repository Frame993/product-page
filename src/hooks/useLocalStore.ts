import { useEffect } from "react";
import { useCart } from "../stores/cart-store";

export const useLocalStore = () => {
  const cart = useCart((state) => state.cart);
  const counter = useCart((state) => state.counter);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const counter = localStorage.getItem("counter");
    if (cart && counter) {
      useCart.getState().counter = JSON.parse(counter);
      useCart.getState().cart = JSON.parse(cart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(useCart.getState().cart));
    localStorage.setItem("counter", JSON.stringify(useCart.getState().counter));

  }, [cart, counter]);
};
