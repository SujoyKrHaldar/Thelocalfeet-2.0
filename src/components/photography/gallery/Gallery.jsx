import { urlFor } from "../../../../sanity";
import { useState } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import Model from "./Model";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Gallery = ({ data }) => {
  const [selected, setSelected] = useState(null);
  const [caption, setCaption] = useState(null);

  return (
    <>
      <div className="section">
        <div className="container">
          <h1>Gallery</h1>

          <div className="gallery">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="1rem">
                {data.map((i) => (
                  <div
                    className="box"
                    key={i.id}
                    onClick={() => {
                      setSelected(urlFor(i.photo).url());
                      setCaption(i.caption);
                    }}
                  >
                    <img src={urlFor(i.photo).url()} alt={i.caption} />

                    <div className="black">
                      {i?.Ilink && (
                        <a className="icon" href={i?.Ilink} target="blank">
                          <AiFillInstagram />
                        </a>
                      )}
                      {i?.Flink && (
                        <a className="icon" href={i?.Flink} target="blank">
                          <IoLogoFacebook />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>

      {selected && (
        <Model
          selected={selected}
          caption={caption}
          setSelected={setSelected}
        />
      )}

      <style jsx>{`
        .section {
          text-align: center;
          padding-top: 5rem;
        }

        h1 {
          padding: 0.3rem 2rem;
          margin-bottom: 1.5rem;
          background: #f5f5f5;
          display: inline-block;
        }
        .gallery {
          position: relative;
          margin-top: 2rem;
        }

        .box {
          position: relative;
          overflow: hidden;
          width: 100%;
          background: black;
          animation: fade 1s ease;
          cursor: pointer;
        }
        @keyframes fade {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 1s ease !important;
        }
        .box:hover img {
          opacity: 0.7;
          transform: scale(1.05);
        }

        .black {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1c1c1c9e;
          opacity: 0;
          transition: all 0.6s ease;
        }
        .box:hover .black {
          opacity: 1;
        }

        .icon {
          color: white;
          font-size: 2rem;
        }

        .icon:hover {
          background: transparent;
        }

        @media (max-width: 600px) {
          .black {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Gallery;
