const AboutTravel = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="main">
            <h2>What interests us About Travel</h2>
            <p>
              When traveling, we love to stay in experimental accommodations. We
              like slow travel based on a local experiment we do, embracing the
              local culture, lifestyle, language, and food, exploring offbeat
              trails, and stay there as long as we want. We believe in the
              responsible travel concept because this idea has an impact on
              eco-tourism. Our goal is to make a deeper connection with the
              places we visit by contributing to the local economy and make
              budget travel. We always prefer to stay at local homestays, eat
              local food, and avoid using plastic commodities, try to drink
              water from natural resources, and use less water for other
              purposes. We communicate and build community relations with the
              local people and suggest or encourage them on sustainable travel
              ideas or innovative business ideas likely to promote their local
              products/ handmade crafts. We firmly believe that this could be
              the way how new travelers will understand and adopt sustainable
              travel philosophy and educate others.
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

export default AboutTravel;
