import ShopCard from "../design/card/ShopCard";
import OfferTemplate from "./components/OfferTemplate";

const App = ({ data, offer }) => {
  return (
    <>
      <div className="section ">
        <div className="container">
          <div className="shop an_fade-2">
            {offer && <OfferTemplate data={offer} />}

            <div className="list an_fade-3">
              {data.map((d) => (
                <ShopCard d={d} key={d.id} offer={offer} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding-top: 2rem;
          text-align: center;
        }

        .shop {
          position: relative;

          background: white;
        }

        .list {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        @media (max-width: 600px) {
          .container {
            padding: 2rem 0;
          }
        }
      `}</style>
    </>
  );
};

export default App;
