import Head from "next/head";
import { sanityClient, urlFor } from "../../../config/sanity";

import BlogTemplate from "../../components/blogs/BlogTemplate";
import FallbackLoading from "../../components/design/template/FallbackLoading";
import CustomLayout from "../../components/layout/CustomLayout";

const allBlogSlugQuery = `*[_type == "blog" && defined(slug.current)][].slug.current`;

const eachBlogSlugQuery = `*[_type == "blog" && slug.current == $slug][0]
                        {
                          "id":_id,
                          keywords,
                          "country":country->{name}, 
                          mainImage, 
                          publishedAt, 
                          "slug":slug.current, 
                          subtitle, 
                          title, 
                          body, 
                          "comment":*[_type == "comments" && post._ref == ^._id && isApproved == true ]|order( publishedAt desc)
                                  {
                                    "id":_id,
                                    "date":_createdAt,
                                     name, 
                                     comment
                                  }
                        }`;

const otherBlogsQuery = `*[_type == "blog" && slug.current != $slug][0..3]
                        {
                          'id':_id, 
                          publishedAt, 
                          'country':country->{name}, 
                          mainImage,
                          'slug':slug.current, 
                          title, 
                          subtitle 
                        }`;

export async function getStaticPaths() {
  const response = await sanityClient.fetch(allBlogSlugQuery);

  const paths = response.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const blog = await sanityClient.fetch(eachBlogSlugQuery, {
    slug: params.slug,
  });

  const otherBlogs = await sanityClient.fetch(otherBlogsQuery, {
    slug: params.slug,
  });

  if (!blog) {
    return {
      redirect: {
        destination: "/explore",
        permanent: false,
      },
    };
  }

  return {
    props: {
      blog,
      otherBlogs,
    },
    revalidate: 1,
  };
}

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Explore",
    url: "/explore",
  },
];

function blogBySlug({ blog, otherBlogs }) {
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

      <CustomLayout links={links} currPage={blog.title}>
        <BlogTemplate
          blog={blog}
          others={otherBlogs}
          link="/explore"
          links={links}
          currPage={blog.title}
        />
      </CustomLayout>
    </>
  );
}

export default blogBySlug;
