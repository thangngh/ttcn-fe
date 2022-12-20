import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export const ProductItem = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col  bg-white z-10  md:p-8 p-6 rounded-md shadow-lg">
      <p className="absolute top-2 right-3 text-xs italic text-gray-400 capitalize">
        {/* {category} */}
        laptop
      </p>
      <Image
        src={
          "https://hanoicomputercdn.com/media/product/250_68050_pcgm590_08_10.jpg"
        }
        height={200}
        width={200}
        alt=""
        objectFit="contain"
        className="cursor-pointer"
      />
      <h4 className="my-3 link font-medium capitalize">
        {/* <Link href={`/`}> */}
        {
          "PC GAMING HACOM TIGER T14 (i3 12100F/H610/8GB RAM/250GB SSD/GTX 1650/550W)"
        }
        {/* </Link> */}
      </h4>
      {/* <p className="text-xs  mb-2 line-clamp-2 text-gray-500 link">
        <Link href={`/product-details/`}>{description}</Link>
      </p> */}
      <div className="mb-5 mt-2 font-bold text-gray-700">
        {/* <Currency quantity={price} currency="INR" /> */}
        <span> 72.999.000₫ </span>
      </div>
      <button className="mt-auto button flex items-center justify-center">
        <svg
          className="w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="ml-2">Add to Cart</span>
      </button>
    </div>
  );
};
