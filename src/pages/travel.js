import Head from "next/head";
import ComingSoon from "../components/design/template/ComingSoon";
import Navbar from "../components/layout/Navbar";

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

      <Navbar mainColor="#fff" mainBackground="transparent" logo="light" />
      <ComingSoon />
    </>
  );
}

export default travel;
