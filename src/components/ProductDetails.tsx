import Cart from "../../public/icon-cart.svg";
import { createPortal } from "react-dom";
import ImageModal from "./ImageModal";
import { Products } from "../interfaces/products";

import { useState } from "react";

//aqui seria mejor crear un json file with the products and properties

export default function ProductDetails({ product }: { product: Products }) {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState(0);

  return (
    <section id={`${product.id}`} className="flex flex-col md:flex-row gap-8">
      <section key={product.id} className="flex gap-8">
        <article className="flex flex-col gap-8">
          <button
            onClick={() => setModal(true)}
            className="w-[375px] h-[375px] flex place-items-center rounded-3xl overflow-hidden"
          >
            <img
              src={product.images.desktop[image]}
              alt="product_img"
              className="w-full h-full object-contain aspect-square"
            />
          </button>
          <ul className="flex flex-wrap gap-4">
            {product.images.desktop.map((img, index) => (
              <li
                key={img}
                onClick={() => setImage(index)}
                className="overflow-hidden rounded-xl"
              >
                <button>
                  <img src={img} alt="product_img" width={80} />
                </button>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <p>Sneaker Company</p>
          <h3>
            Fall Limited Edition Sneakers <br />
          </h3>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex items-center gap-4">
            <h2>$125.00</h2>
            <p className="text-paleOrange">50%</p>
          </div>
          <p className="line-through text-grayishBlue">$250.00</p>
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center gap-4 rounded-lg bg-orange py-4 px-8 text-sm font-bold hover:bg-paleOrange">
              <img src={Cart} alt="cart_icon" className="w-4" />
              Add to cart
            </button>
          </div>
        </article>
        {modal &&
          createPortal(
            <ImageModal
              image={product.images.desktop[image]}
              closeModal={() => setModal(false)}
            />,
            document.body
          )}
      </section>
    </section>
  );
}
