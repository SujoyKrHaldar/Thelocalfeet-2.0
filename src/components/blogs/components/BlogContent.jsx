import { Portabletext, urlFor } from "../../../../config/sanity";

const BlogContent = ({ blog }) => {
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

        @media (max-width: 867px) {
          .main {
            padding: 1rem 0rem;
          }
        }
      `}</style>
    </>
  );
};

export default BlogContent;
