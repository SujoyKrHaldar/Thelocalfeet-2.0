import { BiSearch } from "react-icons/bi";

import HrTag from "../design/HrTag";
import Card_two from "../design/card/Card_two";

const PhotoBlog = ({ data }) => {
  return (
    <>
      <div className="section" id="album">
        <div className="container">
          <div className="flex">
            <h2>Featured Albums</h2>

            {/* <div className="flex search">
              <p>What are you looking for?</p>
              <input placeholder="Search by name" type="text" />
              <div className="icon">
                <BiSearch />
              </div>
            </div> */}
          </div>

          <div className="list">
            {data.map((d) => (
              <Card_two key={d.id} i={d} link={`/photography/${d.slug}`} />
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
          gap: 1rem;
          margin-top: 2rem;
        }

        .search {
          border: 2px solid #d5d5d5;
          border-radius: 20px;
          overflow: hidden;
          gap: 0.5rem;
        }
        input {
          max-width: 350px;
          outline: none;
          border: none;
          /* background: #d7d7d7; */
          padding: 0.6rem 1rem;
        }

        .icon {
          font-size: 1.5rem;
          padding: 0.5rem 1rem;
          color: #afafaf;
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
