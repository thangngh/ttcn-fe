import { Input } from "antd";
import React from "react";

const SearchBar = ({ setSearchKey, placeholder, styles }: any) => {
  const { Search } = Input;
  return (
    <Search
      style={styles}
      allowClear
      placeholder={placeholder}
      onSearch={setSearchKey}
    />
  );
};

export default SearchBar;
