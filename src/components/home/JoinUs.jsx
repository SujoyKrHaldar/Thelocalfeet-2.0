import Link from "next/link";
import { FiInstagram } from "react-icons/fi";

const feed = [
  {
    url: "/assets/home-landing.jpg",
  },
  {
    url: "/assets/home-landing.jpg",
  },
  {
    url: "/assets/home-landing.jpg",
  },
  {
    url: "/assets/home-landing.jpg",
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
          height: 630px;
        }

        .container {
          display: grid;
          place-items: center;
        }

        img {
          max-width: 325px;
          object-position: center;
        }
        .main {
          position: relative;
          text-align: center;
          margin: auto;
          padding: 3rem;
          background: #fff;
          max-width: 455px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: auto;
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
