import React from "react";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../redux/hook";
import { getProfile } from "../../redux/action/users/userAction";
interface IProps {
  children: React.ReactNode;
}

const PrivateRoute = ["/siuu"];

const LayoutGuard = ({ children }: IProps) => {
  const router = useRouter();
  // const dispatch = useAppDispatch();

  // React.useEffect(() => {
  //   dispatch(getProfile());
  // }, []);

  React.useEffect(() => {
    const currentPath = router.pathname;
    const isPrivateRouter = PrivateRoute.some((url) =>
      currentPath.includes(url)
    );
    isPrivateRouter &&
      !localStorage.getItem("accessToken") &&
      router.push(`/login?url=${currentPath}`, "/login");
  }, [router]);
  return <>{children}</>;
};

export default LayoutGuard;
