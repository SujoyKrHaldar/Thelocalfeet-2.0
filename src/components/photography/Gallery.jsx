import { urlFor } from "../../../config/sanity";
import ReadMoreType from "../design/buttons/ReadMoreType";

const Gallery = ({ data }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <h2>Our Latest shots</h2>

          <div className="gallery">
            {data.map((d) => (
              <img
                src={urlFor(d.photo).url()}
                alt={d.caption}
                key={d.id}
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
            ))}
          </div>

          <ReadMoreType
            text="Explore more"
            url="/photography/gallery"
            color="#fff"
            colorOnHover="#fff"
            background="#009688"
            backgroundOnHover="#00685e"
            top="1rem"
          />
        </div>
      </div>

      <style jsx>{`
        .section {
          text-align: center;
          padding-bottom: 1rem;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 1rem;
          background: #f5f5f5;
          display: inline-block;
        }

        .gallery {
          padding: 2rem 0;
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        img {
          border-radius: 20px;
          height: 234px;
          max-width: 188px;
          flex: 1 1 105px;
          transition: 0.1s ease !important;
        }
        img:hover {
          transform: scale(1.2);
          z-index: 2;
        }
      `}</style>
    </>
  );
};

export default Gallery;
