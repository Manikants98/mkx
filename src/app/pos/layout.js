"use client";
import { ThemeProvider, createTheme } from "@mui/material";
import Cart from "./shared/cart";
import Header from "./shared/header";
import Sidebar from "./shared/sidebar";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";

export default function PosLayout({ children }) {
  const client = new QueryClient();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00BCD5",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <SnackbarProvider>
          <div className="flex h-screen gap-3 p-2 bg-gray-200">
            <Sidebar />
            <div className="flex w-full h-full gap-3">
              <div className="flex flex-col w-full gap-3">
                <Header />
                <div className="flex overflow-auto rounded-xl">{children}</div>
              </div>
              <Cart />
            </div>
          </div>
        </SnackbarProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
