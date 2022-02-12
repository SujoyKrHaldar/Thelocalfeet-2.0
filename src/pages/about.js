import Head from "next/head";
import AboutTravel from "../components/about/AboutTravel";
import Landing from "../components/about/Landing";
import OurJourney from "../components/about/OurJourney";
import WhyUs from "../components/about/WhyUs";
import ContactForm from "../components/design/form/Contact";
import Layout from "../components/layout/Layout";
import PhotographyTemplate from "../components/design/template/PhotographyTemplate";

function about() {
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
        {/* <meta property="og:image" content="/image/about/about-landing.jpeg" /> */}
      </Head>

      <Layout mainColor="#fff" mainBackground="transparent" logo="light">
        <Landing />
        <OurJourney />
        <WhyUs />
        <AboutTravel />
        {/* <PhotographyTemplate /> */}
        <ContactForm />
      </Layout>
    </>
  );
}

export default about;
