import PhBlogCardH from "../design/card/PhBlogCardH";

const PhotoBlog = ({ data }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <h2>Featured Albums</h2>

          <div className="list">
            {data.map((d) => (
              <PhBlogCardH key={d.id} data={d} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          padding-top: 1rem;
          text-align: center;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 1rem;
          background: #f5f5f5;
          display: inline-block;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
      `}</style>
    </>
  );
};

export default PhotoBlog;
