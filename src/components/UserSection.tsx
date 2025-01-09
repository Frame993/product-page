import Cart from "../../public/icon-cart.svg";
import Avatar from "../../public/image-avatar.png";
import { useCart } from "../stores/cart-store";

export default function UserSection() {
  const cart = useCart((state) => state.cart);

  return (
    <div className="flex items-center md:gap-8 gap-3">
      <div className="relative p-2">
        <img src={Cart} alt="avatar_img" />
        {cart > 0 && (
          <span className="absolute top-1 rigth-0 text-[8px] text-white right-0 bg-orange rounded-full w-5 h-3 flex items-center justify-center">
            {cart}
          </span>
        )}
      </div>
      <img src={Avatar} alt="avatar_img" width={40} height={40} />
    </div>
  );
}
