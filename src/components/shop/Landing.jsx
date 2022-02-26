import Image from "next/image";

export default function Landing() {
  return (
    <>
      <div className="section">
        <div className="background">
          {/* <img
            className="an_fade-1"
            onDragStart={(e) => {
              e.preventDefault();
            }}
            src="/assets/shop-thumbnail.jpg"
            alt="thelocalfeet shopping"
          /> */}

          <Image
            // layout="responsive"
            // width={1920}
            // height={1080}
            layout="fill"
            objectFit="cover"
            loading="eager"
            objectPosition="center"
            className="parallex an_fade-1"
            src="/assets/shop-thumbnail.jpg"
            alt="thelocalfeet shopping"
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </div>

        <div className="container">
          <h1 className="an_fade-2">Store</h1>
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
          z-index: 1;
          inset: 0;
        }
        /* img {
          object-position: center;
        } */

        @media (max-width: 768px) {
          .section {
            height: 250px;
          }
        }
      `}</style>
    </>
  );
}
