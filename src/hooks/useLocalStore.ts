import { useEffect } from "react";
import { useCart } from "../stores/cart-store";

export const useLocalStore = () => {
  const cart = useCart((state) => state.cart);
  const counter = useCart((state) => state.counter);


  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    const localCounter = localStorage.getItem("counter");

    if (localCart && localCounter ) {
      useCart.setState({ cart: JSON.parse(localCart) });
      useCart.setState({ counter: JSON.parse(localCounter) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [cart, counter]);

};
