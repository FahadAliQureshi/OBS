import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import LoadingSpinner from "../components/spinner";
import image from '../public/randox1.png'
import image2 from '../public/randox2.png'
import image3 from '../public/randox3.png'
import image4 from '../public/randox4.png'
import image5 from '../public/randox5.png'
import image6 from '../public/randox6.png'
import randi from '../public/randi.png'
import image7 from '../public/randox7.png'
import image8 from '../public/randox8.png'
import image9 from '../public/randox9.png'
import Footer from "../components/footer";
import error from "../public/err.png";
import Blur from "../components/blur";
function Randox() {
  const [discription, setDiscription] = useState([]);
  const [poster, setPoster] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const domain = "https://globaltechnologia.org/webAdmin/";
  // const poster = [];
  const color = "#000000"
  useEffect(() => {
    // setIsLoading(true);
    // fetch("https://globaltechnologia.org/webAdmin/api/portshow")
    //   .then((res) => {
    //     setIsLoading(true)
    //     return res.json();
    //   })
    //   .then((res) => {
    //     const heading = res;
        
    //     // setPoster(heading.splice(-3));
    //     console.log("oh bhains" , heading)
    //     // heading.splice(-1);
    //     setDiscription(heading);
    //     console.log("oh bhains" , discription)

    //     // setIsLoading(false);

    //   });
      setTimeout(()=> {
        // console.log("2222222222222222222")
        setIsLoading(false)
        // console.log("first",isLoading)
      }, 1000)
  }, []);
  console.log("first",isLoading)
  return (
    <>
     <Head>
        <title>Randox</title>
        <meta name="viewport" content="width=device-width" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple.png"/>
	<link rel="icon" type="image/png" sizes="32x32" href="../public/favicon32.png"/>
	<link rel="icon" type="image/png" sizes="16x16" href="../public/favicon16.png"/>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png"/>
	<link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png"/>
	<link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png"/>
	 <link rel="manifest" href="../public/site.webmanifest"/>
	<link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5"/>
	<meta name="msapplication-TileColor" content="#da532c"/>
	<meta name="theme-color" content="#ffffff"/> */}
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
                }}><Blur/></motion.div>  :

                // discription.length != 0 ? 
     <motion.div
        className={styles.container}
        variants={{
          hidden: { scale: 0.999999, opacity: 0.6 },
          visible: {
            scale: 1,
            opacity: 0.5,
            transition: {
              delay: 2,
            },
          },
        }}
      >
        <Header color={color} />
        <div className={styles.randox_wrapper}>
          <div className={styles.sectionr}>
                   <figure className={styles.image}>
            <Image
              src={image}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <h2 className={styles.ph}>Randox | Certifly</h2>
          <p className={styles.content}>Randox is committed to enhancing healthcare through cutting-edge diagnostic technology. We worked on the Randox iOS app, Web app, customer support, IT support, and web portal which allowed us to create certificates for both national and international passengers.</p>
          </div>
        <div className={styles.sectionr2}>
             
              <figure className={styles.left}>
            <Image
              src={image2}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
            
              <div className={styles.right}>
              <h2 className={styles.ph}>Our Work</h2>
          <p className={styles.content}>Our team of experts worked around the clock to make this all happen, from creating the mobile app interface to creating the core functionality, from handling customer service to maintaining the data of millions of users.</p>
          <p className={styles.content}>We worked on the Randox iOS app, Web app, customer support, IT support, and web portal which allowed us to create certificates for both national and international passengers.</p>
              </div>
          </div>
       
          <div className={styles.sectionr3}>
              <figure className={styles.left}>
            <Image
              src={image3}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
              <div className={styles.right}>
              <h2 className={styles.ph}>How Randox App works?</h2>
          <p className={styles.content}>Randox is a user-friendly, easy-to-use mobile app where users can start with creating their profiles.</p>
          <ul>
            <li>After signing up, users can then scan their passports. </li>
            <li>This passport scanning helps to achieve desired information like name, passport number, etc. </li>
            <li>After completing the registration process, users have a choice to create their family profiles within the same profile where they can upload information regarding their siblings, parents, spouse, etc. </li>
            <li>This app enables users to take the covid test by Scanning the QR on the device. </li>
            <li>Later on, they can submit the device after taking the test to get the covid test certificate</li>
          </ul>
              </div>
          </div>
 
          <div className={styles.sectionr4}>
              <div className={styles.left}>
              <figure className={styles.ham}>
            <Image
              src={image4}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
              </div>
              <div className={styles.right}>
              <h2 className={styles.ph}>UI Design</h2>
          <p className={styles.content}>User flow and structure are essential elements when it comes to app creation. Our target audience was diverse, hence creating a perfect and trustworthy user experience was a challenge for our designer.</p>
              </div>
          </div>  

          <div className={styles.sectionr5}>
             <h2 className={styles.hr2}>Aesthetically Pleasing and Easy to use UI</h2>
             <figure className={styles.bani}>
            <Image
              src={image5}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <h2 className={styles.ph}>Randox web App</h2>
          <p className={styles.content}>Web app provided the same functionality as mobile application. After providing all the necessary information user can scan their device and after verification they can view their certificates. Covid Certificates were also emailed to all the users in pdf format on their provided email accounts. </p>
          <figure className={styles.randox6}>
            <Image
              src={image6}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
         <div className={styles.sectionr6}>
             
              <figure className={styles.image}>
            <Image
              src={image7}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
        
         
              <div className={styles.right}>
              <h2 className={styles.ph}>Customer support</h2>
          <p className={styles.content}>We provided customers with an unrivalled customer support service. In case of any problem, customer support team was available 24/7 to help the users. </p>
          <p className={styles.content}>From this web based customer support portal, one can search, edit and download user information by providing necessary details.</p>
              </div>
          </div>  
          <div className={styles.sectionr7}>
          <figure className={styles.randox8}>
            <Image
              src={image8}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
          <figure className={styles.randi}>
            <Image
              src={randi}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
          </div>  
           <div className={styles.sectionr8}>
              
              <figure className={styles.image}>
            <Image
              src={image9}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
             
              <div className={styles.right}>
              <h2 className={styles.ph}>IT Support</h2>
          <p className={styles.content}>We also provided a team of highly trained specialist 
