import BlogCard from "../design/card/BlogCard";
import ReadMoreType from "../design/buttons/ReadMoreType";

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
      </div>

      <style jsx>{`
        .section {
          background: linear-gradient(0deg, white, #00968814, white);
          padding-top: 1rem;
        }
        .container {
          text-align: center;
        }
        .tag {
          color: #00968826;
          font-size: 9rem;
          position: absolute;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          text-align: left;
          margin: 2rem 0;
          gap: 1rem;
        }

        @media (max-width: 600px) {
          .container {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Blog;
