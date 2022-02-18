import Head from "next/head";

import Layout from "../components/layout/Layout";
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

      <Layout>
        <ComingSoon asset="/assets/coming-soon.jpeg" />
      </Layout>
    </>
  );
}

export default travel;
