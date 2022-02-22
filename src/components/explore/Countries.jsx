import Link from "next/link";
import { urlFor } from "../../../config/sanity";
import ReadMoreType from "../design/buttons/ReadMoreType";

const Countries = ({ data, album }) => {
  return (
    <>
      <div className="country">
        <h2>Destinations</h2>
        <div className="flex">
          {data.map((i) => (
            <div className="circle" key={i.id}>
              <div className="image">
                <img
                  src={urlFor(i.coverImage).url()}
                  alt={i.name}
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
              <p>{i.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* {album.length > 0 && (
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
        )} */}

      <style jsx>{`
        /* .albums {
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
        } */
        .country {
          position: relative;
          text-align: center;
          /* padding: 2rem; */
          /* background: #f6f6f6; */
        }
        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 2rem;
          background: #f5f5f5;
          display: inline-block;
        }

        p {
          margin: 1rem 0;
          font-weight: 700;
          margin: 1rem 0;
          font-weight: 700;
          text-align: center;
        }
        .flex {
          position: relative;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #dadada;
        }
        .circle {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          flex: 1 1 118px;
          max-width: 168px;
          transform: scale(1);
        }

        .image {
          width: 120px;
          height: 120px;
          border-radius: 100%;
          overflow: hidden;
          border: 4px solid white;
          box-shadow: 2px 2px 20px #00000057;
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
