import Head from "next/head";
import { sanityClient, urlFor } from "../../../sanity";
import BlogTemplate from "../../components/blogs/BlogTemplate";
import FallbackLoading from "../../components/design/template/FallbackLoading";
import CustomNavbar from "../../components/layout/CustomNavbar";
import Footer from "../../components/layout/Footer";

const BlogSlugsQuery = `*[_type == "photoBlog" && defined(slug.current)][].slug.current`;

const eachBlogQuery = `*[_type == "photoBlog" && slug.current == $slug][0]
                      {
                        "id":_id, 
                        title, 
                        subtitle, 
                        keywords, 
                        "slug":slug.current,
                        mainImage, 
                        body, 
                        publishedAt, 
                        "comment":*[_type == "comments" && post._ref == ^._id && isApproved == false ]|order( publishedAt desc)
                                {
                                  "id":_id, 
                                  "date":_createdAt, 
                                  name, 
                                  comment
                                }
                      }`;

export async function getStaticPaths() {
  const response = await sanityClient.fetch(BlogSlugsQuery);

  const paths = response.map((slug) => ({
    params: { slug },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const blog = await sanityClient.fetch(eachBlogQuery, {
    slug: params.slug,
  });

  if (!blog) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog,
    },
    revalidate: 1,
  };
}

const photoBlogBySlug = ({ blog }) => {
  if (!blog) return <FallbackLoading />;
  return (
    <>
      <Head>
        <title> {blog.title} - thelocalfeet</title>
        <meta name="description" content={blog.subtitle} />
        <meta name="keywords" content={blog.keywords} />
        <meta property="og:title" content={`${blog.title} - thelocalfeet`} />

        <meta property="og:description" content={blog.subtitle} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}/explore/${blog.slug}`}
        />
        <meta property="og:image" content={urlFor(blog.mainImage).url()} />
      </Head>

      <CustomNavbar />
      <BlogTemplate blog={blog} />
      <Footer />
    </>
  );
};

export default photoBlogBySlug;
