import { useRouter } from "next/router";
import Screen from "../../../layouts/Screen";
import Image from "next/image";
const FoodDetailItem = () => {
  const router = useRouter();
  return (
    <div className="w-full inline-table">
      <Screen>
        <div className="mx-auto my-16 px-6">
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
                <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4 text-gray-700 select-none">
                  Eggs Benedict
                </h1>
                <p className="text-center md:text-left lg:text-left text-sm poppins text-gray-500 leading-relaxed select-none">
                  {" "}
                  Demesne mention promise you justice arrived way.Amazing foods
                  are or and increasing to in especially inquietude companions
                  acceptance admiration.Outweigh it families distance wandered
                  ye..
                </p>
                <div className="flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8">
                  <h1 className="text-3xl font-bold text-black poppins select-none">
                    $8
                  </h1>
                  <div className="flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full">
                    <div className="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1 ">
                      <svg
                        className="w-6 h-6 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700 poppins select-none">
                      1
                    </span>
                    <div className="text-2xl bg-primary w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1 ">
                      <svg
                        className="w-6 h-6 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 lg:order-2">
                <Image
                  src={"https://i.ibb.co/ccZyWng/breakfast1.png"}
                  className="w-3/4 md:w-3/4 lg:w-full mx-auto"
                  layout="fixed"
                  width={300}
                  height={300}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Screen>
    </div>
  );
};
export default FoodDetailItem;
