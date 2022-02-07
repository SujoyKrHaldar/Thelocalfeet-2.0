import Head from "next/head";
import { sanityClient } from "../../../sanity";
import CustomNavbar from "../../components/layout/CustomNavbar";
import Footer from "../../components/layout/Footer";
import Gallery from "../../components/photography/gallery/Gallery";

const galleryQuery = `*[_type == "photography"]|order( publishedAt desc)
                    {
                      "id":_id, 
                      caption,
                      "Ilink":IsLink,
                      "Flink":FbLink, 
                      photo
                    }`;

export const getStaticProps = async () => {
  const gallery = await sanityClient.fetch(galleryQuery);

  return {
    props: {
      gallery,
    },
    revalidate: 1,
  };
};

function gallery({ gallery }) {
  return (
    <>
      <Head>
        <title>Gallery - thelocalfeet</title>
        <meta
          name="description"
          content="Photography can be a speaker of an introvert soul. Check out thelocalfeet's photo section and don't forget to follow on social sites."
        />
        <meta
          name="keywords"
          content="travel websites, travel sites, thelocalfeet, travel, travel blog, explore,  places to visit, photography, travel photography "
        />
        <meta property="og:title" content="Gallery - thelocalfeet" />

        <meta
          property="og:description"
          content="Photography can be a speaker of an introvert soul. Check out thelocalfeet's photo section and don't forget to follow on social sites."
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}/photography/gallery`}
        />
        {/* <meta property="og:image" content="/image/photography/landing2.jpeg" /> */}
      </Head>

      <CustomNavbar />
      <Gallery data={gallery} />
      <Footer />
    </>
  );
}

export default gallery;
