const ComingSoon = () => {
  return (
    <>
      <div className="section">
        <div className="background">
          <img
            className="img"
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src="/assets/coming-soon.jpeg"
            alt="Coming_soon"
          />
        </div>

        <div className="container flex">
          <h1>Coming soon</h1>
        </div>
      </div>

      <style jsx>{`
        .section {
          height: 100vh;
          text-align: center;
        }

        h1 {
          color: #fff;
          letter-spacing: 0.7rem;
          text-transform: uppercase;
        }

        .section:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          z-index: -1;
          background: #3f3f3f5c;
        }

        .flex {
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default ComingSoon;
