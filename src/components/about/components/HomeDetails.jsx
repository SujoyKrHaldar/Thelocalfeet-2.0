import AboutFollow from "./AboutFollow";
import MainSocialLink from "./MainSocialLink";

export default function HomeDetails() {
  return (
    <>
      <div className="details">
        <div className="profile_pic">
          <img
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src="/assets/Profile_pic.jpg"
            alt="Who we are"
          />
        </div>

        <div className=" decoration">
          <img
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src="/assets/decorator_img.png"
            alt="decoration"
          />
        </div>

        <h1>thelocalfeet</h1>
        <p>Our story</p>

        <MainSocialLink />

        <p className="description">
          <span>Mayuri</span> and <span>Shubha</span>, the{" "}
          <span>Storyteller-Photographer</span> duo have been traveling places
          around the world, since tying the knot in 2014: 2 continents, 4
          countries, and countless cities. Explore with us to see this beautiful
          mama earth !
        </p>

        <AboutFollow />

        <div className="cover_photo">
          <img
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src="/assets/about-frame.jpg "
            alt="collage"
          />
        </div>
      </div>

      <style jsx>{`
        h1 {
          letter-spacing: 0;
        }
        .details {
          position: relative;
          background: #ffffff;
          box-shadow: 0px -20px 11px 0px #00000014;
          padding: 3rem;
          border-radius: 20px;
          z-index: 1;
        }

        .profile_pic {
          position: relative;
          width: 170px;
          height: 170px;
          border: 7px solid white;
          box-shadow: 0px 8px 20px 0px #00000021;
          border-radius: 100%;
          margin: -8rem auto 2rem;
          overflow: hidden;
        }

        .decoration {
          z-index: -1;
          position: absolute;
          width: 100%;
          max-width: 650px;
          top: 0%;
          left: 50%;
          transform: translateX(-50%) rotate(-25deg);
          opacity: 0.2;
        }

        p:first-child() {
          font-size: 1.3rem;
          color: #8d8d8d;
        }
        .description {
          max-width: 450px;
          margin: 2rem auto;
        }

        .description span {
          font-weight: 600;
        }

        .description span:last-of-type {
          color: #ff9800;
        }

        .cover_photo {
          position: relative;
          margin: 3rem auto 2rem;
          position: relative;
          margin: 5rem auto 1rem;
          max-width: 693px;
          height: 500px;
          transform: rotate(2deg);
          border: 0.7rem solid white;
          box-shadow: 7px 6px 20px #00000033;
        }

        @media (max-width: 768px) {
          .cover_photo {
            height: auto;
          }

          .profile_pic {
            width: 150px;
            height: 150px;
            margin: -9rem auto 2rem;
          }
        }
      `}</style>
    </>
  );
}
