const WhyUs = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="main">
            <h2>Why thelocalfeet</h2>
            <p>
              Being a tourist is fine, vacations are great. But, have you ever
              thought to experience a place as local people do? What if you want
              to shed off some limitations of monopoly traveling and turn
              yourself into an explorer to absorb the culture, food, activities
              of the hidden local trail in any corner of the world?
            </p>

            {/* <div className="featured_img flex">
              <img
                className="middle"
                src="/assets/about-travel.jpg "
                alt="collage"
              />
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          text-align: center;
          padding: 2rem 4rem;
          z-index: 2;
        }

        /* .section:before {
          position: absolute;
          content: "";
          width: 43%;
          height: 80%;
          top: 0;
          right: 0;
          background: radial-gradient(#2196f35c, transparent, transparent);
          z-index: -1;
        }

        .section:after {
          position: absolute;
          content: "";
          width: 100%;
          height: 82%;
          bottom: 0;
          left: 0;
          background: radial-gradient(#ff980045, transparent, transparent);
          z-index: -1;
        } */

        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 1.5rem;
          background: #f5f5f5;
          display: inline-block;
        }
        p {
          line-height: 1.5rem;
          margin: 0;
          max-width: 492px;
          margin: auto;
        }

        p span {
          font-weight: 600;
        }

        /* .featured_img {
          position: relative;
          max-width: 487px;
          margin: 3rem auto 2rem;
        }
        .middle {
          position: relative;
          margin: auto;
          max-width: 346px;
          height: 360px;
          object-position: -182px;
          transform: rotate(2deg);
          border: 0.7rem solid white;
          box-shadow: 7px 6px 20px #00000033;
        } */
      `}</style>
    </>
  );
};

export default WhyUs;
