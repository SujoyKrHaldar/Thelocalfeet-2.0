import Head from "next/head";
import { sanityClient } from "../../../config/sanity";

import List from "../../components/photography/album/List";
import CustomLayout from "../../components/layout/CustomLayout";

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

      <CustomLayout>
        <List blog={blog} />
      </CustomLayout>
    </>
  );
}

export default photoBlog;
