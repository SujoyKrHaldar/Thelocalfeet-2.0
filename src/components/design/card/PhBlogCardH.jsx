import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { urlFor } from "../../../../config/sanity";

const PhBlogCardH = ({ data }) => {
  return (
    <>
      <div className="card">
        <div className="background">
          <img
            src={urlFor(data.mainImage).url()}
            alt={data.title}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className="info flex">
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>

          <Link href={`/photography/${data.slug}`}>
            <a className="icon">
              <BiRightArrowAlt />
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .card {
          position: relative;
          height: 420px;
          border-radius: 20px;
          overflow: hidden;
          flex: 1 1 287px;
          text-align: left;
        }
        .background {
          transition: 0.3s ease;
        }
        .card:hover .background {
          transform: scale(1.03);
        }
        .info {
          height: 100%;
          padding: 2rem;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          background: linear-gradient(90deg, #1c1c1c, #292929b3, transparent);
        }

        h2 {
          color: white;
        }

        p {
          max-width: 450px;
          margin-bottom: 1.5rem;
          color: #d8d8d8;
        }

        .icon {
          font-size: 1.5rem;
          border-radius: 100%;
          background: #ffffff1c;
          color: #ffffff;
          box-shadow: 0px 0px 4px 0px #00000038;
        }

        .icon:hover {
          background: #ffffff0a;
        }

        .icon:active {
          transform: scale(0.9);
          background: #ffffff0a;
        }

        @media (max-width: 600px) {
          .card {
            height: 312px;
          }
        }
      `}</style>
    </>
  );
};

export default PhBlogCardH;
