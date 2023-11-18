import Cart from "./shared/cart";
import Header from "./shared/header";
import Sidebar from "./shared/sidebar";

export default async function PosLayout({ children }) {
  return (
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
  );
}
