import { urlFor } from "../../../../sanity";
import ReadMoreType from "../buttons/ReadMoreType";

const PhotoBlogCard = ({ data }) => {
  return (
    <>
      <div className="box">
        <img
          className="background"
          src={urlFor(data.mainImage).url()}
          alt={data.title}
          onDragStart={(e) => {
            e.preventDefault();
          }}
        />
        <div className="link ">
          <p>{data.title}</p>
          <p>{data.subtitle}</p>

          <ReadMoreType
            text="Continue"
            url={`photography/${data.slug}`}
            color="#fff"
            colorOnHover="#fff"
            background=" #ffffff3d"
            backgroundOnHover="#ffffff21"
          />
        </div>
      </div>

      <style jsx>{`
        .box {
          z-index: 1;
          position: relative;
          height: 421px;
          box-shadow: 4px 4px 20px 0px #0000001c;
          transition: 0.1s ease-in;
          padding: 2rem;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;

          flex: 1 1 282px;
          border-radius: 40px;
          overflow: hidden;
        }

        img {
          z-index: -2;
        }
        .box:before {
          z-index: -1;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          background: #00000096;
        }
        .box:hover {
          transform: scale(1.02);
        }

        .link {
          padding: 2rem;
          color: white;
          text-align: left;
          transition: 0.1s ease-in;
          max-width: 366px;
          border-radius: 40px;
        }

        p {
          margin-bottom: 1rem;
        }
        p:first-child() {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .btn {
          background: #fff;
          color: #000;
        }

        .btn:focus {
          transform: scale(0.95);
        }

        @media (max-width: 887px) {
          .box {
            height: auto;
          }
          .link {
            padding: 2rem 1rem;
          }
        }

        @media (max-width: 768px) {
          .box:hover {
            transform: scale(1);
          }
        }

        @media (max-width: 600px) {
        }
      `}</style>
    </>
  );
};

export default PhotoBlogCard;
