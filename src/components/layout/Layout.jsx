import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, mainBackground, mainColor, logo }) => {
  return (
    <>
      <Navbar mainColor={mainColor} mainBackground={mainBackground} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
