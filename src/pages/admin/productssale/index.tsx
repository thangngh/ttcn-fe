import { useRouter } from "next/router";
import SlideBar from "../../../../components/slideBar/slideBar";
import AdminScreen from "../../../layouts/AdminScreen";

const ProductSale = () => {
  const router = useRouter();
  console.log("product sale", { router });
  return (
    <AdminScreen>
      <h1>product</h1>
    </AdminScreen>
  );
};

export default ProductSale;
