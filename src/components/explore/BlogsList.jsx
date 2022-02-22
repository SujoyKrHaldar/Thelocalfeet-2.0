import Link from "next/link";
import Moment from "react-moment";
import { urlFor } from "../../../config/sanity";

const BlogsList = ({ data }) => {
  return (
    <>
      <div className="blogs">
        <h2>Articles</h2>
        <div className="list">
          {data.map((i) => (
            <Link href={`/explore/${i.slug}`} key={i.id}>
              <a className="box">
                <div className="background">
                  <img
                    src={urlFor(i.mainImage).url()}
                    alt={i.name}
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                  />
                </div>

                <div className="content flex">
                  <p>
                    {i.country.name} -{" "}
                    <Moment format="Do MMM[,] YY">{i.publishedAt}</Moment>
                  </p>
                  <p className="title">{i.title}</p>
                  <p>{i.subtitle}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }
        .box {
          flex: 1 1 200px;
          max-width: 283px;
          position: relative;
          height: 330px;
          border-radius: 20px;
          overflow: hidden;
          text-align: left;
        }
        .background {
          transition: 0.3s ease;
        }
        .box:hover .background {
          transform: scale(1.03);
        }

        .box:hover {
          transform: scale(1.03);
        }

        .content {
          padding: 2rem 1.5rem;
          color: white;
          background: linear-gradient(45deg, #000000d1, #292929b8, transparent);
          height: 100%;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
        }

        p {
          font-weight: 300;
        }

        .title {
          font-size: 1.3rem;
          font-weight: 700;
        }

        h2 {
          padding: 0.3rem 2rem;
          background: #f5f5f5;
          display: inline-block;
        }

        @media (max-width: 768px) {
          .box:hover .background,
          .box:hover {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default BlogsList;
