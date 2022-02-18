import { IoIosArrowDown } from "react-icons/io";

import BlogCard from "../design/card/BlogCard";
import ReadMoreType from "../design/buttons/ReadMoreType";

const PhotoBlog = ({ data }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <p className="tag">New Section</p>
          <h2>Photo Albums</h2>

          <div className="list">
            {data.map((d) => (
              <BlogCard data={d} key={d.id} />
            ))}
          </div>

          {data.length > 4 && (
            <ReadMoreType
              text="View all blogs"
              url="/photography"
              color="#fff"
              colorOnHover="#fff"
              background=" #f3c481"
              backgroundOnHover="#dd9733"
            />
          )}
        </div>

        <div className="icon ">
          <IoIosArrowDown />
        </div>
      </div>

      <style jsx>{`
        .section {
          padding-top: 2rem;
          padding-bottom: 4rem;
          z-index: 2;
        }
        .icon {
          position: absolute;
          width: 40px;
          height: 40px;
          font-size: 1.4rem;
          background: #f3c481;
          color: white;
          border-radius: 100%;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .section:before {
          content: "";
          position: absolute;
          width: 50%;
          height: 50%;
          left: 0;
          top: 0;
          background: radial-gradient(#2196f330, #ffffff00, #ffffff00);
          z-index: -1;
        }

        .section:after {
          content: "";
          position: absolute;
          width: 75%;
          height: 90%;
          right: 0;
          bottom: -11rem;
          background: radial-gradient(#ff980045, #ffffff00, #ffffff00);
          z-index: -1;
        }

        .container {
          text-align: center;
          padding: 2rem 0;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0 3rem;
        }

        h2 {
          padding: 0.3rem 2rem;
          background: #fff0dc;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default PhotoBlog;
