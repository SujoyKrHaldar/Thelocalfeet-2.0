import PhBlogCardH from "../design/card/PhBlogCardH";
import HrTag from "../design/HrTag";

const PhotoBlog = ({ data }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="flex">
            <h2>Featured Albums</h2>
            {/* <input placeholder="Search by name" type="text" /> */}
          </div>

          <div className="list">
            {data.map((d) => (
              <PhBlogCardH key={d.id} data={d} />
            ))}
          </div>
        </div>

        <HrTag background="#ffdba6" bottom="-2rem" top="auto" />
      </div>

      <style jsx>{`
        .section {
          text-align: center;
          padding-top: 6rem;
          padding-bottom: 4rem;
        }

        h2 {
          padding: 0.3rem 2rem;
          margin-bottom: 1rem;
          background: #ffdba65e;
          display: inline-block;
        }

        .list {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 2rem;
        }

        input {
          padding: 0.7rem 1rem;
          outline: 0px;
          border: 2px solid black;
          width: 100%;
          max-width: 350px;
        }

        @media (max-width: 867px) {
          .list {
            gap: 1rem;
          }
        }

        @media (max-width: 780px) {
          .container {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};

export default PhotoBlog;
