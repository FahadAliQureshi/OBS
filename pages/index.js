import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Banner from "../components/banner";
import Header from "../components/header";
import Content from "../components/content";
import WhoAreWe from "../components/whoarewe";
import Portfolio from "../components/portfolio";
import Carousel from "../components/carousel";
import Ourteam from "../components/ourteam";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { motion } from "framer-motion";
// import banner from '../public/'
import Blur from "../components/blur";
import { useEffect,useState } from "react";

import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()
  useEffect(() => {
console.log("router",router)
  
    setTimeout( ()=>{setIsLoading(false)}, 1000)
  
  
  }, [])
  
  return (
    <>
      <Head>
        <title>OBS TECHNOLOGIA</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple.png"/>
	<link rel="icon" type="image/png" sizes="32x32" href="../public/favicon32.png"/>
	<link rel="icon" type="image/png" sizes="16x16" href="../public/favicon16.png"/>
	{/* <link rel="manifest" href="../public/site.webmanifest"/> */}
	<link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5"/>
	<meta name="msapplication-TileColor" content="#da532c"/>
	<meta name="theme-color" content="#ffffff"/>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      { isLoading ? <motion.div  variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.1,
                    },
                  },
                }}> <Blur  /></motion.div>
      :<motion.div
        className={styles.container}
        variants={{
          hidden: { scale: 0.999999, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <Header />
        <Banner />
        <Content id="services"/>
        <WhoAreWe />
        <Portfolio />
        <Carousel />
        <Ourteam />
        <Contact id="contact"/>
        <Footer />
        {/* <Testimonials /> */}
      </motion.div>}
    </>
  );
}
