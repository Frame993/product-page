import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import { Products } from "./interfaces/products";
import PRODUCTS from "./data.json";
import { useLocalStore } from "./hooks/useLocalStore";
import { useCart } from "./stores/cart-store";

export default function App() {

  useLocalStore();
  
  console.log(useCart.getState().cart);
  console.log(useCart.getState().counter);

  const products: Products[] = PRODUCTS;

  return (
    <>
      <Header />
      <main className="flex flex-col md:my-16 mb-12 mx-auto md:px-6">
        {products.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}
