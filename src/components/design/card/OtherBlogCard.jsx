import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
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
        />

        <div className="icon ">
          <IoIosArrowDown />
        </div>
      </div>

      <style jsx>{`
        .icon {
          position: absolute;
          width: 40px;
          height: 40px;
          font-size: 1.4rem;
          background: #e1e1e1;
          color: white;
          border-radius: 100%;
          bottom: -1.35rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .other_blogs {
          position: relative;
          text-align: center;
          padding: 4rem 0;
          border: 1px solid #ebebeb;
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

        h3 {
          font-size: 1.7rem;
          margin-bottom: 0.5rem;
          display: inline-block;
        }

        .date {
          font-weight: 700;
          color: #bebebe;
        }

        @media (max-width: 1288px) {
          .other_blogs {
            border: 0;
            border-bottom: 1px solid #ebebeb;
          }
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
