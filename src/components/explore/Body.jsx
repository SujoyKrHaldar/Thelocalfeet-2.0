import BlogsList from "./BlogsList";
import Countries from "./Countries";

const Body = ({ country, blog, album }) => {
  return (
    <>
      <div className="section">
        <div className="container flex">
          <BlogsList data={blog} />
          <Countries data={country} album={album} />
        </div>
      </div>

      <style jsx>{`
        .flex {
          justify-content: center;
          align-items: flex-start;
        }
      `}</style>
    </>
  );
};

export default Body;