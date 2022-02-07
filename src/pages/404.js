import Head from "next/head";
import ErrorLanding from "../components/design/template/ErrorLanding";
import CustomNavbar from "../components/layout/CustomNavbar";

function pageNotFound() {
  return (
    <>
      <Head>
        <title>Page not found - Go back</title>
        <meta name="description" content="This page is a myth!" />
      </Head>

      <CustomNavbar />
      <ErrorLanding />
    </>
  );
}

export default pageNotFound;
