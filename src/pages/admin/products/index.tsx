import { useRouter } from "next/router";
import AdminScreen from "../../../layouts/AdminScreen";

const Products = () => {
  const router = useRouter();
  console.log("product router", { router });
  return (
    <AdminScreen>
      <h1>product</h1>
    </AdminScreen>
  );
};
export default Products;
