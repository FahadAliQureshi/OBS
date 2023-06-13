/** @format */

import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.scss";
import Careercard from "../../components/careercard";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";
import ErrorBoundary from "../../components/ErrorBoundary";
import Blur from "../../components/blur";
import { motion } from "framer-motion";
import error from "../../public/err.png";
import Image from "next/image";
const reactLogo = require("../../public/reactLogo.png");

function Careers() {
  const [job, setJob] = useState([]);
  const [show, setShow] = useState("");
  const domain = "https://globaltechnologia.org/webAdmin/";

  const [isHovered, setIsHovered] = useState(-1);

  const handleMouseEnter = (cardIndex) => {
    setIsHovered(cardIndex);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://globaltechnologia.org/webAdmin/public/index.php/api/jobshow")
      .then((res) => {
        setIsLoading(true);
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((res) => {
        console.log("&&&&&&&&&&&&&", res);
        if (res?.length > 0) {
          const job = res;
          setJob(job);
          setIsLoading(false);
        } else {
          return;
        }
      });
    setTimeout(() => {
      console.log("2222222222222222222");
      setIsLoading(false);
    }, 2000);
    console.log("EEEEEE", job);
    if (job.length != 0) {
      for (var i = 0; i < job.length; i++) {
        console.log("pain", job[i].id);
      }
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            },
          }}
        >
          <Blur />
        </motion.div>
      ) : job.length != 0 ? (
        <ErrorBoundary>
          <Header color="#000000" />
          <div className={styles.wrapper}>
            <div className={styles.career}>
              <p className={styles.cayh}>Careers at OBS Technologia</p>
              <div className={styles.line}></div>
              <p className={styles.cabh}>
                We are always looking out for Talented Individuals.<br></br>{" "}
                Check out our recent job openings!
              </p>
              <div
                style={{
                  width: "111%",
                  background: "#FAFAFA",
                  display: "flex",
                  justifyContent: "center",
                  padding: "30px 20px",
                  margin: "10px 0px",
                }}
              >
                <div style={{ width: "70%", display: "flex", gap: "4%" }}>
                  {job?.map((jobc, index) => {
                    console.log("okkkkkkkkkkkkkk", jobc);
                    return (
                  //yhn say


                      // <>
                      //   {" "}
                      //   {jobc.title == show ? (
                      //     <motion.div
                      //       layout
                      //       transition={{
                      //         layout: { duration: 0.4, type: "spring" },
                      //       }}
                      //       onClick={() => setShow("")}
                      //       className={styles.cd_card}
                      //     >
                      //       <figure className={styles.cardb}>
                      //         <Image
                      //           loader={() => {
                      //             return domain + jobc.url;
                      //           }}
                      //           src={domain + jobc.url}
                      //           alt="member"
                      //           layout="fill"
                      //           objectFit="cover"
                      //           priority
                      //           className={styles.cardimg}
                      //         />
                      //       </figure>{" "}
                      //       {/* <motion.div Layout className={show ? styles.c_card : styles.cd_card}> */}
                      //       <Link
                      //         href={{
                      //           pathname: `/careers/${jobc.domain}`,
                      //           query: { id: jobc.id },
                      //         }}
                      //       >
                      //         <motion.div className={styles.tab2}>
                      //           <motion.p
                      //             layout="position"
                      //             className={styles.horizontal}
                      //           >
                      //             {/* <motion.p className={show ? styles.vertical : styles.horizontal}> */}
                      //             {jobc.title}
                      //           </motion.p>

                      //           <Link
                      //             href={{
                      //               pathname: `/careers/${jobc.domain}`,
                      //               query: { id: jobc.id },
                      //             }}
                      //           >
                      //             <motion.div
                      //               className={styles.arrow2}
                      //               layout="position"
                      //               whileHover={{
                      //                 scale: 0.6,
                      //                 transition: { duration: 0.7 },
                      //               }}
                      //             >
                      //               <BsArrowUpCircleFill />
                      //             </motion.div>
                      //           </Link>
                      //         </motion.div>
                      //       </Link>
                      //     </motion.div>
                      //   ) : (
                      //     <motion.div
                      //       layout
                      //       transition={{
                      //         layout: { duration: 0.4, type: "spring" },
                      //       }}
                      //       onClick={() => setShow(jobc.title)}
                      //       className={styles.c_card}
                      //       style={{ backgroundColor: "black !important" }}
                      //     >
                      //       <figure className={styles.cardb}>
                      //         <Image
                      //           loader={() => {
                      //             return domain + jobc.url;
                      //           }}
                      //           src={domain + jobc.url}
                      //           alt="member"
                      //           layout="fill"
                      //           objectFit="cover"
                      //           priority
                      //           className={styles.barimg}
                      //         />
                      //       </figure>{" "}
                      //       {/* <motion.div Layout className={show ? styles.c_card : styles.cd_card}> */}
                      //       <motion.div className={styles.tab}>
                      //         <motion.p
                      //           layout="position"
                      //           className={styles.vertical}
                      //         >
                      //           {/* <motion.p className={show ? styles.vertical : styles.horizontal}> */}
                      //           {jobc.title}
                      //         </motion.p>

                      //         <motion.div
                      //           className={styles.arrow}
                      //           layout="position"
                      //           whileHover={{
                      //             scale: 0.6,
                      //             transition: { duration: 0.7 },
                      //           }}
                      //         >
                      //           <BsArrowUpCircleFill />
                      //         </motion.div>
                      //       </motion.div>
                      //     </motion.div>
                      //   )}
                      // </>


                      //yhn tk
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            filter: isHovered === index ? "brightness(70%)" : "none",
                          }}
                          onMouseOver={() => {
                            handleMouseEnter(index);
                          }}
                          onMouseOut={handleMouseLeave}
                        >
          <Link
            href={{
              pathname: "/careers/forum",
           // the data
            }}
          >
                          <div style={{ display: "flex" }}>
                            {isHovered == index && (
                               <button
                                style={{
                                  display: "flex",
                                  color: "#000000",
                                  background: "#FFD400",
                                  position: "absolute",
                                  width: "70%",
                                  height: "15%",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginLeft: "14.3%",
                                  marginTop: "50%",
                                  borderRadius: "51px",
                                  fontSize: "17px",
                                  fontWeight: "bold",
                                  visibility: isHovered === index ? "visible" : "hidden",
                                  zIndex: 999,
                                  border: "1px solid #F4F4F4",
                                }}
                                onClick={()=>{}}
                              >
                               
                                Apply Now
                               
                                </button>
                            )}
                          </div>
                          </Link>

                          <div
                            style={{
                              background: "#FFD400",
                              fontFamily: "Montserrat",
                              borderRadius: "6px 6px 0px 0px",
                              display:"flex",
                              justifyContent:"center",
                              alignContent:"center",
                              alignItems:"center",
                            }}
                          >
                            {/* <img src={domain + "public/" + jobc.image} alt="" /> */}

                            {/* <img src={reactLogo} alt="" style={{height: 20, width: 20}} /> */}
                            <img style={{ height: "110%",padding:"10px", width: "65%" }} src={"../../reactLogo.png"} alt="" />
                            {/* <div style={{ background: "#0D0D13", color:"white", padding:"0% 10% 10% 5%" }}>
                          <span style={{fontSize:"10px"}}>
                              OBS Technologia is one of the fastest-growing IT
                              companies providing various solutions and services
                              across industries
                            </span>
                          </div> */}
                          </div>
                          <div
                            style={{
                              background: "#0D0D13",
                              color: "white",
                              display: "flex",
                              // height:"100%",
                              borderRadius: "0 0 6px 6px",
                              padding: "20% 10% 20% 7%",
                              flexDirection: "column",
                             minHeight:"195px",
                             justifyContent:"center",
                             alignItems:"center"
                            }}
                          >
                            {" "}
                            <h1 style={{ fontSize: "15px" }}>
                              {/* React Native Developer */}
                              {jobc.title}
                            </h1>
                            <span style={{ fontSize: "10px" }}>
                              OBS Technologia is one of the fastest-growing IT
                              companies providing various solutions and services
                              across industries
                            </span>
                          </div>
                        </div>
                      </>
                    );
                    // return <Careercard data={jobc} key={index} index={index}/>;
                  })}
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </ErrorBoundary>
      ) : (
        <>
          <Header />
          <figure className={styles.center}>
            <Image src={error} alt="web" width={450} height={340} />
          </figure>
        </>
      )}
    </>
  );
}

export default Careers;
