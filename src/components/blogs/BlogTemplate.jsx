import BlogContent from "../design/blog/BlogContent";
import BlogLanding from "../design/blog/BlogLanding";
import SocialShareBox from "../design/blog/SocialShareBox";
import BlogPreview from "../design/blog/BlogPreview";
import Comments from "../design/form/Comments";
import OtherBlogCard from "../design/card/OtherBlogCard";
import ScrollToTop from "../design/buttons/ScrollToTop";

const BlogTemplate = ({ blog, others }) => {
  return (
    <>
      <BlogLanding blog={blog} />

      <div className="section">
        <div className="container">
          <BlogContent blog={blog} />
          <SocialShareBox blog={blog} />
          <BlogPreview blog={blog} />
          {others.length > 0 && <OtherBlogCard data={others} />}
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
