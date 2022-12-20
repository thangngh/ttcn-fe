import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Logo from "../../../components/logo";
import { ILogin, ILoginGoogle } from "../../../type/auth/login.inteface";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useAppDispatch } from "../../../redux/hook";
import { loginAction } from "../../../redux/action/auth/AuthAction";
import { signIn, useSession } from "next-auth/react";
import Screen from "../../layouts/Screen";
const schemaValidation = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .trim("Username is required")
    .max(20, "Username is too long"),
  password: Yup.string()
    .required("Password is required")
    .trim("Password is required")
    .max(20, "Password is too long"),
});

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const session = useSession();
  const [redirect, setRedirect] = React.useState("/");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schemaValidation),
  });

  React.useEffect(() => {
    if (router.isReady) {
      if (router.query && router.query.url) {
        setRedirect(router.query.url as string);
      }
    }
  }, []);

  const handleRegister = () => {
    router.push({
      pathname: "/register",
      query: router.query || { url: "/" },
    });
  };

  const handleRedirect = () => {
    const query = new URLSearchParams(router.asPath);
    const url = query.has("/login?url")
      ? (query.get("/login?url") as string)
      : redirect;

    router.push(url);
  };

  const handleRedirectFacebook = () => {
    signIn("facebook");
  };

  const handleRedirectGoogle = () => {
    signIn("google");
  };

  const onLogin: SubmitHandler<ILogin> = async (data: ILogin) => {
    const { username, password } = data;
    await dispatch(
      loginAction({
        username,
        password,
        redirect: handleRedirect,
      })
    );
  };

  const onLoginFacebook = async () => {};

  const onLoginGoogle = async (payload: ILoginGoogle) => {};

  return (
    <>
      <div className="h-screen w-full">
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="bg-white w-full max-w-sm mt-6 p-4 rounded-lg shadow-card-layout">
            <h1 className="text-2xl my-3 font-medium">Login to your account</h1>
            <form onSubmit={handleSubmit(onLogin as any)}>
              <div className="flex flex-col space-y-6">
                <input
                  placeholder="User Name"
                  type="text"
                  {...register("username")}
                  className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">
                    {errors.username.message}
                  </p>
                )}
                <input
                  placeholder="Password"
                  type="password"
                  {...register("password")}
                  className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white shadow-card-layout-sm block text-center 3xl:text-xl rounded-lg py-2 px-5 w-full  mt-4 mx-auto"
              >
                Sign In
              </button>
              <div
                onClick={handleRegister}
                // href={"/register"}
              >
                <p className="text-base text-red-500 cursor-pointer text-center my-6 hover:underline">
                  Need an account ?
                </p>
              </div>
            </form>
            <div className="border-t border-gray-200 mt-6">
              <p className="text-center text-gray-400 py-4">OR </p>
              <div
                onClick={handleRedirectGoogle}
                className="flex items-center space-x-3 shadow-card-layout-sm justify-center  my-2 border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100"
              >
                <GoogleIcon className="w-6 h-6 text-red-500 ml-[-14px]" />
                <span className=" font-medium text-red-500 ">
                  Sign In With Google
                </span>
              </div>
              <div
                // onClick={handleRedirectFacebook}
                onClick={() => router.push("/login/facebook")}
                className="flex items-center space-x-3 shadow-card-layout-sm justify-center  my-2 border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100"
              >
                <FacebookIcon className="w-6 h-6 text-red-500 " />
                <span className=" font-medium text-red-500 ">
                  Sign In With Facebook
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
