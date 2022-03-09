import Rellax from "rellax";
import { useEffect } from "react";
import { sanityClient, urlFor } from "../../config/sanity";

import Seo from "../components/seo";
import Blog from "../components/home/Blog";
import Shop from "../components/home/Shop";
import About from "../components/home/About";
import JoinUs from "../components/home/JoinUs";
import Layout from "../components/layout/Layout";
import Landing from "../components/home/Landing";
import PhotoBlog from "../components/home/PhotoBlog";
import Achievement from "../components/home/Achievement";
import PhotographyTemplate from "../components/design/template/PhotographyTemplate";

const blogQuery = `*[_type == "blog"]|order( publishedAt desc)  
                      {
                        'id':_id, 
                        publishedAt, 
                        title, 
                        subtitle, 
                        mainImage,
                        'slug':slug.current, 
                        'country':country->{name}
                      }`;

const photoBlogQuery = `*[_type == "photoBlog"]|order( publishedAt desc) 
                      {
                        "id":_id, 
                        publishedAt,
                        title, 
                        subtitle, 
                        mainImage,
                        "slug":slug.current
                      }`;

const productsQuery = `*[_type == "shop"]|order(_createdAt desc)
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

const seoQuery = `*[_type == "seo" && page=="Home"][0]
                  {
                    title,
                    description,
                    keywords,
                    url,
                    ogImage,
                    "alt":ogImage.ogAlt
                  }`;

export const getStaticProps = async () => {
  const seo = await sanityClient.fetch(seoQuery);
  const blog = await sanityClient.fetch(blogQuery);
  const offer = await sanityClient.fetch(offerQuery);
  const products = await sanityClient.fetch(productsQuery);
  const photoBlog = await sanityClient.fetch(photoBlogQuery);

  return {
    props: { seo, blog, photoBlog, products, offer },
    revalidate: 1,
  };
};

export default function Home({ seo, blog, photoBlog, products, offer }) {
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
      <Seo data={seo} />
      <Layout>
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
        {/* <Achievement /> */}
        <JoinUs />
      </Layout>
    </>
  );
}
