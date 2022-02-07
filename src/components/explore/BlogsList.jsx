import Link from "next/link";
import Moment from "react-moment";
import { urlFor } from "../../../sanity";

const BlogsList = ({ data }) => {
  return (
    <>
      <div className="blogs">
        <h2>Articles</h2>
        <div className="details">
          {data.map((i) => (
            <div key={i.id} className="box">
              <img
                src={urlFor(i.mainImage).url()}
                alt={i.name}
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
              <div className="content">
                <p>
                  {i.country.name} -{" "}
                  <Moment format="Do MMM[,] YY">{i.publishedAt}</Moment>
                </p>
                <p>{i.title}</p>
                <p>{i.subtitle}</p>

                <Link href={`/explore/${i.slug}`}>
                  <a>Read more</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blogs {
          padding: 2rem;
          flex: 2;
        }
        .details {
          margin-top: 1rem;
        }
        .box {
          position: relative;
          margin-bottom: 1rem;
          width: 100%;
          z-index: 1;
          gap: 1rem;
          display: flex;
          align-item: center;
          justify-content: center;
        }

        .box:hover {
          background: #f6f6f6;
        }

        img {
          height: 180px;
          width: 200px;
          flex: 1;
        }

        .content {
          padding: 1rem;
          flex: 2;

          display: flex;
          flex-direction: column;
          align-item: center;
          justify-content: center;
        }

        p:nth-child(2) {
          font-size: 1.3rem;
          font-weight: 700;
        }

        h2 {
          padding: 0.3rem 2rem;
          background: #f5f5f5;
          display: inline-block;
        }

        a {
          font-weight: 700;
        }

        /* 
        

        @media (max-width: 600px) {
          .container {
            padding: 0;
          }

          .flex {
            gap: 2rem;
          }
        } */
      `}</style>
    </>
  );
};

export default BlogsList;
