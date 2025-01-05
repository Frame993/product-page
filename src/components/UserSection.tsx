import Cart from "../../public/icon-cart.svg";
import Avatar from "../../public/image-avatar.png";


export default function UserSection() {
  return (
    <div className="flex items-center gap-8">
      <img src={Cart} alt="avatar_img" />
      <img src={Avatar} alt="avatar_img" width={40} height={40}/>
    </div>
  )
}
