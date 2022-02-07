import Head from "next/head";
import { sanityClient } from "../../../sanity";
import CustomNavbar from "../../components/layout/CustomNavbar";
import Footer from "../../components/layout/Footer";
import List from "../../components/photography/album/List";

const photoBlogQuery = `*[_type == "photoBlog"]|order( publishedAt desc)
                      {
                        "id":_id, 
                        title, 
                        subtitle, 
                        "slug":slug.current, 
                        mainImage
                      }`;

export const getStaticProps = async () => {
  const blog = await sanityClient.fetch(photoBlogQuery);

  return {
    props: {
      blog,
    },
    revalidate: 1,
  };
};

function photoBlog({ blog }) {
  return (
    <>
      <Head>
        <title>Albums - thelocalfeet</title>
      </Head>

      <CustomNavbar />
      <List blog={blog} />
      <Footer />
    </>
  );
}

export default photoBlog;
