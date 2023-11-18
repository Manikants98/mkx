"use client";

import { Add } from "@mui/icons-material";
import classNames from "classnames";
import { useState } from "react";

const POS = () => {
  const [selectedTab, setSelectedTab] = useState("All Stock");
  const tabs = ["All Stock", "In Stock", "Out of Stock"];
  return (
    <div className="flex relative flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {tabs.map((i) => {
            return (
              <div
                key={i}
                className={classNames(
                  "flex text-sm font-semibold justify-center transition-all duration-200 items-center bg-white shadow hover:shadow-md rounded-xl p-2 w-32 cursor-pointer",
                  selectedTab === i && "!bg-primary text-white"
                )}
                onClick={() => setSelectedTab(i)}
              >
                {i}
              </div>
            );
          })}
        </div>
        <div
          className={classNames(
            "flex gap-1 font-semibold text-sm justify-center transition-all duration-200 items-center shadow hover:shadow-md rounded-xl p-2 w-32 cursor-pointer bg-primary text-white"
          )}
        >
          <Add fontSize="small" /> Add Stock
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 w-full h-full overflow-y-auto rounded-xl pr-1">
        {[1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => {
          return (
            <div
              key={i}
              className="bg-white group relative hover:brightness-50 transition-all duration-200 shadow hover:shadow-md rounded-xl cursor-pointer p-2"
            >
              <span className="absolute z-50 top-1/2 left-1/2 right-1/2 bottom-1/2 text-white whitespace-nowrap group-hover:flex hidden justify-center items-center">
                Add to Cart
              </span>
              <img
                src="https://www.freepnglogos.com/uploads/burger-png/burger-png-png-images-yellow-images-12.png"
                alt=""
                className="p-3"
              />
              <span className="flex font-semibold text-xs justify-between">
                <p>Chesse Burger</p> <p>Rs. 499</p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default POS;
