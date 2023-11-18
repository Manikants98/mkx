"use client";
import { BarChart } from "@mui/x-charts";
import React from "react";

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const POS = () => {
  return (
    <div className="flex gap-3 w-full">
      <div className="grid gap-3 w-3/4">
        <div className="flex flex-col bg-white w-full rounded-xl shadow p-3">
          <p className="font-semibold">Weekly Sales</p>
          <BarChart
            colors={["#4DD0E2"]}
            xAxis={[
              {
                id: "barCategories",
                data: week,
                scaleType: "band",
              },
            ]}
            series={[
              {
                data: [1, 2, 3, 4, 5, 6, 7],
              },
            ]}
            height={240}
          />
        </div>
        <div className="flex flex-col bg-white w-full rounded-xl shadow p-3">
          <p className="font-semibold">Weekly Customers</p>
          <BarChart
            colors={["#4DD0E2"]}
            xAxis={[
              {
                id: "barCategories",
                data: week,
                scaleType: "band",
              },
            ]}
            series={[
              {
                data: [1, 2, 3, 4, 5, 6, 7],
              },
            ]}
            height={240}
          />
        </div>
      </div>
      <div className="grid gap-3 text-primary font-semibold w-1/4">
        <div className="flex flex-col items-center justify-center gap-3 bg-white shadow rounded-xl">
          <p>Total Customers</p>
          <p>100</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 bg-white shadow rounded-xl">
          <p>This Week Sales</p>
          <p>100</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 bg-white shadow rounded-xl">
          <p>Today Sales</p>
          <p>100</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 bg-white shadow rounded-xl">
          <p>In Stock Products</p>
          <p>100</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 bg-white shadow rounded-xl">
          <p>Out Of Stock Products</p>
          <p>100</p>
        </div>
      </div>
    </div>
  );
};

export default POS;
