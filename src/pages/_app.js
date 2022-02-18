import Head from "next/head";
import Router from "next/router";
import { useState, useEffect } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   Router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [Router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="thelocalfeet" />
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content="thelocalfeet" />
        <meta property="og:image:width" content="100" />
        <meta property="og:image:height" content="200" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}`}
        />
        {/* <link rel="icon" href="/image/favicon.ico" /> */}
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
