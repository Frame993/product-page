import { useState } from "react";
// @ts-expect-error , plugin svgr
import CloseIcon from "../../public/icon-close.svg?react";

interface Props {
  image?: string;
  images?: string[];
  closeModal: () => void;
}
export default function ImageModal({ image, images, closeModal }: Props) {
  const [imageIndex, setImageIndex] = useState(
    images?.findIndex((img) => img === image) || 0
  );

  // console.log(imageIndex);

  const handlePrevious = () => {
    if (images == null) return;
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else setImageIndex(images.length - 1);
  };

  const handleNext = () => {
    if (images && imageIndex < images?.length - 1)
      setImageIndex(imageIndex + 1);
    else setImageIndex(0);
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center w-full h-screen fixed bg-black/80 top-0 px-8">
      <div className="flex flex-col gap-4 items-end relative">
        {/* sliders */}
        <div className="flex justify-between w-[110%] top-1/2 md:-left-6 -left-4 absolute">
          <button
            onClick={() => handlePrevious()}
            className="  top-1/2 -left-6 flex items-center justify-center bg-lightGrayishBlue md:w-12 w-10 md:h-12 h-10 aspect-square rounded-full "
          >
            <img
              src="/icon-previous.svg"
              alt="previews"
              width={16}
              className="mr-1"
            />
          </button>
          <button
            onClick={() => handleNext()}
            className=" top-1/2 -right-6 flex items-center justify-center bg-lightGrayishBlue md:w-12 w-10 md:h-12 h-10 aspect-square rounded-full "
          >
            <img
              src="/icon-next.svg"
              alt="previews"
              width={16}
              className="-mr-1"
            />
          </button>
        </div>
        {/* closeModal */}
        <button
          onClick={closeModal}
          className="cursor-pointer top-0 left-0 text-grayishBlue"
        >
          <CloseIcon />
        </button>

        {/* mainImage */}
        <img
          src={`${images?.[imageIndex]}`}
          alt="product_img"
          width={500}
          className="rounded-3xl"
        />
      </div>
      {/* images array */}
      <div className="flex gap-4 justify-between">
        {images?.map((img, index) => (
          <button
            onClick={() => setImageIndex(index)}
           className={`${index === imageIndex && "outline outline-2 outline-orange rounded-lg bg-white/80"}`} key={index}>
            <img
              key={index}
              src={img}
              alt="product_img"
              width={80}
              className={`${
                index === imageIndex && "opacity-50"
              } rounded-lg`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
