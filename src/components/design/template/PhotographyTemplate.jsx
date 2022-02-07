import ReadMoreType from "../buttons/ReadMoreType";

const Photography = () => {
  return (
    <>
      <div className="section">
        <div className="background">
          <img
            src="/assets/home-landing.jpg"
            alt="The pursuit of excellent culmination in craftsmanship, You would
              rather die for !"
          />
        </div>
        <div className="container">
          <div className="content">
            <p>
              The pursuit of excellent culmination in craftsmanship, You would
              rather die for !
            </p>

            <p>
              Made in India, at Nagaur Fort also known as Ahichhatragarh Fort
            </p>

            <ReadMoreType
              text="View gallery"
              url="photography/gallery"
              color="#fff"
              colorOnHover="#fff"
              background=" #ffffff3d"
              backgroundOnHover="#ffffff21"
              top="1rem"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding: 2rem;
        }

        .section:before {
          content: "";
          z-index: -1;
          width: 100%;
          height: 100%;
          background: #00000082;
          inset: 0;
          position: absolute;
        }

        .container {
          height: 600px;
          display: flex;
          align-items: center;
          padding: 0;
        }

        .content {
          max-width: 423px;
          padding: 1rem 0;
        }

        p:first-child() {
          font-weight: 700;
          font-size: 1.5rem;
          color: white;
        }
        p {
          color: #dfdfdf;
        }

        img {
          object-position: bottom;
        }

        @media (max-width: 600px) {
          .container {
            display: flex;
            align-items: center;
          }

          img {
            object-position: center;
          }
        }
      `}</style>
    </>
  );
};

export default Photography;
