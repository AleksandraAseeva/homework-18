import { Header } from "../Header";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import style from './styles.module.css'

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={style.mainCont}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
