import { urlFor } from "../../../../sanity";
import Link from "next/link";

export default function MainDetails({ details: ds, openPopup, offer }) {
  return (
    <>
      <div className="flex main">
        <div className="img">
          <img
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src={urlFor(ds.photo).url()}
            alt={ds.name}
          />
        </div>

        <div className="content">
          <p className="category">{ds.category.name}</p>

          <p className="title">{ds.name}</p>

          {offer && ds.offer && ds.status ? (
            <div className="flex discount_pricing">
              <p className="offer">{offer.discount}</p>
              <p> ₹ {ds.discountPrice}</p>
              <p className="old"> ₹ {ds.price}</p>
            </div>
          ) : (
            <p
              style={!ds.status ? { color: "#b2b2b2" } : { color: "#000" }}
              className="price"
            >
              ₹ {ds.price}
            </p>
          )}

          <p>{ds?.description}</p>

          {ds.status && (
            <div>
              {ds?.size && (
                <>
                  <p className="size">Size </p>
                  <div className="size_list">
                    {ds.size.map((w, i) => (
                      <span key={i}>{w}</span>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {ds.status ? (
            <div className="flex buttons ">
              <div onClick={openPopup} className="btn">
                Buy now
              </div>
              <Link href="/store">
                <a className="btn update">Browse store</a>
              </Link>
            </div>
          ) : (
            <div className="flex buttons ">
              <div className="btn status disabled">Not available</div>
              {ds.preBooking && (
                <div onClick={openPopup} className="btn update">
                  Pre book now
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .flex {
          gap: 1rem;
        }
        .main {
          gap: 3rem;
        }

        .img {
          flex: 1;
          height: 450px;
          background: black;
          border-radius: 20px;
          overflow: hidden;
        }

        .content {
          flex: 1;
          padding: 1rem;
        }

        .category {
          padding: 0.5rem 1.2rem;
          border-radius: 10px;
          background: #f2f2f2;
          display: inline-block;
        }
        .title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .discount_pricing {
          justify-content: initial;
          margin-bottom: 1rem;
        }

        .offer {
          padding: 0.3rem 1.2rem;
          border-radius: 10px;
          background: #51c2b870;
        }

        .discount_pricing p {
          font-size: 1.3rem;
          font-weight: 700;
          margin: 0;
        }

        .discount_pricing p.old {
          font-weight: 300;
          color: #b2b2b2;
        }
        .price {
          font-size: 1.3rem;
          font-weight: 700;
        }

        .size {
          margin-top: 1rem;
          margin-bottom: 0;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .size_list {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0.5rem 0 1rem;
        }

        span {
          padding: 0.5rem 1.2rem;
          border-radius: 10px;
          background: #f2f2f2;
        }

        p {
          max-width: 431px;
        }

        p:first-letter() {
          text-transform: uppercase;
        }

        .btn {
          border: 2px solid black;
          background: black;
          color: white;
          margin-top: 1rem;
          border-radius: 6px;
        }

        .btn:active {
          transform: scale(0.9);
        }

        .update {
          background: #ffffff;
          color: black;
          border: 2px solid black;
          font-weight: 700;
        }

        .update:hover {
          background: #e3e3e3;
        }

        .status {
          color: #cf4242;
          background: #ffa7a74a;
          border: 2px dashed #cf4242;
        }

        .buttons {
          justify-content: initial;
          gap: 1rem;
        }

        @media (max-width: 967px) {
          .main {
            gap: 2rem;
          }
        }

        @media (max-width: 830px) {
          .main {
            flex-direction: column;
            text-align: center;
          }

          .discount_pricing {
            justify-content: center;
          }

          .img {
            height: auto;
          }

          .size_list {
            justify-content: center;
          }

          .buttons {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
