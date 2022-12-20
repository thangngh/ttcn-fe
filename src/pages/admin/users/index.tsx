import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import SlideBar from "../../../../components/slideBar/slideBar";
import DataTable from "../../../../components/table/dataTable";
import { getAllUsersAction } from "../../../../redux/action/users/userAction";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { RootState } from "../../../../redux/store";
import Search from "@mui/icons-material/Search";
import SearchTable from "../../../../components/table/searchTable";
import AdminScreen from "../../../layouts/AdminScreen";

const entityColumn = [
  "id",
  "firstName",
  "lastName",
  "gender",
  "address",
  "phone",
  "email",
  "createdAt",
  "updatedAt",
];

const Column: GridColDef[] = entityColumn.map((item) => ({
  field: item,
  headerName: item.toUpperCase(),
  width: 120,
}));

const Users = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const dataRow = useAppSelector(
    (state: RootState) => state.UserReducer.result
  );

  React.useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  return (
    <AdminScreen>
      <div className="h-full ml-14 my-4 md:ml-64 p-4 gap-4">
        <DataTable column={Column} row={dataRow}>
          <div className="flex items-center justify-between gap-5">
            <SearchTable />
          </div>
        </DataTable>
      </div>
    </AdminScreen>
  );
};
export default Users;
