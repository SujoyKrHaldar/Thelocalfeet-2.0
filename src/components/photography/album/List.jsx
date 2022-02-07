import Link from "next/link";
import { urlFor } from "../../../../sanity";

const List = ({ blog }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <h1>Albums</h1>
          <div className="list">
            {blog.map((data) => (
              <div className="box" key={data.id}>
                <div className="background">
                  <img
                    src={urlFor(data.mainImage).url()}
                    alt={data.title}
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                  />
                </div>

                <div className="info flex">
                  <h2>{data.title}</h2>
                  <p>{data.subtitle}</p>

                  <Link href={`/photography/${data.slug}`}>
                    <a className="btn">Continue</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .section {
          text-align: center;
          padding-top: 5rem;
        }

        h1 {
          padding: 0.3rem 2rem;
          margin-bottom: 1.5rem;
          background: #f5f5f5;
          display: inline-block;
        }

        .list {
          height: fit-content;
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .box {
          position: relative;
          width: 100%;
          height: 450px;
          overflow: hidden;
          flex: 1 1 290px;
          text-align: left;
        }
        .background {
          transition: 0.3s ease;
        }
        img {
          object-position: center;
        }
        .card:hover .background {
          transform: scale(1.03);
        }
        .info {
          height: 100%;
          padding: 3rem;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          background: linear-gradient(90deg, #1c1c1c, #292929b3, transparent);
        }

        h2 {
          color: white;
        }

        p {
          max-width: 450px;
          margin-bottom: 1.5rem;
          color: #d8d8d8;
        }

        .btn {
          background: white;
          color: black;
        }

        .btn:focus {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
};

export default List;
