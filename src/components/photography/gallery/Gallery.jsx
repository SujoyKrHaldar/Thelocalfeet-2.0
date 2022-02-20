import { useState } from "react";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { urlFor } from "../../../../config/sanity";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Model from "./Model";
import FallbackLinks from "../../layout/helper/FallbackLinks";

const Gallery = ({ data, links, currPage }) => {
  const [selected, setSelected] = useState(null);
  const [caption, setCaption] = useState(null);

  return (
    <>
      <div className="section">
        <div className="container">
          {currPage && (
            <div className="links_mob">
              <FallbackLinks
                links={links}
                currPage={currPage}
                position="center"
              />
            </div>
          )}
          <div className="gallery">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 750: 3, 1024: 3, 1260: 4 }}
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

          <p className="tag">End of the page</p>
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
          background: white;
        }

        .links_mob {
          display: none;
        }

        .gallery {
          position: relative;
          padding: 0.1rem;
        }

        .tag {
          margin: 2rem 0 0;
          text-align: center;
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

        @media (max-width: 768px) {
          .links_mob {
            display: block;
            background: white;
            position: sticky;
            padding: 1rem 0rem;
            top: 5.5rem;
            z-index: 2;
          }
        }
        @media (max-width: 600px) {
          .black {
            display: none;
          }

          .container {
            padding: 0;
          }

          .links_mob {
            top: 4.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default Gallery;
