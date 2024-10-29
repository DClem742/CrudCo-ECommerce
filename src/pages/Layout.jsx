import { Outlet } from "react-router-dom";
import NavBar from "../components/MainNav";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;