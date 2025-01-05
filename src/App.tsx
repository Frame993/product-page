import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import { Products } from "./interfaces/products";
import PRODUCTS from "./data.json";


export default function App() {

  const products: Products[] = PRODUCTS;

  return (
    <>
      <Header />
      <main className="flex flex-col my-16 mx-auto px-6">
        {products.map((product) => (
          <ProductDetails key={product.id} product={product} />
        ))}
      </main>
    </>
  );
}
