import {
  Box,
  TextField,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& .MuiInput-underline:before": {
            borderBottom: "1px solid white",
            borderColor: "divider",
          },
          "::placeholder": {
            color: "white",
          },
        },
        input: {
          color: "white !important",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "white",
          marginRight: "0.5rem",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid white",
        },
      },
    },
  },
});
const SearchTable = () => {
  const [searchText, setSearchText] = React.useState("");
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <TextField
          variant="standard"
          value={searchText}
          className=" !text-white space-x-1"
          // onChange={(e) => { setSearchText(e.target.value); requestSearch(e.target.value) }}
          placeholder="Search..."
          InputProps={{
            startAdornment: <SearchIcon fontSize="small" color="action" />,
            endAdornment: (
              <IconButton
                title="Clear"
                aria-label="Clear"
                size="small"
                style={{
                  visibility: searchText ? "visible" : "hidden",
                  borderRadius: "57%",
                  paddingRight: "1px",
                  margin: "0",
                  fontSize: "1.25rem",
                }}
                // onClick={(e) => {setSearchText(''); setRows(platform)} }
              >
                <ClearIcon fontSize="small" color="action" />
              </IconButton>
            ),
          }}
        />
      </Box>
    </ThemeProvider>
  );
};

export default SearchTable;
