import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../../../components/table/dataTable";
import SearchTable from "../../../../components/table/searchTable";
import MyShopScreen from "../../../layouts/MyShopScreen";
import Button from "../../../../components/button/button";
import Head from "next/head";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { RootState } from "../../../../redux/store";
import { useRouter } from "next/router";
import { GetProductByShop } from "../../../../redux/action/product/productAction";
const entityColumn = [
  "id",
  "name",
  "description",
  "price",
  "image",
  "quantity",
  "createdAt",
  "updatedAt",
];

const Column: GridColDef[] = entityColumn.map((item) => ({
  field: item,
  headerName: item.toUpperCase(),
  width: 120,
}));

const Products = () => {
  const dispatch = useAppDispatch();
  const dataRow = useAppSelector(
    (state: RootState) => state.ProductReducer.productShop
  );
  const router = useRouter();
  React.useEffect(() => {
    if (router.isReady) {
      setTimeout(() => {
        dispatch(GetProductByShop(router.query.shopid as string));
      }, 1000);
    }
  }, [dispatch, router.isReady, router.query.shopid]);

  const data: any[] = [];
  dataRow.map((item) =>
    data.push({
      id: item.products?.id,
      name: item.products?.name,
      description: item.products?.description,
      price: item.products?.price,
      image: item.products?.image,
      quantity: item.products?.quantity,
      createdAt: item.products?.createdat,
      updatedAt: item.products?.updatedat,
    })
  );
  console.log(data);
  console.log(dataRow);

  return (
    <MyShopScreen>
      <Head>My shop | Products</Head>
      <div className="h-full ml-14 my-4 md:ml-64 p-4 gap-4">
        <DataTable column={Column} row={data}>
          <h1 className="py-4 font-medium text-lg">Products</h1>
          <div className="flex items-center justify-between gap-5">
            <SearchTable />
            <Button />
          </div>
        </DataTable>
      </div>
    </MyShopScreen>
  );
};

export default Products;
