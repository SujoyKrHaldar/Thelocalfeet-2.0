import { useRouter } from "next/router";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Navbar_mobile from "./Navbar_mobile";

const Navbar_Desktop_top = ({ menu, logo }) => {
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
      <div className="flex nav_top">
        <div className="logo" onClick={() => router.push("/")}>
          <img
            src={logo === "dark" ? "/logo_black.png" : "/logo_white.png"}
            alt="thelocalfeet logo"
          />
        </div>

        <div className="flex main_menu">
          {menu.map((n, i) => (
            <Link href={n.url} key={i}>
              <a
                className={
                  router.pathname == `${n.url}` ? "btn_nav active" : "btn_nav"
                }
              >
                {n.name}
              </a>
            </Link>
          ))}

          <div className="icon" onClick={openNavbar}>
            <HiMenuAlt3 />
          </div>
        </div>
      </div>

      <Navbar_mobile open={open} closeNavbar={closeNavbar} menu={menu} />

      <style jsx>{`
        .date {
          margin-right: 1rem;
          margin-bottom: 0;
        }

        .icon {
          color: black;
          padding: 0.45rem;
          border-radius: 8px;
          font-size: 1.6rem;
          background: white;
          margin-left: 1rem;
        }

        .main_menu {
          justify-content: left;
        }

        .btn_nav {
          border-bottom: 2px solid transparent;
          padding: 1.3rem 0rem;
          font-size: 0.9rem;
          margin: 0 1rem;
        }

        .btn_nav:hover {
          border-bottom: 2px solid #fff;
        }

        .active {
          border-bottom: 2px solid #fff;
        }

        @media (max-width: 867px) {
          .main_menu .btn_nav {
            display: none;
          }

          .icon {
            margin: 0.7rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar_Desktop_top;
