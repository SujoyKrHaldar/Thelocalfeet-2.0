import { sanityClient } from "../../config/sanity";

import Seo from "../components/Seo";
import Navbar from "../components/layout/Navbar";
import ComingSoon from "../components/design/template/ComingSoon";

const seoQuery = `*[_type == "seo" && page=="Travel"][0]
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

  return {
    props: { seo },
    revalidate: 1,
  };
};

function travel({ seo }) {
  return (
    <>
      <Seo data={seo} />
      <Navbar />
      <ComingSoon asset="/assets/coming-soon.jpeg" />
    </>
  );
}

export default travel;
