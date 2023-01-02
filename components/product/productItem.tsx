import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ProductAPI } from "../../api-client/product/product-api";
import { getAllProductByShopAction } from "../../redux/action/product/productAction";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
export const ProductItem = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [data, setData] = React.useState<any[]>([]);

  const product = useAppSelector(
    (state: RootState) => state.ProductReducer.productByShop
  );

  React.useEffect(() => {
    const products: any[] = [];
    product?.map(async (item) => {
      products.push({
        id: item.productId,
        name: item.productName,
        description: item.productDescription,
        price: item.productPrice,
        image: await ProductAPI.getImageProduct(item.productImage),
        category: item.categoryname,
        shop: item.shopName,
        shopid: item.shopId,
      });
    });
    setData(products);
  }, [product]);

  React.useEffect(() => {
    dispatch(getAllProductByShopAction());
  }, []);
  return (
    <>
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col  bg-white z-10  md:p-8 p-6 rounded-md shadow-lg"
          >
            <p className="absolute top-2 right-3 text-xs italic text-gray-400 capitalize">
              {item.category}
            </p>
            <Image
              src={item.image}
              height={200}
              width={200}
              alt=""
              objectFit="contain"
              className="cursor-pointer"
            />
            <h4 className="my-3 link font-medium capitalize">
              {item.description}
            </h4>
            <p className="text-xs  mb-2 line-clamp-2 text-gray-500 link">
              <Link href={`/viewshop/${item.shopid}`}>{item.shop}</Link>
            </p>
            <div className="mb-5 mt-2 font-bold text-gray-700">
              <span>
                {item.price} <i>₫</i>{" "}
              </span>
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
        ))}
    </>
  );
};
