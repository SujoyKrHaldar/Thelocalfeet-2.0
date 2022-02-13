import BlogCard from "../design/card/BlogCard";
import ReadMoreType from "../design/buttons/ReadMoreType";
import { IoIosArrowDown } from "react-icons/io";

const Blog = ({ data }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <p className="tag">Read our</p>
          <h2>Featured Posts</h2>

          <div className="list">
            {data.map((d) => (
              <BlogCard data={d} key={d.id} />
            ))}
          </div>

          <ReadMoreType
            text="View all blogs"
            url="/explore#articles"
            color="#fff"
            colorOnHover="#fff"
            background="#009688"
            backgroundOnHover="#00685e"
          />
        </div>

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
          background: #f3c481;
          color: white;
          border-radius: 100%;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
        }
        .section {
          background: linear-gradient(0deg, white, #00968814, white);
        }
        .container {
          text-align: center;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 2rem 0;
          gap: 1rem;
        }

        }
      `}</style>
    </>
  );
};

export default Blog;
