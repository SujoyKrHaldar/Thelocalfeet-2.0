import ShopCard from "../design/card/ShopCard";
import OfferTemplate from "./components/OfferTemplate";

const App = ({ data, offer }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          {offer ? <OfferTemplate data={offer} /> : <h1>Shop</h1>}

          <div className="shop">
            {data.map((d) => (
              <ShopCard d={d} key={d.id} offer={offer} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .section {
          padding-top: 4rem;
          text-align: center;
        }

        h1 {
          margin-bottom: 1.5rem;
          letter-spacing: 0;
        }
        .shop {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
};

export default App;
