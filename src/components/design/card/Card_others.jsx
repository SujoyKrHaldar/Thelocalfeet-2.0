import Link from "next/link";
import Image from "next/image";
import Moment from "react-moment";
import { urlFor } from "../../../../config/sanity";

export default function Card_others({ data, link }) {
  return (
    <>
      <Link href={link} key={data.id}>
        <a className="card">
          <div className="img">
            <Image
              layout="responsive"
              objectFit="cover"
              width={360}
              height={200}
              loading="eager"
              src={urlFor(data.mainImage).url()}
              alt={data.title}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
          </div>
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

        .card:focus {
          transform: scale(1);
        }

        .img {
          margin-bottom: 1rem;
          overflow: hidden;
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

          .card:hover {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
