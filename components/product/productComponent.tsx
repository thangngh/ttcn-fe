import { Menu } from "../menu";
import { ProductItem } from "./productItem";

const ProductComponent = () => {
  return (
    <div className="my-2">
      <Menu />
      <div className="container mx-auto px-5 flex flex-wrap space-y-1 overflow-hidden">
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductComponent;
