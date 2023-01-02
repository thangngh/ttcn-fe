import { getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { ProductAPI } from "../../../../api-client/product/product-api";
import { GetProductByShop } from "../../../../redux/action/product/productAction";
import { getShopById } from "../../../../redux/action/users/userAction";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { RootState } from "../../../../redux/store";
import Screen from "../../../layouts/Screen";

const ViewShop = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const shop = useAppSelector((state: RootState) => state.UserReducer.shop);
  const productShop = useAppSelector(
    (state: RootState) => state.ProductReducer.productShop
  );
  const [product, setProduct] = React.useState<any>([]);
  React.useEffect(() => {
    if (router.isReady) {
      dispatch(getShopById(router.query.id as string));
      dispatch(GetProductByShop(router.query.id as string));
    }
  }, [router.isReady]);

  React.useEffect(() => {
    const data: any[] = [];
    productShop?.map(async (item) => {
      data.push({
        id: item.productid,
        name: item.productName,
        price: item.productPrice,
        image: await ProductAPI.getImageProduct(item.productImage),
      });
    });
    setProduct(data);
  }, [productShop]);

  React.useEffect(() => {
    (async () => {
      const session = await getSession();
      console.log("session", session);
    })();
  }, []);

  return (
    <Screen>
      <div className="w-full mx-auto mb-5 max-w-7xl ">
        <div className="w-screen sm:container mx-auto mb-10 px-4 relative ">
          <div className="flex space-x-2 items-center">
            <span className="text-xl font-medium">tên shop: {shop?.name}</span>
          </div>
          <div className="flex space-x-2 items-center">
            <span className="text-xl font-medium">
              địa chỉ: {shop?.address}
            </span>
          </div>
          <div className="flex space-x-2 items-center">
            <span className="text-xl font-medium">
              Mô tả: {shop?.description}
            </span>
          </div>
          <div className="flex space-x-2 items-center">
            <span className="text-xl font-medium">
              số điện thoại: {shop?.phone}
            </span>

            <span className="text-xl font-medium">email: {shop?.email}</span>
          </div>
        </div>
        <div className="w-screen sm:container space-y-4 space-x-3  mx-auto mb-10 px-4 relative ">
          <span>Sản phẩm của shop</span>

          <div>
            <div className="flex flex-wrap -mx-4">
              {product.map((item: any) => (
                <div
                  key={item.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-4"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative pb-48 max-h-48 max-w-48 overflow-hidden">
                      <Image
                        className="inset-0 h-full w-full object-cover"
                        src={item.image}
                        alt=""
                        layout="fill"
                      />

                      <div className="absolute inset-0 bg-black opacity-25"></div>

                      <div className="absolute bottom-0 left-0 w-full py-4 px-6 bg-gray-900 bg-opacity-75">
                        <h4 className="text-white text-lg max-w-full truncate  font-semibold mb-2">
                          {item.name}
                        </h4>
                        <p className="text-gray-200 text-white text-sm">
                          {item.price} <i>đ</i>
                        </p>

                        <div className="flex items-center mt-4">
                          <div className="flex items-center">
                            <button>
                              <span className="text-white">Add to cart</span>
                            </button>
                          </div>

                          <div className="flex items-center ml-auto">
                            <button className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                              <svg
                                className="h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default ViewShop;
