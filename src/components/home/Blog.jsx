import BlogCard from "../design/card/BlogCard";
import ReadMoreType from "../design/buttons/ReadMoreType";

const Blog = ({ data }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <p className="tag">Fatured</p>
          <h2>Blog Articless</h2>

          <div className="list">
            {data.map((d) => (
              <BlogCard data={d} key={d.id} />
            ))}
          </div>

          {data.length > 4 && (
            <ReadMoreType
              text="View all blogs"
              url="/explore#articles"
              color="#fff"
              colorOnHover="#fff"
              background="#009688"
              backgroundOnHover="#00685e"
            />
          )}
        </div>
      </div>

      <style jsx>{`
        
        .section {
          padding-top:4rem;
          padding-bottom:2rem;
          background: linear-gradient(0deg, white, #00968814, white);
        }
        .container {
          text-align: center;
          padding: 2rem 0;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin: 2rem 0;
          gap: 1rem;
        }

        h2{
          padding: 0.3rem 2rem;
          background: #7cd7cf36;
          display: inline-block;
        }

        }
      `}</style>
    </>
  );
};

export default Blog;
