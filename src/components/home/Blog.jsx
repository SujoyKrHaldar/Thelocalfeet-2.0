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