individuals to deal with any complicated issues that users can have. IT Support team helped with advance technical problems.</p>
              </div>
          </div>  
          </div>  

          {/* <div className={styles.phl}></div> */}
          {/* <p className={styles.text}>Take a look at some of our best work!</p> */}
          {/* {   discription.map((data, index) => {
            if (data.id_assign % 2 != 0) {
              return (<>
             
             <div key={index} className={styles.c1}>
                  <motion.div
                    className={styles.conl}
                    whileHover={{
                      scale: 0.9,
                      transition: { duration: 0.1 },
                      padding: 20,
                      border: `1px solid #ffd400`,
                      boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                      borderRadius: 10,
                    }}
                  >
                    <h3>{data.heading}</h3>
                    <p>{data.discription}</p>
                  </motion.div>
                  <motion.div
                    className={styles.conr}
                    whileHover={{
                      scale: 0.9,
                      transition: { duration: 0.1 },
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    <figure>
                      <Image
                        loader={() => {
                          return domain + data.url;
                        }}
                        src={domain + data.url}
                        alt="OBS TECHNOLOGIA"
                        width={data.width}
                        height={data.height}
                      />
                    </figure>
                  </motion.div>
                </div>
                </>
              );
            } else {
              return (<>
                          <div key={index} className={styles.c2}>
                  <motion.div
                    className={styles.conl}
                    whileHover={{
                      scale: 0.9,
                      transition: { duration: 0.1 },
                      padding: 20,
                      border: `1px solid #ffd400`,
                      boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                      borderRadius: 10,
                    }}
                  >
                    <h3>{data.heading}</h3>
                    <p>{data.discription}</p>
                  </motion.div>
                  <motion.div
                    className={styles.conr}
                    whileHover={{
                      scale: 0.9,
                      transition: { duration: 0.1 },
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    <figure>
                      <Image
                        loader={() => {
                          return domain + data.url;
                        }}
                        src={domain + data.url}
                        alt="OBS TECHNOLOGIA"
                        width={data.width}
                        height={data.height}
                      />
                    </figure>
                  </motion.div>
                </div>
                 </>
              );
            }
            } ) } */}

          {/* <h2
            className={styles.ph}
            style={{ color: "#FFD400", padding: "150px 0px 0px 0px " }}
          >
            GRAPHIC DESIGN PROJECTS
          </h2>
          <div className={styles.phl}></div>
          <p className={styles.text}>Take a look at some of our Design Work!</p>

          <div className={styles.pwork}>
            {poster.map((data, index) => {
              return (
               <>
                  {" "}
                  <figure key={index}>
                    <Image
                      loader={() => {
                        return domain + data.url;
                      }}
                      src={domain + data.url}
                      alt="OBS TECHNOLOGIA"
                      width={data.width}
                      height={data.height}
                    />
                  </figure>
                  <h3>{data.heading}</h3>
                </>
              );
            })}
          </div> */}

        </div>
        <Footer />
      </motion.div>
      // :<><Header/>
      //                  <figure className={styles.center}>
      //                  <Image src={error} alt="web" width={450} height={340} />
      //               </figure>
      // </>
      
      
      }
    </>
  );
}

export default Randox;
