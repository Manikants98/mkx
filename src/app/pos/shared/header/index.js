import { Search } from "@mui/icons-material";
import React from "react";

const Header = () => {
  return (
    <div className="flex gap-5 p-5 bg-white shadow rounded-xl hover:shadow-md">
      <span className="bg-primary p-3 px-3.5 !text-white rounded-full">
        <Search />
      </span>
      <input
        type="text"
        placeholder="Search Products..."
        className="px-3 outline-none"
      />
    </div>
  );
};

export default Header;
