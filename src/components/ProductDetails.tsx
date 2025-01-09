import Cart from "../../public/icon-cart.svg";
import { createPortal } from "react-dom";
import ImageModal from "./ImageModal";
import { Products } from "../interfaces/products";
import { useCart } from "../stores/cart-store";

import { useState } from "react";

//aqui seria mejor crear un json file with the products and properties

export default function ProductDetails({ product }: { product: Products }) {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(0);
  const increase = useCart((state) => state.increase);
  const decrease = useCart((state) => state.decrease);
  const counter = useCart((state) => state.counter);
  const addToCart = useCart((state) => state.addToCart);

  return (
    <section id={`${product.id}`} className="flex flex-col md:flex-row gap-8">
      <section
        key={product.id}
        className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-24 md:px-24"
      >
        <article className="flex flex-col gap-6 md:items-end md:w-full w-fit">
          <button
            onClick={() => setModal(true)}
            className="w-full md:w-[375px] md:h-[375px] h-[300px] md:aspect-square flex place-items-center md:rounded-3xl overflow-hidden"
          >
            <img
              src={product.images.desktop[image]}
              alt="product_img"
              className="object-cover"
            />
          </button>
          <ul className="md:flex hidden flex-wrap justify-between gap-6">
            {product.images.desktop.map((img, index) => (
              <button
                key={img}
                onClick={() => setImage(index)}
                className={`${
                  image === index && "outline outline-2 outline-orange"
                } overflow-hidden rounded-xl flex place-items-center`}
              >
                <img
                  src={img}
                  alt="product_img"
                  width={75}
                  className={`${image === index && "opacity-50"}`}
                />
              </button>
            ))}
          </ul>
        </article>
        <article className="flex flex-col gap-3 md:gap-5 justify-center md:w-[75%] px-6 md:px-0">
          <p className="text-darkGrayishBlue uppercase text-sm font-bold md:text-[10px] tracking-widest">
            {product.company}
          </p>
          <h2 className="font-extrabold text-3xl md:text-4xl md:mb-4">
            {product.title} <br />
          </h2>
          <p className="text-darkGrayishBlue text-base md:text-sm leading-relaxed text-pretty">
            {product.description}
          </p>
          <div className="flex flex-row items-center md:items-start md:justify-start justify-between md:flex-col gap-2 my-4 md:my-2">
            <div className="flex gap-2 items-center">
              <h2 className="font-bold text-3xl md:text-xl tracking-wide">
                ${(product.price * (product.discount / 100)).toFixed(2)}
              </h2>
              <p className="flex items-center text-white md:text-[10px] px-2 md:h-5 h-7 leading-tight bg-veryDarkBlue rounded">
                {product.discount}%
              </p>
            </div>
            <p className="line-through text-darkGrayishBlue uppercase text-xl md:text-xs font-bold">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-1 bg-lightGrayishBlue rounded-lg h-full w-full md:w-auto">
              <button
                onClick={() => decrease(1)}
                className="md:w-fit w-24 px-4 py-2 font-bold text-orange text-2xl md:text-lg"
              >
                -
              </button>
              <span className="md:w-6 w-full flex items-center justify-center px-4 md:py-3 py-5 font-bold md:text-sm text-lg">
                {counter}
              </span>
              <button
                onClick={() => increase(1)}
                className="md:w-fit w-24 px-4 py-2 font-bold text-orange text-2xl md:text-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addToCart()}
              className="flex shadow-lg shadow-orange/30 w-full items-center justify-center gap-4 rounded-lg bg-orange md:py-3 py-5 px-12 text-sm font-bold hover:bg-orange/80"
            >
              <img src={Cart} alt="cart_icon" className="w-4" />
              Add to cart
            </button>
          </div>
        </article>
        {modal &&
          createPortal(
            <ImageModal
              image={product.images.desktop[image]}
              images={product.images.desktop}
              closeModal={() => setModal(false)}
            />,
            document.body
          )}
      </section>
    </section>
  );
}
