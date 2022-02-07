import Navbar_Desktop_top from "./helper/Navbar_Desktop_top";

const navigation = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Explore",
    url: "/explore",
  },
  {
    name: "Photography",
    url: "/photography",
  },
  {
    name: "Travel guide",
    url: "/travel",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Store",
    url: "/store",
  },
];

const Navbar = ({ mainBackground, mainColor, logo }) => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <Navbar_Desktop_top menu={navigation} logo={logo} />
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: absolute;
          width: 100%;
          left: 0;
          top: 0;
          z-index: 5;
          background: ${mainBackground};
          color: ${mainColor};
        }

        .container {
          padding-bottom: 0;
          padding-top: 1rem;
        }
        @media (max-width: 600px) {
          .navbar {
            position: fixed;
          }
          .container {
            padding: 1rem;
          }
        }
      `}</style>
    </>
  );
};

Navbar.defaultProps = {
  mainColor: "#000",
  mainBackground: "white",
  logo: "dark",
};

export default Navbar;
