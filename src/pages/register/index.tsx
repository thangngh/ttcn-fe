import { useRouter } from "next/router";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IPayLoad, IRegister } from "../../../type/auth/register.interface";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../../components/logo";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useAppDispatch } from "../../../redux/hook";
import { registerAction } from "../../../redux/action/auth/AuthAction";

const schemaValidation = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .trim("Email is required")
    .max(50, "Email is too long")
    .matches(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm, {
      message: "Email is invalid",
    }),
  userName: Yup.string()
    .required("Username is required")
    .trim("Username is required")
    .max(20, "Username is too long"),
  passWord: Yup.string()
    .required("Password is required")
    .trim("Password is required")
    .max(20, "Password is too long")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
      {
        message:
          "Password must contain at least 1 uppercase, 1 lowercase, 1 number and 1 special character",
      }
    ),
  fullName: Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .trim("First name is required")
      .max(20, "First name is too long"),
    lastName: Yup.string()
      .required("Last name is required")
      .trim("Last name is required")
      .max(20, "Last name is too long"),
  }),
});

const Register = () => {
  const [redirect, setRedirect] = React.useState("/login");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPayLoad>({
    resolver: yupResolver(schemaValidation),
  });

  React.useEffect(() => {
    if (router.isReady) {
      if (router.query && router.query.url) {
        setRedirect(router.query.url as string);
      }
    }
  }, []);

  const handleRedirectToLogin = () => {
    const query = new URLSearchParams(router.asPath);
    const url = query.has("/login?url")
      ? (query.get("/login?url") as string)
      : redirect;

    router.push(url);
  };

  const onRegister: SubmitHandler<IRegister> = async (data: IRegister) => {
    const { email, passWord, userName, fullName } = data;
    await dispatch(
      registerAction({
        email,
        passWord,
        userName,
        fullName,
        redirect: handleRedirectToLogin,
      })
    );
  };

  return (
    <div className="h-max w-full banner">
      <div className="flex flex-col justify-center items-center h-auto">
        <Logo />
        <div className="bg-white w-full sm:w-96 mt-6 p-4 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit(onRegister as any)}>
            <div className="flex flex-col space-y-6">
              <div className="space-y-6 flex-1">
                <input
                  type="text"
                  placeholder="First name"
                  {...register("fullName.firstName")}
                  className={`w-full px-4 py-3 rounded-lg ${
                    errors.fullName?.firstName
                      ? "ring-red-200"
                      : "ring-green-200"
                  } focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl`}
                />
                {errors.fullName?.firstName && (
                  <p className="text-red-500 text-sm mt-0">
                    {errors.fullName?.firstName.message}
                  </p>
                )}

                <input
                  type="text"
                  placeholder="Last name"
                  {...register("fullName.lastName")}
                  className={`w-full px-4 py-3 rounded-lg ${
                    errors.fullName?.lastName
                      ? "ring-red-200"
                      : "ring-green-200"
                  } focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl`}
                />
                {errors.fullName?.lastName && (
                  <p className="text-red-500 text-sm mt-0">
                    {errors.fullName.lastName.message}
                  </p>
                )}
              </div>
              <input
                type="text"
                placeholder="Email"
                {...register("email")}
                className={`w-full px-4 py-3 rounded-lg ${
                  errors.email ? "ring-red-200" : "ring-green-200"
                } focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-0">
                  {errors.email.message}
                </p>
              )}
              <input
                type="text"
                placeholder="Username"
                {...register("userName")}
                className={`w-full px-4 py-3 rounded-lg ${
                  errors.userName ? "ring-red-200" : "ring-green-200"
                } focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl`}
              />
              {errors.userName && (
                <p className="text-red-500 text-sm mt-0">
                  {errors.userName.message}
                </p>
              )}
              <input
                type="password"
                placeholder="passWord"
                {...register("passWord")}
                className={`w-full px-4 py-3 rounded-lg ${
                  errors.passWord ? "ring-red-200" : "ring-green-200"
                } focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl`}
              />
              {errors.passWord && (
                <p className="text-red-500 text-sm mt-0">
                  {errors.passWord.message}
                </p>
              )}
              {/* <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )} */}
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white block text-center 3xl:text-xl rounded-lg py-2 px-5 w-full shadow-lg mt-4 mx-auto"
            >
              Register
            </button>
            <Link href={"/login"}>
              <p className="text-base text-red-500 cursor-pointer text-center my-6 hover:underline">
                Already have an account?
              </p>
            </Link>
          </form>
          <div className="border-t border-gray-200 mt-6">
            <p className="text-center text-gray-400 py-4">OR</p>
            <div className="flex items-center space-x-3 justify-center my-2 border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100">
              <GoogleIcon className="w-6 h-6 text-red-500 ml-[-14px]" />
              <span className="font-normal text-red-500">
                Sign up with Google
              </span>
            </div>
            <div className="flex items-center space-x-3 justify-center  my-2 border border-gray-300 rounded-lg w-full py-3 cursor-pointer hover:bg-gray-100">
              <FacebookIcon className="w-6 h-6 text-red-500 " />
              <span className=" font-normal text-red-500 ">
                Sign up With Facebook
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
