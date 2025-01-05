interface Props {
  image?: string;
  closeModal: () => void;
}
export default function ImageModal({ image, closeModal }: Props) {
  return (
    <div onClick={closeModal} className="flex flex-col items-center justify-center w-full h-screen bg-black/50 fixed top-0">
      <img src={image?.toString()} alt="product_img" />
    </div>
  );
}
