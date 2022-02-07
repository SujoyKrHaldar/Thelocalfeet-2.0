const AboutIntro = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="main">
            <p className="tag">Our story</p>
            <h2>Who We Are</h2>
            <p>
              <span>Mayuri</span> and <span>Shubha</span>, the{" "}
              <span>Storyteller-Photographer</span> duo have been traveling
              places around the world, since tying the knot in 2014: 2
              continents, 4 countries, and countless cities. Explore with us to
              see this beautiful mama earth !
            </p>

            <div className="featured_img flex">
              <img
                className="middle"
                src="/assets/about-frame.jpg "
                alt="collage"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          text-align: center;
          padding: 6rem 4rem 2rem;
          z-index: 2;
        }

        .section:before {
          position: absolute;
          content: "";
          width: 78%;
          height: 100%;
          bottom: 0;
          left: 0;
          background: radial-gradient(#2196f33d, transparent, transparent);
          z-index: -1;
        }

        .section:after {
          position: absolute;
          content: "";
          width: 50%;
          height: 82%;
          top: 0;
          right: 0;
          background: radial-gradient(#ff980038, transparent, transparent);
          z-index: -1;
        }

        .main {
          max-width: 474px;
          margin: auto;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 1.5rem;
          background: #ffe9c9;
          display: inline-block;
        }
        p {
          line-height: 1.5rem;
          margin: 0;
        }

        p span {
          font-weight: 600;
        }

        p span:last-of-type {
          color: #ff9800;
        }
        .tag {
          margin-bottom: 1rem;
          color: #737373;
        }

        .featured_img {
          position: relative;
          max-width: 487px;
          margin: 3rem auto 2rem;
        }
        .middle {
          position: relative;
          margin: auto;
          max-width: 290px;
          height: 360px;

          object-position: -119px;
          transform: rotate(2deg);
          border: 0.7rem solid white;
          box-shadow: 7px 6px 20px #00000033;
        }
      `}</style>
    </>
  );
};

export default AboutIntro;
