import Head from "next/head";
import Rellax from "rellax";
import { useEffect } from "react";
import { sanityClient } from "../../../config/sanity";

import Body from "../../components/explore/Body";
import Layout from "../../components/layout/Layout";
import Landing from "../../components/explore/Landing";
import ComingSoon from "../../components/design/template/ComingSoon";

const blogQuery = `*[_type == "blog"]|order( publishedAt desc) 
                  {
                    'id':_id, 
                    publishedAt, 
                    'country':country->{name}, 
                    mainImage,
                    'slug':slug.current, 
                    title, 
                    subtitle 
                  }`;

const countryQuery = `*[_type == "country"]
                      { 
                        "id":_id, 
                        coverImage, 
                        name 
                      }`;

const photoBlogQuery = `*[_type == "photoBlog"][0..1]|order(publishedAt desc)
                        {
                          "id":_id, 
                          title, 
                          subtitle, 
                          "slug":slug.current, 
                          mainImage
                        }`;

export const getStaticProps = async () => {
  const blog = await sanityClient.fetch(blogQuery);
  const country = await sanityClient.fetch(countryQuery);
  const photoBlog = await sanityClient.fetch(photoBlogQuery);

  return {
    props: { country, blog, photoBlog },
    revalidate: 1,
  };
};

function index({ country, blog, photoBlog }) {
  useEffect(() => {
    new Rellax(".parallex", {
      speed: -7,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Explore - thelocalfeet</title>
        <meta
          name="description"
          content="Check out thelocalfeet's journey, adventures, stories. Read our journals and discover the world with us. Lets make your best trip Ever."
        />
        <meta
          name="keywords"
          content="travel websites, travel sites, thelocalfeet, travel, travel blog, explore,  places to visit, places to go, best at travel"
        />
        <meta property="og:title" content="Explore - thelocalfeet" />
        <meta
          property="og:description"
          content="Check out thelocalfeet's journey, adventures, stories. Read our journals and discover the world with us. Lets make your best trip Ever. Follow thelocalfeet, conceptualized by Mayuri & Shubha in 2018 to get more insight into sustainable travel."
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}/explore`}
        />
        <meta property="og:image" content="/assets/seo/explore.jpeg" />
      </Head>

      <Layout>
        {blog.length > 0 ? (
          <>
            <Landing />
            <Body country={country} blog={blog} album={photoBlog} />
          </>
        ) : (
          <ComingSoon asset="/assets/explore-landing.jpeg" />
        )}
      </Layout>
    </>
  );
}

export default index;
