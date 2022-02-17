import Link from "next/link";
import { FiInstagram } from "react-icons/fi";

const feed = [
  {
    url: "/assets/404.jpeg",
    class: "img_1",
  },
  {
    url: "/assets/collage-one.jpg",
    class: "img_2",
  },
  {
    url: "/assets/collage-two.webp",
    class: "img_3",
  },
  {
    url: "/assets/explore-landing.jpeg",
    class: "img_4",
  },
];

export default function JoinUs() {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="background flex">
            {feed.map((d, i) => (
              <img
                className={d.class}
                key={i}
                src={d.url}
                alt="instagram feed"
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
            ))}
          </div>

          <div className="main">
            <h2>Join Us On Instagram</h2>
            <p>
              Explore with us to see this beautiful mama earth !{" "}
              <span>thelocalfeet | Travel | Street</span>
            </p>

            <Link href="https://www.instagram.com/thelocalfeet/">
              <a className="flex btn" target="blank">
                <div className="icon">
                  <FiInstagram />
                </div>
                <p>Follow us</p>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          height: 490px;
        }

        .container {
          display: grid;
          place-items: center;
        }

        img {
          max-width: 304px;
          object-position: center;
        }

        .img_3 {
          object-position: 20% 50%;
        }
        .main {
          position: relative;
          text-align: center;
          margin: auto;
          padding: 2.3rem;
          background: #ffffffb0;
          backdrop-filter: blur(2px);
          max-width: 455px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: auto;
        }

        .main:after {
          content: "";
          position: absolute;
          inset: -9px;
          z-index: -1;
          border: 2px solid white;
        }

        p {
          font-weight: 600;
          margin-bottom: 2rem;
        }

        span {
          display: block;
          font-weight: 400;
        }

        .icon {
          font-size: 1.3rem;
          padding: 0;
        }

        .flex {
          justify-content: center;
          gap: 0.5rem;
        }

        .btn {
          background: black;
          color: white;
        }

        .btn p {
          margin: 0;
        }

        .btn:active {
          transform: scale(0.9);
        }
      `}</style>
    </>
  );
}
