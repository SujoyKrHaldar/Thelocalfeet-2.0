const Achievement = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="main">
            <h2 className="tag">Our Achievements</h2>
            <p>
              Recently thelocalfeet got featured by thelonelyplanet magazine &
              several other community pages. Gained organic 3k followers on
              Instagram within 4 months.
            </p>

            <div className="featured">
              <img
                src="/assets/collage-three.webp"
                alt="Success stories"
                onDragStart={(e) => {
                  e.preventDefault();
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main {
          position: relative;
          padding: 3rem 0;
          text-align: center;
          max-width: 766px;
          margin: auto;
        }

        .main:after {
          position: absolute;
          content: "";
          width: 1px;
          height: 95px;
          bottom: -5rem;
          left: 50%;
          transform: translateX(-50%);
          background: #b4b4b4;
        }

        h2 {
          margin-bottom: 1.5rem;
          color: #5b5b5b;
          font-size: 2.3rem;
        }
        p {
          line-height: 2.3rem;
          margin: 0;
          font-size: 1.6rem;
          font-weight: 600;
        }

        .featured {
          position: relative;
          margin: 4rem auto 0;
          max-width: 276px;
          height: 358px;
          transform: rotate(357deg);
          border: 0.6rem solid #ffffff;
          box-shadow: 0px 6px 20px 6px #00000030;
        }

        img {
          object-position: 30% 50%;
        }
      `}</style>
    </>
  );
};

export default Achievement;
