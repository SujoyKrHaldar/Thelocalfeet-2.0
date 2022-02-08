import Home from "./components/Home";
import Rellax from "rellax";
import { useEffect, useRef } from "react";

const Landing = () => {
  // const img_parallex = useRef();

  // useEffect(() => {
  //   new Rellax(img_parallex.current, {
  //     speed: -2,
  //     center: true,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false,
  //   });
  // }, []);

  return (
    <>
      {/* <div className="section">
        <div className="background">
          <img
            className="parallex"
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src="/assets/about-landing.jpg"
            alt="thelocalfeet_aboutus_background"
          />
        </div>

        <div className="container flex">
          <p className="title_tag">About</p>
          <h1>Read our Story</h1>

          <div className="icon disabled">
            <SiSimpleicons />
          </div>
        </div>
      </div> */}

      <div className="section">
        <div className="background">
          <img
            // ref={img_parallex}
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src="/assets/about-landing.jpg"
            alt="thelocalfeet_aboutus_background"
          />
        </div>

        <Home />
      </div>

      <style jsx>{`
        .section {
          padding-bottom: 2rem;
        }
        .background {
          height: 540px;
        }

        .background:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #1e215936;
          z-index: 1;
          inset: 0;
        }

        /* img {
          object-position: 50% 47%;
        } */

        /* .section {
          height: 768px;
          text-align: center;
          padding: 0 4rem;
        }

        .section:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          z-index: -1;
          background: #1e215936;
        }
        .container {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        img {
          object-position: center;
        }

        p {
          color: #fff;
          margin-bottom: 0.5rem;
        }

        h1 {
          color: #fff;
        }
        .date {
          margin: 0;
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          color: white;
        }

        .icon {
          color: #fff;
          font-size: 1.5rem;
          cursor: initial;
          position: absolute;
          bottom: 2rem;
        }

        @media (max-width: 768px) {
          .section {
            padding: 2rem;
            height: 100vh;
          }
          .container {
            padding: 2rem 1rem;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding: 2rem 0rem;
            justify-content: flex-end;
            align-items: flex-start;
            text-align: left;
          }
          .date {
            bottom: 0;
            right: 0;
          }

          img {
            object-position: left;
          }

          .icon {
            display: none;
          }
        } */
      `}</style>
    </>
  );
};

export default Landing;
