const Achievement = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="main">
            <h2>Our Achievements</h2>
            <p>
              Recently thelocalfeet got featured by thelonelyplanet magazine &
              several other community pages. Gained organic 3k followers on
              Instagram within 4 months.
            </p>

            <p className="tag">Success Story</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main {
          text-align: center;
          max-width: 600px;
          margin: auto;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 1.5rem;
          background: #f5f5f5;
          display: inline-block;
        }
        p {
          line-height: 1.5rem;
          margin: 0;
        }
        .tag {
          margin-bottom: 1rem;
          color: #737373;
        }
      `}</style>
    </>
  );
};

export default Achievement;
