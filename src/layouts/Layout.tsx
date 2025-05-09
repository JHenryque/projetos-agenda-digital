import style from "../App.module.css";
import { Outlet } from "react-router";
import MenuAsider from "../components/MenuAsiders/MenuAsider";
import Header from "../components/Header/Header";
//import { UserProvider } from "../config/UserContext";

export default function Layout() {
  return (
    <>
      <Header />
      <div className={style.container_layout}>
        <MenuAsider />
        <Outlet />
      </div>
    </>
  );
}
