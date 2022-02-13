import Head from "next/head";
import { sanityClient, urlFor } from "../../../sanity";
import CustomNavbar from "../../components/layout/CustomNavbar";
import Footer from "../../components/layout/Footer";
import Construct from "../../components/shop/Construct";

const allProductsQuery = `*[_type == "shop" && defined(slug.current)][].slug.current`;

const productsQuery = `*[_type == "shop" && slug.current == $slug][0]
                      {
                        "id":_id, 
                        name,
                        category->{name},
                        description,
                        caption,
                        price, 
                        preview, 
                        photo, 
                        coverPhoto,
                        size, 
                        status, 
                        preBooking,
                        offer, 
                        offerName->{name}, 
                        discountPrice,
                        "slug":slug.current 
                      }`;

const otherProductQuery = `*[_type == "shop" && slug.current != $slug]
                        {
                          "id":_id, 
                          name, 
                          price, 
                          photo, 
                          category->{name}, 
                          offer, 
                          discountPrice,
                          status,
                          "slug":slug.current 
                        }`;

const offerQuery = `*[_type == "offer" && status == true][0]
                  { 
                    status,
                    discount,
                    specialMsg
                  }`;

export async function getServerSideProps({ query: { slug } }) {
  const offer = await sanityClient.fetch(offerQuery);
  const evt = await sanityClient.fetch(productsQuery, {
    slug,
  });

  const others = await sanityClient.fetch(otherProductQuery, {
    slug,
  });

  if (!evt) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }

  return {
    props: {
      evt,
      offer,
      others,
      fallback: true,
      revalidate: 1,
    },
  };
}

// export async function getStaticPaths() {
//   const response = await sanityClient.fetch(allProductsQuery);

//   const paths = response.map((slug) => ({
//     params: { slug },
//   }));

//   return {
//     paths: paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const offer = await sanityClient.fetch(offerQuery);
//   const evt = await sanityClient.fetch(productsQuery, {
//     slug: params.slug,
//   });

//   const others = await sanityClient.fetch(otherProductQuery, {
//     slug: params.slug,
//   });

//   if (!evt) {
//     return {
//       redirect: {
//         destination: "/404",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       evt,
//       offer,
//       others,
//     },
//     revalidate: 1,
//   };
// }

export default function products({ evt, offer, others }) {
  return (
    <>
      <Head>
        <title> Shop thelocalfeet - {evt.name}</title>
        <meta name="description" content={evt.caption} />
        <meta property="og:title" content={`Shop thelocalfeet - ${evt.name}`} />
        <meta property="og:description" content={evt.name} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}/store/${evt.slug}`}
        />
        <meta property="og:image" content={`${urlFor(evt.photo).url()}`} />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>

      <CustomNavbar />
      <Construct data={evt} offer={offer} others={others} />
      <Footer />
    </>
  );
}
