import "../styles/globals.css";
import "../styles/overrides.css";
import $ from "jquery"
import Head from "next/head";
// import { useState } from "react";
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
// const [element ,setElement] = useState("")
// The handler to smoothly scroll the element into view
const handExitComplete = () => {
  if (typeof window !== 'undefined') {
    // Get the hash from the url
    const hashId = window.location.hash;
    
    if (hashId) {
      // Use the hash to find the first element with that id
      const element = document.querySelector(hashId);
      console.log("bhosri",element)
      if (element) {
        // Smooth scroll to that elment
        console.log("bhosri",element)
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
        $([document.documentElement, document.body]).animate({
          scrollTop: $(hashId).offset().top
      }, 2000);
      }
    }else{
      // console.log("bhosri",element)

    }
  }
};
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple.png"/>
	<link rel="icon" type="image/png" sizes="32x32" href="../public/favicon32.png"/>
	<link rel="icon" type="image/png" sizes="16x16" href="../public/favicon16.png"/>
	<link rel="manifest" href="../public/site.webmanifest"/>
	<link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5"/>
	<meta name="msapplication-TileColor" content="#da532c"/>
	<meta name="theme-color" content="#ffffff"/> */}
        {/* <link rel="shortcut icon"href="../public/fav.png" /> */}
        {/* <link rel="icon" sizes="16x16" href="../public/favicon.png"/> */}

      </Head>
      <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
       <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
