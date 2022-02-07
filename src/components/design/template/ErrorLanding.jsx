import ReadMoreType from "../buttons/ReadMoreType";

const quickLinks = [
  {
    url: "/photography/gallery",
    name: "Gallery",
  },
  {
    url: "/photography/photo-blog",
    name: "Photo blogs",
  },
  {
    url: "/explore#articles",
    name: "Blog",
  },
];

const ErrorLanding = () => {
  return (
    <>
      <div className="section">
        <div className="background">
          <img
            src="/assets/404.jpeg"
            alt="page not found"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className="container flex">
          <div className="main">
            <h1>404</h1>
            <p>Looks like you lost in the desert. </p>
            <p>Don't worry, we will lead you back home.</p>

            <ReadMoreType
              text="Take me Home"
              url="/"
              color="#000"
              colorOnHover="#000"
              background="#fff"
              backgroundOnHover="#fff"
              top="1rem"
            />

            <p>or</p>

            <div className="flex">
              {quickLinks.map((d, i) => (
                <ReadMoreType
                  key={i}
                  text={d.name}
                  url={d.url}
                  color="#fff"
                  colorOnHover="#fff"
                  background="#ffffff2b"
                  backgroundOnHover="#ffffff2b"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          height: 100vh;
        }

        .section:before {
          z-index: -1;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          background: #11111196;
        }
        .main {
          text-align: center;
          padding: 1rem;
          color: white;
        }
        h1 {
          font-size: 6rem;
          color: #ffffff2b;
          line-height: 5rem;
        }

        p {
          color: #fff;
        }

        p:first-of-type {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.2rem;
        }

        p:nth-of-type(2),
        p:nth-of-type(3) {
          color: #c1c1c1;
          font-size: 1.1rem;
        }

        p:nth-of-type(3) {
          margin-top: 1rem;
        }

        .flex {
          width: fit-content;
          margin: auto;
          gap: 1rem;
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
};

export default ErrorLanding;
