import Head from "next/head";
import Layout from "../../components/layout/Layout";
import Gallery from "../../components/photography/Gallery";
import Landing from "../../components/photography/Landing";
import PhotoBlog from "../../components/photography/PhotoBlog";
import { sanityClient } from "../../../sanity";

const photoBlogQuery = `*[_type == "photoBlog"][0..2]|order( publishedAt desc)
                      {
                        "id":_id, 
                        title, 
                        subtitle, 
                        "slug":slug.current, 
                        mainImage
                      }`;

const galleryQuery = `*[_type == "photography"][0...6]|order( publishedAt desc)
                      {
                        "id":_id, 
                        caption,
                        "Ilink":IsLink,
                        "Flink":FbLink, 
                        photo
                      }`;

export const getStaticProps = async () => {
  const gallery = await sanityClient.fetch(galleryQuery);
  const blog = await sanityClient.fetch(photoBlogQuery);

  return {
    props: {
      gallery,
      blog,
    },
    revalidate: 1,
  };
};

function index({ blog, gallery }) {
  return (
    <>
      <Head>
        <title>Our Snapshots - thelocalfeet</title>
        <meta
          name="description"
          content="Photography can be a speaker of an introvert soul. Check out thelocalfeet's photo section and don't forget to follow on social sites."
        />
        <meta
          name="keywords"
          content="travel websites, travel sites, thelocalfeet, travel, travel blog, explore,  places to visit, photography, travel photography "
        />
        <meta property="og:title" content="Our Snapshots - thelocalfeet" />

        <meta
          property="og:description"
          content="Photography can be a speaker of an introvert soul. Check out thelocalfeet's photo section and don't forget to follow on social sites."
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}/photography`}
        />
        {/* <meta property="og:image" content="/image/photography/landing2.jpeg" /> */}
      </Head>

      <Layout mainColor="#fff" mainBackground="transparent" logo="light">
        <Landing />
        <Gallery data={gallery} />
        <PhotoBlog data={blog} />
      </Layout>
    </>
  );
}

export default index;