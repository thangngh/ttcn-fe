import type { NextPage } from "next";
import React from "react";
import Food from "../../components/Food/Food";
import { getProfileUserAction } from "../../redux/action/auth/AuthAction";
import { useAppDispatch } from "../../redux/hook";
import Screen from "../layouts/Screen";
const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      dispatch(getProfileUserAction(accessToken));
    }
  }, []);

  return (
    <div className="w-full inline-table">
      <Screen>
        <div className="h-screen w-full block banner">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl poppins font-semibold text-gray-700">
              Best food waiting for your belly
            </h1>

            <div className="rounded-full p-1 box-border mt-8 bg-white overflow-hidden ring-red-300 focus:ring-4 w-96 flex items-center">
              <input
                type="text"
                className=" rounded-full px-4 focus:outline-none w-full bg-transparent"
                placeholder="Search here"
              />
              <button className="text-sm bg-red-500 border-none py-3 px-6 rounded-full text-white poppins ring-red-300 focus:ring-4 transition duration-300 hover:scale-105 transform">
                Search
              </button>
            </div>
          </div>
        </div>
        <Food />
      </Screen>
    </div>
  );
};

export default Home;
