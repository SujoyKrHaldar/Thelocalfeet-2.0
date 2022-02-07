import { useRouter } from "next/router";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import GoBack from "../design/buttons/GoBack";
import Navbar_mobile from "./helper/Navbar_mobile";

const menu = [
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

const CustomNavbar = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const openNavbar = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="navbar">
        <div
          className="container flex"
          style={{ paddingBottom: 0, paddingTop: "1rem" }}
        >
          <div className="logo" onClick={() => router.push("/")}>
            <img src="/logo_black.png" alt="thelocalfeet logo" />
          </div>

          <div className="flex">
            <GoBack />
            <div className="icon" onClick={openNavbar}>
              <HiMenuAlt3 />
            </div>
          </div>
        </div>
      </div>

      <Navbar_mobile open={open} closeNavbar={closeNavbar} menu={menu} />

      <style jsx>{`
        .navbar {
          position: absolute;
          width: 100%;
          left: 0;
          top: 0;
          z-index: 2;
          color: #000;
        }

        .icon {
          color: black;
          padding: 0.45rem;
          border-radius: 8px;
          font-size: 1.6rem;
          background: white;
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
};

export default CustomNavbar;
