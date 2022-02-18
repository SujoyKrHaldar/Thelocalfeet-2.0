import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import ComingSoon from "../components/design/template/ComingSoon";

function travel() {
  return (
    <>
      <Head>
        <title>Our travel stories - Coming soon</title>
        <meta
          name="description"
          content="Our travel story will coming soon..."
        />
      </Head>

      <Navbar />
      <ComingSoon asset="/assets/coming-soon.jpeg" />
    </>
  );
}

export default travel;
