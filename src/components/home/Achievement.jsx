import { IoIosArrowDown } from "react-icons/io";

const Achievement = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <h2 className="tag">Our Achievements</h2>
          <p>
            Recently thelocalfeet got featured by thelonelyplanet magazine &
            several other community pages. Gained organic 3k followers on
            Instagram within 4 months.
          </p>

          <div className="featured">
            <img
              src="/assets/collage-three.webp"
              alt="Success stories"
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
          </div>
        </div>

        <div className="icon ">
          <IoIosArrowDown />
        </div>
      </div>

      <style jsx>{`
        .section {
          text-align: center;
          padding: 4rem 2rem;
        }

        .icon {
          position: absolute;
          width: 40px;
          height: 40px;
          font-size: 1.4rem;
          background: #d6d6d6;
          color: white;
          border-radius: 100%;
          bottom: -1rem;
          left: 50%;
          transform: translateX(-50%);
        }

        h2 {
          margin-bottom: 1.5rem;
          color: #5b5b5b;
          font-size: 2.3rem;
        }

        p {
          max-width: 766px;
          margin: auto;

          line-height: 2.3rem;
          font-size: 1.6rem;
          font-weight: 600;
        }

        .featured {
          position: relative;
          margin: 4rem auto 0;
          max-width: 276px;
          height: 358px;
          transform: rotate(-3deg);
          border: 0.6rem solid #ffffff;
          box-shadow: 0px 6px 20px 6px #00000030;
        }

        img {
          object-position: 30% 50%;
        }

        @media (max-width: 768px) {
          .container {
            padding: 2rem 0;
          }

          p {
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 500;
            max-width: 450px;
          }

          .featured {
            margin: 2rem auto;
            transform: rotate(0deg);
          }
        }

        @media (max-width: 600px) {
          .featured {
            max-width: 100%;
            height: auto;
            margin: 2rem 0;
          }
        }
      `}</style>
    </>
  );
};

export default Achievement;
