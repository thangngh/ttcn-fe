import React from "react";
import { useRouter } from "next/router";

interface IProps {
  children: React.ReactNode;
}

const PrivateRoute = ["/orders", "/profile", "/cart"];

const LayoutGuard = ({ children }: IProps) => {
  const router = useRouter();

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
