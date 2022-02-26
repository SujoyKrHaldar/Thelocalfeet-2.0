import Rellax from "rellax";
import Head from "next/head";
import { useEffect } from "react";
import { sanityClient, urlFor } from "../../../config/sanity";

import CustomLayout from "../../components/layout/CustomLayout";
import Gallery from "../../components/photography/gallery/Gallery";
import Landing from "../../components/photography/gallery/Landing";

const photoBlogQuery = `*[_type == "photoBlog"]|order( publishedAt desc)
                      {
                        "id":_id, 
                        title, 
                        "slug":slug.current, 
                        mainImage
                      }`;

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
  const blog = await sanityClient.fetch(photoBlogQuery);

  return {
    props: {
      gallery,
      blog,
    },
    revalidate: 1,
  };
};

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Photography",
    url: "/photography",
  },
];

function gallery({ gallery, blog }) {
  const getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  };

  const random_item = getRandomItem(gallery);
  useEffect(() => {
    new Rellax(".parallex", {
      speed: -7,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);
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
        <meta property="og:image" content={urlFor(random_item.photo).url()} />
      </Head>

      <CustomLayout links={links} currPage="Gallery">
        <Landing item={random_item} />
        <Gallery
          data={gallery}
          reel_type={blog}
          links={links}
          currPage="Gallery"
        />
      </CustomLayout>
    </>
  );
}

export default gallery;
