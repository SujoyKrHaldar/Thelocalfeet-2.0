export default function Landing() {
  return (
    <>
      <div className="section">
        <div className="background">
          <img
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src="/assets/shop-thumbnail.jpg"
            alt="thelocalfeet shopping"
          />
        </div>

        <div className="container">
          <h1>Store</h1>
        </div>
      </div>

      <style jsx>{`
        .section {
          color: white;
          height: 400px;
        }

        .container {
          display: grid;
          place-items: center;
          margin-top: 1rem;
        }

        h1 {
          letter-spacing: 0;
        }
        .background:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #00000063;
          z-index: 1;
          inset: 0;
        }
        img {
          object-position: center;
        }

        @media (max-width: 768px) {
          .section {
            height: 250px;
          }
        }
      `}</style>
    </>
  );
}
