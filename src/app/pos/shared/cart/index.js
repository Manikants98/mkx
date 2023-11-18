"use client";
import {
    Add,
    DeleteOutlined,
    Remove,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import {
    Autocomplete,
    Button,
    TextField,
    ThemeProvider,
    createTheme
} from "@mui/material";

const Cart = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00BCD5",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-white shadow relative w-[400px] h-full rounded-xl">
        <div className="flex justify-between items-center p-4">
          <span className="relative flex items-center">
            <ShoppingCartOutlined />
            <span className="h-4 w-4 p-1 text-xs flex justify-center items-center absolute left-5 top-1 rounded-full bg-primary text-white">
              3
            </span>
          </span>

          <DeleteOutlined />
        </div>

        <div className="p-2 flex gap-2 items-center">
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            size="small"
            className="!w-full"
            options={[
              { title: "Mani Kant Sharma" },
              { title: "Mani Kant Sharma" },
              { title: "Mani Kant Sharma" },
              { title: "Mani Kant Sharma" },
              { title: "Mani Kant Sharma" },
            ].map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} placeholder="Select Customers" />
            )}
          />
          <Button className="!h-10 !text-white !bg-primary !min-w-[40px]">
            <Add />
          </Button>
        </div>

        <div className="grid gap-3 p-2">
          {[1, 2, 3].map((i) => {
            return (
              <div
                key={i}
                className="flex justify-between rounded-xl bg-gray-200 p-2"
              >
                <span className="flex gap-2 items-center">
                  <img
                    src="https://www.freepnglogos.com/uploads/burger-png/burger-png-png-images-yellow-images-12.png"
                    alt=""
                    className="p-2 h-10 w-10 bg-white rounded-xl"
                  />
                  <span>
                    <p className="text-xs whitespace-nowrap font-semibold">
                      Cheese Burger
                    </p>
                    <p className="text-xs whitespace-nowrap">Rs. 499</p>
                  </span>
                </span>
                <span className="flex items-center gap-1">
                  <Button className="!min-h-[36px] !rounded-xl !h-9 !w-9 !text-white !bg-primary !min-w-[36px]">
                    <Remove />
                  </Button>
                  <Button
                    disableRipple
                    className="!min-h-[36px] !rounded-xl !h-9 !w-9 text-sm !bg-white !min-w-[36px]"
                  >
                    1
                  </Button>
                  <Button className="!min-h-[36px] !rounded-xl !h-9 !w-9 !text-white !bg-primary !min-w-[36px]">
                    <Add />
                  </Button>
                </span>
              </div>
            );
          })}
        </div>

        <span className="flex flex-col absolute w-full bottom-0 gap-2 p-2">
          <span className="flex items-center justify-between px-1">
            <p>Sub Total</p>
            <p>Rs. 1497</p>
          </span>
          <span className="flex items-center justify-between px-1">
            <p>Total Tax</p>
            <p className="text-red-500">+Rs. 18</p>
          </span>
          <span className="flex items-center justify-between px-1">
            <p>Total Dicount</p>
            <p className="text-green-500">-Rs. 40</p>
          </span>
          <span className="font-semibold items-center justify-between px-1 flex">
            <p>Total Payable Amount</p>
            <p>Rs. 1475</p>
          </span>
          <Button className="!bg-primary !text-white !rounded-xl">
            Checkout
          </Button>
        </span>
      </div>
    </ThemeProvider>
  );
};

export default Cart;
