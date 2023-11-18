"use client";

import { Avatar } from "@mui/material";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex w-20 transition-all text-white duration-500 group hover:w-64 flex-col items-center h-full overflow-x-hidden overflow-y-auto bg-primary rounded-xl">
      <Link
        className="flex items-center justify-center w-full px-3 mt-3 group-hover:justify-start"
        href="/pos/dashboard"
      >
        <svg
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
        <span className="hidden ml-2 text-sm font-bold whitespace-nowrap group-hover:block">
          Point Of Sales
        </span>
      </Link>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-secondary">
          <Link
            className={classNames(
              "flex items-center justify-center w-full h-12 px-3 pl-3 mt-2 rounded-xl group-hover:justify-start hover:bg-secondary",
              pathname === "/pos/dashboard" ? "bg-secondary" : ""
            )}
            href="/pos/dashboard"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="hidden ml-2 text-sm font-medium group-hover:block">
              Dasboard
            </span>
          </Link>
          <Link
            className={classNames(
              "flex items-center justify-center w-full h-12 px-3 pl-3 mt-2 rounded-xl group-hover:justify-start hover:bg-secondary",
              pathname === "/pos/stock" ? "bg-secondary" : ""
            )}
            href="/pos/stock"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>

            <span className="hidden ml-2 text-sm font-medium group-hover:block">
              Stock
            </span>
          </Link>
          <Link
            className={classNames(
              "flex items-center justify-center w-full h-12 px-3 mt-2 rounded-xl group-hover:justify-start",
              pathname === "/pos/billing" ? "bg-secondary" : ""
            )}
            href="/pos/billing"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="hidden ml-2 text-sm font-medium group-hover:block">
              Billing
            </span>
          </Link>
          <Link
            className={classNames(
              "flex items-center justify-center w-full h-12 px-3 pl-3 mt-2 rounded-xl group-hover:justify-start hover:bg-secondary",
              pathname === "/pos/customers" ? "bg-secondary" : ""
            )}
            href="/pos/customers"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <span className="hidden ml-2 text-sm font-medium group-hover:block">
              Customers
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center w-full mt-2 border-t border-secondary">
          <Link
            className={classNames(
              "flex items-center justify-center w-full h-12 px-3 pl-3 mt-2 rounded-xl group-hover:justify-start hover:bg-secondary",
              pathname === "/pos/discount" ? "bg-secondary" : ""
            )}
            href="/pos/discount"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="hidden ml-2 text-sm font-medium group-hover:block">
              Discount
            </span>
          </Link>
          <Link
            className={classNames(
              "flex items-center justify-center w-full h-12 px-3 pl-3 mt-2 rounded-xl group-hover:justify-start hover:bg-secondary",
              pathname === "/pos/settings" ? "bg-secondary" : ""
            )}
            href="/pos/settings"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            <span className="hidden ml-2 text-sm font-medium group-hover:block">
              Settings
            </span>
          </Link>
        </div>
      </div>
      <Link
        className="flex items-center justify-center border-t border-secondary w-full h-16 mt-auto hover:bg-secondary"
        href="/pos/dashboard"
      >
        <Avatar alt="M" src="sdfgds.jpg" className="!bg-secondary" />
        <span className="flex-col hidden ml-2 text-sm font-medium whitespace-nowrap group-hover:flex">
          <p className="font-semibold">Mani Kant Sharma</p>
          <p>Store Admin</p>
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;
