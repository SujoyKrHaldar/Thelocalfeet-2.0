import Link from "next/link";
import { urlFor } from "../../../config/sanity";
import ReadMoreType from "../design/buttons/ReadMoreType";

const Countries = ({ data, album }) => {
  return (
    <>
      <div className="content">
        <div className="country">
          <h2>Destinations</h2>
          <div className="details">
            {data.map((i) => (
              <div key={i.id} className="box">
                <img
                  className="background"
                  src={urlFor(i.coverImage).url()}
                  alt={i.name}
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                />
                <p>{i.name}</p>
              </div>
            ))}
          </div>
        </div>

        {album.length > 0 && (
          <div className="albums">
            <h2>Albums</h2>
            {album.map((a) => (
              <Link key={a.id} href={`/photography/${a.slug}`}>
                <a className="album_box">
                  <img
                    className="background"
                    src={urlFor(a.mainImage).url()}
                    alt={a.title}
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                  />

                  <p>{a.title}</p>
                </a>
              </Link>
            ))}

            <ReadMoreType
              text="View all"
              url="/photography"
              color="#fff"
              colorOnHover="#fff"
              background="#222222"
              backgroundOnHover="#464646"
              top="1rem"
            />
          </div>
        )}
      </div>

      <style jsx>{`
        .content {
          flex: 1;
        }

        .albums {
          padding: 2rem 0;
        }
        .albums h2 {
          padding: 0.3rem 2rem;
          background: #f5f5f5;
          display: inline-block;
        }

        .album_box {
          position: relative;
          width: 100%;
          height: 200px;
          display: grid;
          z-index: 1;
          place-items: center;

          overflow: hidden;
          margin-bottom: 1rem;
        }

        .album_box:last-child() {
          margin-bottom: 0;
        }

        .album_box:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          background: #00000075;

          z-index: -1;
        }

        .background {
          transition: 0.5s ease !important;
        }

        .album_box:hover .background {
          transform: scale(1.05);
        }

        .album_box p {
          background: none;
          padding: 0;
          color: white;
        }
        .country {
          position: relative;
          padding: 2rem;
          text-align: left;
          height: 100%;
          background: #f6f6f6;
        }
        p {
          margin: 0;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          background: white;
          color: black;
          font-weight: 700;
        }

        .details {
          margin-top: 2rem;
        }
        .box {
          position: relative;
          padding: 1rem;
          margin-bottom: 1rem;
          color: white;
          display: grid;
          place-items: center;
          z-index: 1;
          width: 100%;
          height: 105px;
        }

        .box:last-child() {
          margin: 0;
        }
        /* 

        @media (max-width: 768px) {
          .box:hover {
            transform: scale(1);
          }

          .section {
            padding-top: 4rem;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding: 0;
          }
          .box {
            height: 150px;
            width: 85px;
            flex: 1 1 120px;
            padding: 0;
            border-radius: 53px;

            align-items: center;
          }
        } */
      `}</style>
    </>
  );
};

export default Countries;
