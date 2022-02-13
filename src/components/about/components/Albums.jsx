import OtherBlogCard from "../../design/card/OtherBlogCard";
import { IoIosArrowDown } from "react-icons/io";

export default function Albums({ data }) {
  return (
    <>
      <div className="container">
        <div className="albums">
          <h3>Latest Albums</h3>

          <div className="flex lists">
            {data.map((d) => (
              <OtherBlogCard key={d.id} data={d} link={`${d.slug}`} />
            ))}
          </div>

          <div className="icon ">
            <IoIosArrowDown />
          </div>
        </div>
      </div>

      <style jsx>{`
        .icon {
          position: absolute;
          width: 40px;
          height: 40px;
          font-size: 1.4rem;
          background: #ffdca9;
          color: white;
          border-radius: 100%;
          bottom: -1.35rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .albums {
          position: relative;
          padding: 3rem 0;
          text-align: center;
        }

        .lists {
          margin-top: 1rem;
          justify-content: center;
          align-items: initial;
          gap: 0;
          flex-wrap: wrap;
        }

        h3 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          display: inline-block;
        }
      `}</style>
    </>
  );
}
