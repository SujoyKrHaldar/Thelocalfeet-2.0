import HomeDetails from "./HomeDetails";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="landing">
          <h1>Read our Story</h1>
        </div>
        <HomeDetails />

        <div className="cover_photo">
          <img
            onDragStart={(e) => {
              e.preventDefault();
            }}
            className="image"
            src="/assets/about-frame.jpg "
            alt="collage"
          />
        </div>
      </div>

      <style jsx>{`
        h1 {
          letter-spacing: 0;
        }
        .container {
          text-align: center;
        }
        .landing {
          position: relative;
          padding: 3rem;
          text-align: center;
          color: white;
          height: 270px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .landing:before {
          content: "About us";
          position: absolute;
          color: #ffffff36;
          font-size: 13rem;
          font-weight: 700;
          line-height: 1rem;
          bottom: 0;
        }

        .cover_photo {
          position: relative;
          margin: 3rem auto 2rem;
        }
        .image {
          position: relative;
          margin: auto;
          max-width: 720px;
          transform: rotate(2deg);
          border: 0.7rem solid white;
          box-shadow: 7px 6px 20px #00000033;
        }
      `}</style>
    </>
  );
}
