import ShopCard from "../design/card/ShopCard";
import OfferTemplate from "./components/OfferTemplate";
import ComingSoon from "../design/template/ComingSoon";

const App = ({ data, offer }) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="section">
          <div className="background">
            <img
              onDragStart={(e) => {
                e.preventDefault();
              }}
              src="/assets/about-gallery.jpg"
              alt="thelocalfeet shopping"
            />
          </div>

          <div className="container">
            <div className="landing">
              <p>Store</p>
            </div>

            <div className="shop">
              {offer && <OfferTemplate data={offer} />}

              <div className="list">
                {data.map((d) => (
                  <ShopCard d={d} key={d.id} offer={offer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ComingSoon asset="/assets/about-gallery.jpg" />
      )}
      <style jsx>{`
        .section {
          padding-top: 4rem;
          text-align: center;
        }

        .background {
          height: 394px;
        }

        img {
          object-position: 50% 28%;
        }

        .background:before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #00000078;
          z-index: 1;
          inset: 0;
        }

        .landing {
          padding: 3rem;
          text-align: center;
          color: white;
          height: 250px;
          display: grid;
          place-items: center;
          margin-bottom: 3rem;
        }
        .landing p {
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
        }

        h1 {
          margin-bottom: 1.5rem;
          letter-spacing: 0;
        }
        .shop {
          position: relative;
          padding: 3rem 0;
          background: white;
        }

        .list {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
      `}</style>
    </>
  );
};

export default App;
