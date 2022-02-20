import Head from "next/head";
import { sanityClient } from "../../config/sanity";

import Extra from "../components/about/Extra";
import WhyUs from "../components/about/WhyUs";
import Layout from "../components/layout/Layout";
import Landing from "../components/about/Landing";
import Contact from "../components/design/form/Contact";
import OurJourney from "../components/about/OurJourney";
import AboutTravel from "../components/about/AboutTravel";

const blogQuery = `*[_type == "blog"][0..3]|order( publishedAt desc) 
                      {
                        'id':_id, 
                        publishedAt, 
                        'country':country->{name}, 
                        mainImage,
                        'slug':slug.current, 
                        title, 
                        subtitle 
                      }`;

const photoBlogQuery = `*[_type == "photoBlog"][0..3]|order( publishedAt desc)
                      {
                        "id":_id, 
                        title, 
                        subtitle, 
                        "slug":slug.current, 
                        mainImage
                      }`;

export const getStaticProps = async () => {
  const blog = await sanityClient.fetch(blogQuery);
  const photoBlog = await sanityClient.fetch(photoBlogQuery);

  return {
    props: { blog, photoBlog },
    revalidate: 1,
  };
};

function about({ blog, photoBlog }) {
  return (
    <>
      <Head>
        <title>Who we are - thelocalfeet</title>
        <meta
          name="description"
          content="Being a tourist is fine, vacations are great. But, have you ever thought to experience a place as local people do? Read more."
        />
        <meta
          name="keywords"
          content="travel websites, travel sites, thelocalfeet, travel, travel blog, explore,  places to visit, places to go, best at travel"
        />
        <meta property="og:title" content="Who we are - thelocalfeet" />
        <meta property="og:site_name" content="Thelocalfeet - About us" />
        <meta
          property="og:description"
          content="Being a tourist is fine, vacations are great. But, have you ever thought to experience a place as local people do? Read more."
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}/about`}
        />
        <meta property="og:image" content="/assets/seo/about-us.jpg" />
      </Head>

      <Layout>
        <Landing />
        <OurJourney />
        <WhyUs />
        <AboutTravel />
        <Extra blog={blog} album={photoBlog} />
        <Contact />
      </Layout>
    </>
  );
}

export default about;
