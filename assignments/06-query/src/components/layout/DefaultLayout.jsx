import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Page from "../Page";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </>
  );
};

export default DefaultLayout;
