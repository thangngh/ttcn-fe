import type { NextPage } from "next";
import React from "react";
import { getAllCustomers } from "../../redux/action/customers/CustomerAction";
import { useAppDispatch } from "../../redux/hook";
import { RootState } from "../../redux/store";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAllCustomers());
  }, [dispatch]);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Home;
