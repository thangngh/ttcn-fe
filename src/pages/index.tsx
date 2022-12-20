import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import heroImg from "../assets/undraw_business_shop_re_ruf4.svg";
import { useAppDispatch } from "../../redux/hook";
import Screen from "../layouts/Screen";

import ProductComponent from "../../components/product/productComponent";
import SearchComponent from "../../components/search";
import ProductFilter from "../../components/product/productFilter";
const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
  }, []);

  return (
    <Screen>
      <div className="px-6  sm:py-16  xs:py-14 py-12">
        <div className="flex flex-col md:flex-row  md:justify-between md:items-center w-full max-w-screen-xl mx-auto h-full  bg-white overflow-hidden md:gap-1 gap-4 p-0.5">
          <div className="max-w-lg">
            <div className="text-blue-light font-extrabold">
              <h2 className="lg:text-6xl sm:text-5xl xxs:text-4xl text-3xl leading-snug">
                Stay Home
              </h2>
              <h1 className="lg:text-7xl sm:text-6xl xxs:text-5xl text-4xl leading-snug sm:mt-4 xxs:mt-2">
                Shop Online.
              </h1>
            </div>
            <p className="lg:mt-10  lg:mb-14 sm:mt-8 sm:mb-10 mt-6 mb-8 max-w-md font-medium lg:text-base text-sm">
              Shop online from a wide range of genuine products whenever you
              want 24x7.
            </p>
            <button className="button lg:px-10 lg:py-2 px-8  xl:text-xl lg:text-lg text-base flex items-center justify-center">
              <svg
                className="mr-2 xl:w-6 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              Shop Now
            </button>
          </div>
          <div className="max-w-xs mx-auto  md:mx-0 md:w-1/2 xl:w-auto md:max-w-lg sm:max-w-sm  xl:max-w-none">
            <Image
              src={heroImg}
              alt=""
              width={600}
              height={600}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
      <SearchComponent />
      {/* <ProductComponent /> */}
      <ProductFilter />
    </Screen>
  );
};

export default Home;
