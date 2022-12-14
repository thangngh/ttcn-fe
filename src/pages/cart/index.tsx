import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../../../components/logo";
import Screen from "../../layouts/Screen";

const Cart = () => {
  const router = useRouter();

  const handleRouterBack = () => {
    router.back();
  };

  return (
    <Screen>
      <div className="w-full mx-auto mb-5 max-w-7xl ">
        <div className="w-screen sm:container mx-auto mb-10 px-4 relative ">
          <div className=" flex space-x-2 items-center">
            <Logo />
            <span className="text-xl font-medium">| Giỏ hàng</span>
          </div>
          <div className="mt-4 cursor-pointer">
            <span className="text-md font-semibold" onClick={handleRouterBack}>
              {"< quay lại"}
            </span>
          </div>
        </div>

        <div className="w-screen sm:container mx-auto my-4 bg-[#f5f5f5] py-2 px-4 relative">
          <div className="block">
            <div className="flex justify-between flex-auto">
              <div className="w-full max-w-1/2">
                <div className="space-x-3 flex items-center">
                  <input type="checkbox" name="" id="" />
                  <span className="max-w-[100px] w-full font-mono">
                    Sản Phẩm
                  </span>
                </div>
              </div>
              <div className="w-full max-w-1/2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-mono max-w-[100px] w-full">
                    Đơn giá
                  </span>
                  <span className="text-base font-mono max-w-[100px] w-full">
                    Số lượng
                  </span>
                  <span className="text-base font-mono max-w-[100px] w-full">
                    Số tiền
                  </span>
                  <span className="text-base font-mono max-w-[100px] w-full">
                    Hành động
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen sm:container mx-auto my-2 bg-[#f5f5f5] px-4 relative">
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between flex-auto">
              <div className="w-full max-w-1/2">
                <div className="space-x-3 my-2 flex items-center">
                  <input type="checkbox" name="" id="" />
                  <span className="max-w-[100px] w-full font-mono">
                    Tên Shop
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-auto">
              <div className="w-full max-w-1/2">
                <div className="space-x-3 my-2 flex items-center">
                  <input type="checkbox" name="" id="" />
                  <div className="flex justify-between space-x-2">
                    <div className="relative w-20 h-20">
                      <Image
                        src={"https://i.pravatar.cc/150?img=32"}
                        layout="fill"
                        alt=""
                        className="bg-cover bg-no-repeat"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex flex-col max-w-sm space-y-2 justify-start">
                      <span className="sm:truncate break-inside-auto text-sm font-medium">
                        Bình Giữ Nhiệt Hiển Thị Nhiệt Độ Phong Cách Cổ Trang
                        Chất Liệu Inox 304 Cao Cấp Dung Tích 500ml
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-1/2">
                <div className="flex items-center justify-between">
                  <span className="text-base font-mono max-w-[100px] w-full">
                    ₫2.568.000
                  </span>
                  <span className="text-base font-mono max-w-[100px] w-full">
                    <div className="my-4 space-x-4 flex items-center">
                      <button className="p-2  rounded-full bg-red-500 text-white font-semibold">
                        <span className=" text-sm">+</span>
                      </button>
                      <span>1</span>
                      <button className="p-2 rounded-full bg-red-500 text-white font-semibold">
                        <span className=" text-sm">-</span>
                      </button>
                    </div>
                  </span>
                  <span className="text-base font-mono max-w-[100px] w-full">
                    ₫2.568.000
                  </span>
                  <span className="text-base font-mono max-w-[100px] w-full">
                    xóa
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen sm:container mx-auto my-2 bg-[#f5f5f5] p-4 sticky z-20 bottom-0 border-t-2">
          <div className="block">
            <div className="flex justify-between flex-auto">
              <div className="w-full max-w-1/2">
                <div className="space-x-3 flex items-center">
                  <input type="checkbox" name="" id="" />
                  <span className="max-w-[100px] w-full font-mono">
                    Chọn tất cả
                  </span>
                </div>
              </div>
              <div className="w-full max-w-1/2">
                <div className="flex items-center justify-end space-x-4">
                  <div className="flex items-center justify-between ">
                    <span className="text-base font-mono  ">
                      Tổng Thanh Toán (1 sản phẩm):
                    </span>{" "}
                    <span className="text-base font-mono ">thành tiền</span>
                  </div>
                  <button className="bg-red-500 px-6 py-3 rounded-md text-white">
                    <span>Mua hàng</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default Cart;
