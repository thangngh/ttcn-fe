import Arrow from "../src/assets/undraw_handcrafts_mouse_arrow.svg";
import Image from "next/image";
const SearchComponent = () => {
  return (
    <div className="h-full my-10 w-full block">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
          Tìm kiếm sản phẩm tại đây
        </h1>

        <div className="rounded-full p-2 space-x-3 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-full md:w-96 flex items-center">
          <input
            type="text"
            className=" rounded-full px-4 py-2 shadow-card-layout focus:outline-none w-full bg-transparent"
            placeholder="Search here"
          />
          <button className="text-sm bg-red-500  shadow-card-layout border-none py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
            Search
          </button>
        </div>
        <Image
          src={Arrow}
          alt="arrow"
          width={100}
          height={100}
          className="mt-10 hidden sm:block"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
