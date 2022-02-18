import Link from "next/link";
import { useState } from "react";
import { urlFor } from "../../../config/sanity";

import Model from "./components/Model";
import Details from "./components/Details";

export default function Construct({ data, offer, others }) {
  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(true);
  };

  const closePopUp = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="section">
        <Model open={open} close={closePopUp} data={data} />

        <div className="background">
          {data.coverPhoto ? (
            <img
              onDragStart={(e) => {
                e.preventDefault();
              }}
              src={urlFor(data.coverPhoto).url()}
              alt={data.name}
            />
          ) : (
            <img
              onDragStart={(e) => {
                e.preventDefault();
              }}
              src={urlFor(data.photo).url()}
              alt={data.name}
            />
          )}
        </div>

        <div className="container">
          <div className="landing">
            {offer && data.offer && data.status ? (
              <p>{offer.specialMsg}</p>
            ) : (
              <>
                <p>{data.name}</p>
                {data?.caption && <p>{data.caption}</p>}
              </>
            )}

            <div className="links">
              <Link href="/">Home</Link> / <Link href="/store">Store</Link> /{" "}
              {data.name}
            </div>
          </div>

          <div className="details">
            <Details
              data={data}
              openPopup={openPopup}
              offer={offer}
              otherProducts={others}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .landing {
          padding: 3rem;
          text-align: center;
          color: white;
        }
        .landing p {
          max-width: 490px;
          margin: 0 auto;
        }
        .landing p:first-child() {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.3rem;
        }
        .links {
          margin: 1rem 0 0;
        }

        .background {
          height: 500px;
        }

        img {
          object-position: top;
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

        .details {
          background: #ffffff;
          box-shadow: 0px 7px 20px 7px #00000014;
          padding: 3rem;
          border-radius: 20px;
        }

        p:first-letter() {
          text-transform: uppercase;
        }

        @media (max-width: 967px) {
          .section {
            padding: 1rem;
          }
        }

        @media (max-width: 867px) {
          .details {
            padding: 2rem;
          }
        }

        @media (max-width: 767px) {
          .section {
            padding: 0;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding: 0;
          }

          .background,
          .landing {
            display: none;
          }

          .details {
            padding-top: 6rem;
          }
        }
      `}</style>
    </>
  );
}
