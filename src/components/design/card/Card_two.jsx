import Link from "next/link";
import Image from "next/image";
import Moment from "react-moment";
import { urlFor } from "../../../../config/sanity";

export default function Card_two({ i, link }) {
  return (
    <>
      <Link href={link} key={i.id}>
        <a className="box">
          <div className="background">
            <Image
              layout="fill"
              objectFit="cover"
              loading="eager"
              src={urlFor(i.mainImage).url()}
              alt={i.title}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
          </div>

          <div className="content flex">
            <p>{i.country?.name}</p>
            <p className="title">{i.title}</p>
            <p>{i.subtitle}</p>
            <p>
              <Moment format="Do MMM[,] YY">{i?.publishedAt}</Moment>
            </p>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .box {
          flex: 1 1 200px;
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
          max-width: 450px;
        }

        p:last-child() {
          margin: 0;
          color: white;
          font-weight: 700;
        }

        .title {
          font-size: 1.3rem;
          font-weight: 700;
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
}
