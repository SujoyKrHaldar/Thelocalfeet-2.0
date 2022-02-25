import Card_two from "../design/card/Card_two";

const BlogsList = ({ data }) => {
  return (
    <>
      <div className="blogs">
        <h2>Articles</h2>
        <div className="list">
          {data.map((i) => (
            <Card_two i={i} key={i.id} link={`/explore/${i.slug}`} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .blogs {
          position: relative;
        }
        h2 {
          padding: 0.3rem 2rem;
          background: #f5f5f5;
          display: inline-block;
        }
        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
};

export default BlogsList;
