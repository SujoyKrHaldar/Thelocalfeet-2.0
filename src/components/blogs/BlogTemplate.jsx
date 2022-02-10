import { IoIosArrowUp, IoIosArrowBack } from "react-icons/io";
import BlogContent from "../design/blog/BlogContent";
import BlogLanding from "../design/blog/BlogLanding";
import SocialShareBox from "../design/blog/SocialShareBox";
import BlogPreview from "../design/blog/BlogPreview";
import Comments from "../design/form/Comments";
import OtherBlogCard from "../design/card/OtherBlogCard";

const BlogTemplate = ({ blog, others }) => {
  return (
    <>
      <BlogLanding blog={blog} />

      <div className="section">
        <div className="container">
          <BlogContent blog={blog} />
          <SocialShareBox blog={blog} />
          <BlogPreview blog={blog} />
          <OtherBlogCard data={others} />
          <Comments id={blog.id} comment={blog.comment} />

          <div className="bottom">
            <div className="icon back">
              <IoIosArrowBack />
            </div>

            <div
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex scroll_top"
            >
              <div className="icon top">
                <IoIosArrowUp />
              </div>
              <p>Go to top</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bottom {
          display: flex;
          align-items: center;
          justify-content: right;
          position: sticky;
          bottom: 3rem;
          z-index: 1;
        }

        p {
          margin: 0;
        }

        .back {
          display: none;
        }

        .flex {
          gap: 0.5rem;
        }

        .scroll_top {
          background: #008175;
          padding: 0.5rem 1.5rem 0.5rem 0.5rem;
          color: white;
          border-radius: 50px;
          cursor: pointer;
        }

        /* .scroll_top p {
          font-size: 0;
        } */
        .top {
          background: #009688;
          color: white;
          font-size: 1.4rem;
          border-radius: 100%;
        }

        @media (max-width: 600px) {
          .container {
            padding: 1rem 0rem;
          }

          .bottom {
            justify-content: center;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default BlogTemplate;
