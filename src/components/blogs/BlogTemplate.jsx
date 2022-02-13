import BlogContent from "./components/BlogContent";
import BlogLanding from "./components/BlogLanding";
import SocialShareBox from "./components/SocialShareBox";
import BlogPreview from "./components/BlogPreview";
import Comments from "../design/form/Comments";
import ScrollToTop from "../design/buttons/ScrollToTop";
import OtherBlogs from "./components/OtherBlogs";

const BlogTemplate = ({ blog, others, link }) => {
  return (
    <>
      <BlogLanding blog={blog} />

      <div className="section">
        <div className="container">
          <BlogContent blog={blog} />
          <SocialShareBox blog={blog} />
          <BlogPreview blog={blog} />
          {others.length > 0 && <OtherBlogs data={others} Blogs_link={link} />}
          <Comments id={blog.id} comment={blog.comment} />
          <ScrollToTop />
        </div>
      </div>

      <style jsx>{`
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
