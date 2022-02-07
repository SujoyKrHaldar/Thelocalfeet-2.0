import Moment from "react-moment";
import Rellax from "rellax";
import { useEffect, useRef } from "react";
import { urlFor } from "../../../../sanity";
import { AiFillRead } from "react-icons/ai";

const BlogLanding = ({ blog }) => {
  const img_parallex = useRef();

  useEffect(() => {
    new Rellax(img_parallex.current, {
      speed: -7,
      center: true,
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
            style={{ height: 768 }}
            ref={img_parallex}
            src={urlFor(blog.mainImage).url()}
            alt={blog.title}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className="container flex">
          <p className="date">
            <Moment format="MMMM D[, ] YYYY">{blog.publishedAt}</Moment>
          </p>

          <h1>{blog.title}</h1>

          <div className="icon disabled">
            <AiFillRead />
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
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
          background: #01324838;
        }

        img {
          object-position: 50% 36%;
        }

        p {
          color: #fff;
        }

        h1 {
          color: #fff;
          line-height: 2rem;
          letter-spacing: 0.2rem;
          max-width: 756px;
        }

        span {
          display: block;
          font-family: "Source Serif Pro";
        }

        .date {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
        .icon {
          color: white;
          margin-top: 0.6rem;
          font-size: 1.3rem;
          cursor: initial;
        }

        span {
          letter-spacing: 0.2rem;
          margin-top: 0.5rem;
          font-size: 1.6rem;
        }

        .container {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .container {
            padding: 2rem 1rem;
          }
          .section {
            height: 100vh;
            padding: 2rem;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding: 2rem 0rem;
            justify-content: flex-end;
            align-items: flex-start;
            text-align: left;
          }

          .icon {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default BlogLanding;
