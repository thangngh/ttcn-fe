import { Menu } from "../menu";
import { ProductItem } from "./productItem";

const ProductFilter = ({ products, categories }: any) => {
  return (
    <div className="w-full py-20 px-6 bg-gray-100 mt-10" id="products-feed">
      <h1 className="font-medium text-xl text-center my-5">Sản Phẩm Cho Bạn</h1>
      <div className="flex items-center w-full max-w-screen-xl sm:mb-20 mb-16 gap-4  mx-auto overflow-x-auto hideScrollBar capitalize text-sm font-medium">
        <div>
          <svg
            className="w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        </div>

        <div
          className={` py-2 px-6 bg-white text-center rounded  transition-all cursor-pointer ease-in-out duration-200 shadow `}
        >
          All
        </div>
        <Menu />
      </div>
      <div className="grid grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 mx-auto max-w-screen-xl gap-x-6 gap-y-8">
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductFilter;
