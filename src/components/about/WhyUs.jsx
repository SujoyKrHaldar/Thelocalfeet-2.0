const WhyUs = () => {
  return (
    <>
      <div className="container">
        <img
          className="background"
          src="/assets/about.jpeg "
          alt="collage"
          onDragStart={(e) => {
            e.preventDefault();
          }}
        />

        <div className="main">
          <h2>Why thelocalfeet</h2>
          <p>
            Being a tourist is fine, vacations are great. But, have you ever
            thought to experience a place as local people do? What if you want
            to shed off some limitations of monopoly traveling and turn yourself
            into an explorer to absorb the culture, food, activities of the
            hidden local trail in any corner of the world?
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          text-align: left;
          height: 717px;
          z-index: 1;
          display: flex;
        }

        .container:before {
          position: absolute;
          content: "";
          width: 100%;
          height: 100%;
          background: #00000066;
          inset: 0;
          z-index: -1;
        }

        .main {
          max-width: 925px;
          padding: 3rem 0;
          margin: auto;
          text-align: center;

          color: white;
        }

        h2 {
          position: relative;
          font-size: 2rem;
          letter-spacing: 0;
          margin-bottom: 1rem;
        }
        p {
          line-height: 1.5rem;
          margin: 0;
          max-width: 492px;
        }
      `}</style>
    </>
  );
};

export default WhyUs;
