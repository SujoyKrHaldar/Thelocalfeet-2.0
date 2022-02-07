import Link from "next/link";
import { urlFor } from "../../../../sanity";
import Moment from "react-moment";
import ReadMoreType from "../buttons/ReadMoreType";

export default function OtherBlogCard({ data }) {
  return (
    <>
      <div className="other_blogs">
        <p className="tag">Keep Reading</p>
        <h3>More articles</h3>

        <div className="flex lists">
          {data.map((d) => (
            <Link href={`/explore/${d.slug}`} key={d.id}>
              <a className="card">
                <img
                  className="img"
                  src={urlFor(d.mainImage).url()}
                  alt={d.title}
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                />
                <p className="title">{d.title}</p>
                <p>{d.subtitle}</p>
                <p className="date">
                  <Moment format="Do MMM[,] YY">{d.publishedAt}</Moment>
                </p>
              </a>
            </Link>
          ))}
        </div>

        <ReadMoreType
          text="All articles"
          url="/explore"
          color="#fff"
          colorOnHover="#fff"
          background="#2f2f2f "
          backgroundOnHover="#4d4d4d"
          top="1rem"
        />
      </div>

      <style jsx>{`
        .other_blogs {
          text-align: center;
          padding: 2rem;
          margin-top: 2rem;
        }

        .lists {
          justify-content: center;
          align-items: initial;
          gap: 1rem;
          flex-wrap: wrap;
          margin: 1.5rem 0;
        }

        .card {
          padding: 1rem;
          flex: 1 1 250px;
          max-width: 320px;
          text-align: left;
          transition: 0.1s ease;
        }

        .card:hover {
          background: #fff;
          transform: scale(1.05);
          background: #f7f7f7;
          padding: 1rem 1.3rem;
          border-radius: 35px;
        }

        .img {
          height: 200px;
          margin-bottom: 1rem;
        }

        .title {
          font-size: 1.3rem;
          font-weight: 700;
        }

        h3 {
          font-size: 1.7rem;
          margin-bottom: 0.5rem;
          display: inline-block;
        }

        .date {
          font-weight: 700;
          color: #bebebe;
        }
      `}</style>
    </>
  );
}
