import App from "../../components/shop/App";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
import { sanityClient } from "../../../sanity";

const productsQuery = `*[_type == "shop"]|order(_createdAt desc)
                        {
                          "id":_id, 
                          name, 
                          price, 
                          photo, 
                          category->{name}, 
                          offer, 
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
  const data = await sanityClient.fetch(productsQuery);
  const offer = await sanityClient.fetch(offerQuery);
  return {
    props: { data, offer },
    revalidate: 1,
  };
};

const index = ({ data, offer }) => {
  return (
    <>
      <Head>
        <title>thelocalfeet - Shop</title>
      </Head>

      <Layout>
        <App data={data} offer={offer} />
      </Layout>
    </>
  );
};

export default index;
