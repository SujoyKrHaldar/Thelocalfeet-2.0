import { IoIosArrowDown } from "react-icons/io";

import OtherBlogCard from "../../design/card/OtherBlogCard";
import ReadMoreType from "../../design/buttons/ReadMoreType";

export default function OtherBlogs({ data, Blogs_link }) {
  return (
    <>
      <div className="other_blogs">
        <p className="tag">Keep Reading</p>
        <h3>More articles</h3>

        <div className="flex lists">
          {data.map((d) => (
            <OtherBlogCard key={d.id} data={d} link={`${d.slug}`} />
          ))}
        </div>

        {data.length > 1 && (
          <ReadMoreType
            text="All articles"
            url={Blogs_link}
            color="#fff"
            colorOnHover="#fff"
            background="#2f2f2f "
            backgroundOnHover="#4d4d4d"
          />
        )}

        <div className="icon ">
          <IoIosArrowDown />
        </div>
      </div>

      <style jsx>{`
        .icon {
          position: absolute;
          width: 40px;
          height: 40px;
          font-size: 1.4rem;
          background: #e1e1e1;
          color: white;
          border-radius: 100%;
          bottom: -1.35rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .other_blogs {
          position: relative;
          text-align: center;
          padding: 4rem 0;
          border: 1px solid #ebebeb;
        }

        .lists {
          justify-content: center;
          align-items: initial;
          gap: 1rem;
          flex-wrap: wrap;
          margin: 1.5rem 0;
        }

        h3 {
          font-size: 1.7rem;
          margin-bottom: 0.5rem;
          display: inline-block;
        }

        @media (max-width: 1288px) {
          .other_blogs {
            border: 0;
            border-bottom: 1px solid #ebebeb;
          }
        }
      `}</style>
    </>
  );
}
