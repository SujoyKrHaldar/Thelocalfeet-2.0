import Footer from "./Footer";
import CustomNavbar from "./CustomNavbar";

const CustomLayout = ({ children }) => {
  return (
    <>
      <CustomNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default CustomLayout;
