import ShopCard from "../design/card/ShopCard";

const App = ({ data, offer }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1>Shop</h1>

          <div className="shop">
            {data.map((d) => (
              <ShopCard d={d} key={d.id} offer={offer} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .section {
          text-align: center;
          padding-top: 5rem;
        }

        h1 {
          padding: 0.3rem 2rem;
          margin-bottom: 1.5rem;
          background: #f5f5f5;
          display: inline-block;
        }
        .shop {
          position: relative;
          padding: 1rem;
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
