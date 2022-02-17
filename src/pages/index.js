import Head from "next/head";
import Rellax from "rellax";
import { useEffect } from "react";
import { sanityClient } from "../../sanity";
import Landing from "../components/home/Landing";
import Layout from "../components/layout/Layout";
import About from "../components/home/About";
import Blog from "../components/home/Blog";
import Achievement from "../components/home/Achievement";
import PhotoBlog from "../components/home/PhotoBlog";
import Shop from "../components/home/Shop";
import PhotographyTemplate from "../components/design/template/PhotographyTemplate";
import JoinUs from "../components/home/JoinUs";

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

const productsQuery = `*[_type == "shop"]|order(_createdAt desc)[0..5]
                      {
                        "id":_id, 
                        name, 
                        price, 
                        photo, 
                        offer, 
                        status,
                        discountPrice,
                        "slug":slug.current 
                      }`;

const offerQuery = `*[_type == "offer" && status == true][0]
                    { 
                      status,
                      discount,
                      specialMsg,
                      endingDate, 
                      startingDate
                    }`;

export const getStaticProps = async () => {
  const blog = await sanityClient.fetch(blogQuery);
  const photoBlog = await sanityClient.fetch(photoBlogQuery);
  const products = await sanityClient.fetch(productsQuery);
  const offer = await sanityClient.fetch(offerQuery);

  return {
    props: { blog, photoBlog, products, offer },
    revalidate: 1,
  };
};

export default function Home({ blog, photoBlog, products, offer }) {
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
        <title>Experience the journey of thelocalfeet</title>
        <meta
          name="description"
          content="You might not always fit in to experience the offbeat travel, but you must try😊. Follow thelocalfeet, conceptualized by Mayuri & Shubha in 2018 to get more insight into sustainable travel."
        />
        <meta
          name="keywords"
          content="travel websites, travel sites, thelocalfeet, travel, travel blog, explore,  places to visit, places to go, best at travel"
        />
        <meta
          property="og:title"
          content="Experience the journey of thelocalfeet"
        />
        <meta
          property="og:description"
          content="You might not always fit in to experience the offbeat travel, but you must try😊. Follow thelocalfeet, conceptualized by Mayuri & Shubha in 2018 to get more insight into sustainable travel."
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}`}
        />
        {/* <meta property="og:image" content="/image/home/home-middle.jpg" /> */}
      </Head>

      <Layout mainColor="#fff">
        <Landing />
        <About />
        {blog.length > 0 && <Blog data={blog} />}
        <PhotographyTemplate
          img_position="bottom"
          img_url="/assets/home-landing.jpg"
          caption_one="The pursuit of excellent culmination in craftsmanship, You would
            rather die for !"
          caption_two="Made in India, at Nagaur Fort also known as Ahichhatragarh Fort"
        />
        {photoBlog.length > 0 && <PhotoBlog data={photoBlog} />}
        {products.length > 0 && <Shop data={products} offer={offer} />}
        <Achievement />
        <JoinUs />
      </Layout>
    </>
  );
}
