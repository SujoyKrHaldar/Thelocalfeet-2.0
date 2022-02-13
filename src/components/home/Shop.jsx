import ReadMoreType from "../design/buttons/ReadMoreType";
import ShopCard from "../design/card/ShopCard";

const Shop = ({ data, offer }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <p className="tag">Store</p>
          <h2>Shop with us</h2>

          <div className="list">
            {data.map((d) => (
              <ShopCard
                d={d}
                key={d.id}
                offer={offer}
                background="#fff"
                borderDefault="#bee3ff"
                borderOnHover="#2882c9"
                offerBackground="#2882c9"
              />
            ))}
          </div>

          <ReadMoreType
            text="Shop with us"
            url="/store"
            color="#fff"
            colorOnHover="#fff"
            background="#2882c9 "
            backgroundOnHover="#52abf0"
          />
        </div>
      </div>

      <style jsx>{`
        .section {
          background: linear-gradient(0deg, white, #2196f330, white);
        }
        .container {
          text-align: center;
        }

        .list {
          position: relative;

          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;

          margin: 2rem 0;
        }

        h2 {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default Shop;
