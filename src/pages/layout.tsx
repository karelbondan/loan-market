import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function RootLayout() {
  return (
    <div className="bg-primary flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
