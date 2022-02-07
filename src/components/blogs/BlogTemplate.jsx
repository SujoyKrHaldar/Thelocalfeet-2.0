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
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          .container {
            padding: 1rem 0rem;
          }
        }
      `}</style>
    </>
  );
};

export default BlogTemplate;