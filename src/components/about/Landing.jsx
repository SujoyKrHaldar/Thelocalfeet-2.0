import Rellax from "rellax";
import { useEffect, useRef } from "react";

import Home from "./components/Home";

const Landing = () => {
  const img_parallex = useRef();

  useEffect(() => {
    new Rellax(img_parallex.current, {
      speed: -7,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <>
      <div className="section">
        <div className="background">
          <img
            ref={img_parallex}
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

        @media (max-width: 768px) {
          .section {
            padding: 2rem 0;
          }
        }

        @media (max-width: 600px) {
          .background {
            height: 433px;
          }
          img {
            object-position: left;
          }
        }
      `}</style>
    </>
  );
};

export default Landing;
