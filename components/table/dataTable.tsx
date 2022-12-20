import React from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
} from "@mui/x-data-grid";
import {
  Box,
  createTheme,
  TextField,
  ThemeProvider,
  IconButton,
} from "@mui/material";

import NoRow from "./noRow";
import { IUser } from "../../type/users/users.interface";
// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

const theme = createTheme({
  components: {
    MuiTablePagination: {
      styleOverrides: {
        root: {
          color: "white",
        },
        actions: {
          color: "white",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: "white !important",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          color: "white",
          background: "rgb(31 41 55  / 1)",
          boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 50%)",
        },
      },
    },
  },
});

interface IProps {
  column: GridColDef[];
  row?: IUser[];
  children?: React.ReactNode;
}

const DataTable = ({ column, row, children }: IProps) => {
  const [pageSize, setPageSize] = React.useState<number>(10);
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-blue-500 dark:bg-gray-800 shadow-lg  rounded-md  p-3 h-[700px] overflow-y-scroll  !text-white font-medium group">
        {children}
        <DataGrid
          rows={row || []}
          className="!text-white !border-none h-full"
          columns={column}
          pageSize={pageSize}
          rowsPerPageOptions={[5]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          pagination
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Toolbar: GridToolbar,
            NoRowsOverlay: NoRow,
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default DataTable;
