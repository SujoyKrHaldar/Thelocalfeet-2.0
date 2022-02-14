import Head from "next/head";
import Rellax from "rellax";
import { useEffect } from "react";
import { sanityClient } from "../../../sanity";
import Landing from "../../components/explore/Landing";
import Layout from "../../components/layout/Layout";
import Body from "../../components/explore/Body";

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

const countryQuery = `*[_type == "country"]|order( _createdAt asc)
                  { 
                    "id":_id, 
                    coverImage, 
                    name 
                  }`;

const photoBlogQuery = `*[_type == "photoBlog"][0]
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
        <title>Explore all Destinations - thelocalfeet</title>
        <meta
          name="description"
          content="Check out thelocalfeet's journey, adventures, stories. Read our journals and discover the world with us. Lets make your best trip Ever."
        />
        <meta
          name="keywords"
          content="travel websites, travel sites, thelocalfeet, travel, travel blog, explore,  places to visit, places to go, best at travel"
        />
        <meta
          property="og:title"
          content="Explore all Destinations - thelocalfeet"
        />
        <meta
          property="og:description"
          content="Check out thelocalfeet's journey, adventures, stories. Read our journals and discover the world with us. Lets make your best trip Ever. Follow thelocalfeet, conceptualized by Mayuri & Shubha in 2018 to get more insight into sustainable travel."
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}/explore`}
        />
        {/* <meta
          property="og:image"
          content="/image/explore/explore-landing.jpeg"
        /> */}
      </Head>

      <Layout mainColor="#fff" mainBackground="transparent" logo="light">
        <Landing />
        <Body country={country} blog={blog} album={photoBlog} />
      </Layout>
    </>
  );
}

export default index;
