// import Button from "../../../../components/button/button";
import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import Head from "next/head";
import DataTable from "../../../../components/table/dataTable";
import SearchTable from "../../../../components/table/searchTable";
import MyShopScreen from "../../../layouts/MyShopScreen";
import { Box, Modal, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { RootState } from "../../../../redux/store";
import { useRouter } from "next/router";
import {
  createCategoryAction,
  getCategoryByShopIdAction,
} from "../../../../redux/action/category/categoryAction";
import { useForm } from "react-hook-form";
import { pushCategory } from "../../../../redux/reducer/CategorySlice";

const entityColumn = ["id", "name", "createdat", "updatedat"];

const Column: GridColDef[] = entityColumn.map((item) => ({
  field: item,
  headerName: item.toUpperCase(),
  width: 120,
  editable: true,
}));

const Category = () => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const dataRow = useAppSelector(
    (state: RootState) => state.CategoryReducer.categoryList
  );
  const { register, handleSubmit } = useForm<{
    name: string;
    description: string;
  }>();

  React.useEffect(() => {
    if (router.isReady) {
      setTimeout(() => {
        dispatch(getCategoryByShopIdAction(router.query.shopid as string));
      }, 1000);
    }
  }, [dispatch, router.isReady, router.query.shopid]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onCreateCategory = async (data: { name: string }) => {
    await dispatch(
      createCategoryAction({
        name: data.name,
        shopid: router.query.shopid as string,
      })
    );
    pushCategory(dataRow);
    handleClose();
  };

  return (
    <MyShopScreen>
      <Head>My shop | Category</Head>
      <div className="h-full ml-14 my-4 md:ml-64 p-4 gap-4">
        <DataTable column={Column} row={dataRow}>
          <h1 className="py-4 font-medium text-lg">Category</h1>
          <div className="flex items-center justify-between gap-5">
            <SearchTable />
            <div className="bg-gray-700 px-3 py-1 rounded shadow-card-layout ">
              <button type="submit" onClick={handleOpen}>
                Add
              </button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-full overflow-auto w-full max-w-3xl p-4 bg-white">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Add new Category
                  </Typography>
                  <form onSubmit={handleSubmit(onCreateCategory)}>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name">Name</label>
                        <input
                          {...register("name")}
                          className="w-full px-4 py-3 rounded-lg ring-red-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 focus:shadow-xl"
                        />
                      </div>
                    </div>
                    <div className="text-center py-3">
                      <button
                        type="submit"
                        className="bg-red-500 text-white shadow-card-layout-sm block text-center  rounded-lg py-2 px-5 w-full max-w-xs  mt-4 mx-auto"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </Box>
              </Modal>
            </div>
          </div>
        </DataTable>
      </div>
    </MyShopScreen>
  );
};

export default Category;
