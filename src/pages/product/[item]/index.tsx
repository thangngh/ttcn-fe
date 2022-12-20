import Image from "next/image";
import Logo from "../../../../components/logo";
import Screen from "../../../layouts/Screen";

const ProductItem = () => {
  return (
    <Screen>
      <div className="w-full mx-auto mb-5 max-w-7xl">
        <div className="w-screen sm:container mx-auto mb-10 px-4 relative ">
          <div className=" flex space-x-2 items-center">
            <Logo />
            <span className="text-xl font-medium">| sản phẩm</span>
          </div>
          <div className="mt-4 cursor-pointer">
            <span className="text-md font-semibold">{"< quay lại"}</span>
          </div>
        </div>
        <div className="w-full sm:container mx-auto px-4">
          <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-4 gap-8">
            <div className="mx-auto max-w-full w-96 max-h-full h-96 relative">
              <Image
                src={"https://i.pravatar.cc/150?img=32"}
                layout="fill"
                alt=""
                className="bg-cover"
                objectFit="cover"
              />
            </div>
            <div className="flex-grow xl:max-w-2xl lg:max-w-xl  md:max-w-md">
              <h3 className="font-bold xl:text-4xl  lg:text-3xl text-2xl mb-2 capitalize">
                Bình Giữ Nhiệt Hiển Thị Nhiệt Độ Phong Cách Cổ Trang Chất Liệu
                Inox 304 Cao Cấp Dung Tích 500ml
              </h3>
              <p className="text-blue-400 capitalize mb-4 font-medium">
                laptop
              </p>
              <div className="text-2xl font-semibold text-gray-700">
                <div className="text-base font-mono max-w-[100px] w-full">
                  <div className="my-4 space-x-4 flex items-center">
                    <button className="p-2  rounded-full bg-red-500 text-white font-semibold">
                      <span className=" text-sm">+</span>
                    </button>
                    <span>1</span>
                    <button className="p-2 rounded-full bg-red-500 text-white font-semibold">
                      <span className=" text-sm">-</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex xs:flex-row flex-col sm:gap-8 gap-6">
                <button className=" flex items-center justify-center">
                  <span className="ml-2 px-10  py-2 rounded-md bg-red-500 text-white ">
                    Add to Cart
                  </span>
                </button>
                <button className="  flex items-center justify-center">
                  <span className="ml-2 px-10   py-2 rounded-md  bg-red-500 text-white">
                    Buy Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};
export default ProductItem;
