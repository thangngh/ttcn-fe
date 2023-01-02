import { useRouter } from "next/router";
import SlideBar from "../../components/slideBar/slideBar";
import { Svg1 } from "../../components/svgComponent/svg-1";
import { Svg3 } from "../../components/svgComponent/svg-3";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import React from "react";
import { getShopByUser } from "../../redux/action/users/userAction";
import { RootState } from "../../redux/store";
import { authAPI } from "../../api-client/auth/authAPI";
interface IProps {
  children: React.ReactNode;
}

const PrivateRoute = ["/myshop"];

const data = [
  {
    id: 1,
    title: "dashboard",
    icon: <Svg1 />,
  },
  {
    id: 2,
    title: "products",
    icon: <Svg3 />,
  },
  {
    id: 3,
    title: "category",
    icon: <Svg3 />,
  },
];
const MyShopScreen = ({ children }: IProps) => {
  const dispatch = useAppDispatch();
  const shop = useAppSelector((state: RootState) => state.UserReducer.shop);
  const router = useRouter();
  const [role, setRole] = React.useState<any>();
  React.useEffect(() => {
    dispatch(getShopByUser());
  }, [dispatch]);

  React.useEffect(() => {
    if (shop !== undefined) {
      router.query.shopid = shop;
    } else {
      setTimeout(() => {
        router.push("/myshop/becomeshop");
      });
    }
  }, [router, shop]);

  React.useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    accessToken && setRole(authAPI.getRoles().then((res) => res.role?.name));
  }, []);

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white  text-black dark:text-white">
      <SlideBar data={data} />
      {children}
    </div>
  );
};
export default MyShopScreen;
