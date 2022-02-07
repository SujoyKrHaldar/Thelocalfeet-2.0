import Moment from "react-moment";
import { urlFor } from "../../../../sanity";

function BlogPreview({ blog }) {
  return (
    <div className="preview">
      <div className="main flex">
        <div className="preview_info">
          <h3>{blog.title}</h3>
          <p>{blog.subtitle}</p>

          {blog?.publishedAt && (
            <p
              style={{
                fontWeight: "700",
                color: "gray",
                marginTop: "1rem",
              }}
            >
              <Moment format="MMM Do YYYY">{blog.publishedAt}</Moment>
            </p>
          )}
        </div>
        <div className="preview_image"></div>
      </div>

      <style jsx>{`
        .preview {
          padding: 1rem 2rem;
          position: relative;
          margin-bottom: 0.2rem;
          background: #ebebeb;
          z-index: 1;
        }

        .main {
          max-width: 590px;
          position: relative;
          margin: auto;
        }

        .preview:before {
          content: "";
          position: absolute;
          width: 34px;
          height: 50px;
          top: 0;
          left: 10px;
          clip-path: polygon(100% 100%, 50% 66%, 0 100%, 0 0, 100% 0);
          background: #d6d6d6;
        }

        .preview h3 {
          font-size: 1.7rem;
          margin-bottom: 0.5rem;
          display: inline-block;
        }
        .preview p {
          font-size: 1rem;
          padding: 0;
          margin: 0;
          background: transparent;
        }

        .preview_info {
          max-width: 328px;
        }
        .preview_image {
          background: url(${urlFor(blog.mainImage).url()}) no-repeat 50% 50%;
          background-size: cover;
          width: 186px;
          transform: translateY(-47px) rotate(3deg);
          height: 252px;
          box-shadow: 4px 4px 20px 0px #00000045;
          border: 0.7rem solid white;
        }

        @media only screen and (max-width: 768px) {
          .preview {
            padding: 3rem;
          }
          .flex {
            flex-direction: column;
            text-align: center;
          }
          .preview_image {
            position: relative;
            margin-top: 2rem;
            transform: rotate(0);
            width: 100%;
            height: 300px;
          }
          .preview:before {
            display: none;
          }
        }

        @media only screen and (max-width: 600px) {
          .preview {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default BlogPreview;
