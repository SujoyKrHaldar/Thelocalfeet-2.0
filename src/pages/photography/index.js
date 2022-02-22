import Rellax from "rellax";
import Head from "next/head";
import { useEffect } from "react";
import { sanityClient } from "../../../config/sanity";

import Layout from "../../components/layout/Layout";
import Gallery from "../../components/photography/Gallery";
import Landing from "../../components/photography/Landing";
import PhotoBlog from "../../components/photography/PhotoBlog";

const photoBlogQuery = `*[_type == "photoBlog"]|order( publishedAt desc)
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
  // useEffect(() => {
  //   new Rellax(".parallex", {
  //     speed: -7,
  //     center: true,
  //     wrapper: null,
  //     round: true,
  //     vertical: true,
  //     horizontal: false,
  //   });
  // }, []);

  return (
    <>
      <Head>
        <title>Photography - thelocalfeet</title>
        <meta
          name="description"
          content="Photography can be a speaker of an introvert soul. Check out thelocalfeet's photo section and don't forget to follow on social sites."
        />
        <meta
          name="keywords"
          content="travel websites, travel sites, thelocalfeet, travel, travel blog, explore,  places to visit, photography, travel photography "
        />
        <meta property="og:title" content="Photography - thelocalfeet" />

        <meta
          property="og:description"
          content="Photography can be a speaker of an introvert soul. Check out thelocalfeet's photo section and don't forget to follow on social sites."
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}/photography`}
        />
        <meta property="og:image" content="/assets/seo/photography.jpeg" />
      </Head>

      <Layout>
        <Landing />
        {blog.length > 0 && <PhotoBlog data={blog} />}
        <Gallery data={gallery} />
      </Layout>
    </>
  );
}

export default index;
