const OurJourney = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="main">
            <h2>Our Journey</h2>
            <p>
              We are full-time corporate professionals, <span>Shubha</span>{" "}
              (having a background in Civil engineering), and{" "}
              <span>Mayuri</span> (having experience in PR and corporate
              communication). Though we started our career in different fields,
              there is a similarity between us that we two happy souls, who
              dream of traveling the world together. We are slowly but steadily
              expanding our travel exposure through social media like blogging,
              posting, and sharing new travel stories on Instagram, Facebook.
            </p>

            {/* <p className="tag">What Interests Us</p> */}

            <p>
              Being a part-timer travel photographer and blogger, we spend half
              of our time every day writing blogs, articles, editing
              photographs, highly active on social platforms and also attend
              travel & street photography, social media seminars, watch youtube
              videos to gain more knowledge on it.
            </p>

            <div className="featured_img flex">
              <img
                className="middle"
                src="/assets/about-travel.jpg "
                alt="collage"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          text-align: center;
          padding: 2rem 4rem;
          z-index: 2;
        }

        .section:before {
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
          background: radial-gradient(#62e2d68a, transparent, transparent);
          z-index: -1;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 1.5rem;
          background: #cef6f2;
          display: inline-block;
        }
        p {
          line-height: 1.5rem;
          margin: 0;
          max-width: 803px;
          margin: auto;
        }

        p span {
          font-weight: 600;
        }

        p:last-of-type {
          font-size: 1.5rem;
          line-height: 2rem;
          margin: 5rem auto 2rem;
        }

        .featured_img {
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
        }
      `}</style>
    </>
  );
};

export default OurJourney;
