import Link from "next/link";
import Moment from "react-moment";
import { urlFor } from "../../../../config/sanity";

export default function OtherBlogCard({ data, link }) {
  return (
    <>
      <Link href={link} key={data.id}>
        <a className="card">
          <img
            className="img"
            src={urlFor(data.mainImage).url()}
            alt={data.title}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
          <p className="title">{data.title}</p>
          <p>{data.subtitle}</p>
          <p className="date">
            <Moment format="Do MMM[,] YY">{data.publishedAt}</Moment>
          </p>
        </a>
      </Link>

      <style jsx>{`
        .card {
          padding: 1rem;
          flex: 1 1 250px;
          max-width: 320px;
          text-align: left;
          transition: 0.1s ease;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .img {
          height: 200px;
          margin-bottom: 1rem;
        }

        .title {
          font-size: 1.3rem;
          font-weight: 700;
        }

        .date {
          font-weight: 700;
          color: #bebebe;
        }

        @media (max-width: 767px) {
          .card {
            background: #f9f9f9;
          }
          .img {
            height: 130px;
          }
          .card:hover {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
