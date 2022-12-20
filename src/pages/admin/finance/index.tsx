import { useRouter } from "next/router";
import SlideBar from "../../../../components/slideBar/slideBar";
import AdminScreen from "../../../layouts/AdminScreen";

const Finance = () => {
  const router = useRouter();
  console.log("finance router", { router });
  return (
    <AdminScreen>
      <h1>finace</h1>
    </AdminScreen>
  );
};
export default Finance;
