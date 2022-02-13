import OtherBlogCard from "../../design/card/OtherBlogCard";
import { IoIosArrowDown } from "react-icons/io";

export default function Blogs({ data }) {
  return (
    <>
      <div className="container">
        <div className="blogs">
          <p className="tag">Keep Reading</p>
          <h3>Latest Articles</h3>

          <div className="flex lists">
            {data.map((d) => (
              <OtherBlogCard key={d.id} data={d} link={`/explore/${d.slug}`} />
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
          background: #dfdfdf;
          color: white;
          border-radius: 100%;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .blogs {
          position: relative;
          padding: 4rem 0 3rem;
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
