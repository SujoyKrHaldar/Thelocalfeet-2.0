import { Portabletext, urlFor } from "../../../../config/sanity";
import FallbackLinks from "../../layout/helper/FallbackLinks";

const BlogContent = ({ blog, links, currPage }) => {
  const serializers = {
    types: {
      image: ({ node }) => {
        return (
          <div className="blog-image" style={{ margin: "2rem 0" }}>
            <img
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
              src={urlFor(node).url()}
              alt={node.caption}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            />
            <p
              style={{
                textaAlign: "left",
                fontStyle: "italic",
                color: "#7e7e7e",
                fontWeight: "400",
              }}
            >
              {node.caption}
            </p>
          </div>
        );
      },
    },
  };

  return (
    <>
      <div className="main">
        {currPage && (
          <div className="links_mob">
            <FallbackLinks links={links} currPage={currPage} />
          </div>
        )}

        <Portabletext
          className="blog_body"
          blocks={blog.body}
          serializers={serializers}
        />

        <p className="tag">the end</p>
      </div>

      <style jsx>{`
        .main {
          position: relative;
          max-width: 735px;
          margin: auto;
          padding: 2rem;
        }

        .links_mob {
          display: none;
        }

        @media (max-width: 867px) {
          .main {
            padding: 1rem 0rem;
          }
        }

        @media (max-width: 768px) {
          .links_mob {
            display: block;
            background: white;
            position: sticky;
            padding: 1rem 0rem;
            top: 5.5rem;
            z-index: 2;
          }
        }

        @media (max-width: 600px) {
          .links_mob {
            top: 4.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default BlogContent;
