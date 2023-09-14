import React from "react";
import Image from "next/image";
import web from "../public/web.png";
import gd from "../public/gd.png";
import ad from "../public/ad.png";
import marketing from "../public/marketing.png";
import seo from "../public/seo.png";
import os from "../public/os.png";
import styles from "../styles/Home.module.scss";
import circle from "../public/circle.png";
import mobiles from "../public/mobiles.png";
import phoneSmall from "../public/phoneSmall.png";
import smallDesktop from "../public/smallDesktop.png";
import seoImage from "../public/seoImage.png";
import aiImage from "../public/aiImage.png";
import graphicImage from "../public/graphicImage.png";
import cloudImageSahi from "../public/cloudImageSahi.png";
import { motion } from "framer-motion";
import { contains } from "jquery";
function Content() {
  return (
    <>
      <div className={styles.wrapper} id="services">
        <div className={styles.content}>
          <p className={styles.yh}
              style={{marginTop:"30px"}}
          >OUR SERVICES</p>
          <p className={styles.bh}>
            Our services are great for individuals, startups and enterprises
          </p>
          <div className={styles.layout}>
            <div className={styles.left}>
              <motion.div
                className={styles.box}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                  },
                }}
              >
                <figure
                  className={styles.bi}
                 
                >
                  <Image
                    src={phoneSmall}
                    alt="web"
                    width={35}
                    height={35}
                    objectFit={"contain"}
                  />
                </figure>
                <div className={styles.detail}>
                  <h4>App Development</h4>
                  <p>
                  We offer a full cycle of Android and iOS mobile application  design, integration, and management services.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={styles.box}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
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
                <motion.div
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: {
                        delay: 0.1,
                        duration: 2,
                      },
                    },
                  }}
                >
                  <figure
                    className={styles.bi}
                    whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                  >
                    <Image src={seoImage} alt="web"       width={35}
                    height={35}
                    objectFit={"contain"} />
                  </figure>
                </motion.div>

                <div className={styles.detail}>
                  <h4 className={styles.webd}>Marketing / SEO </h4>
                  <h4 className={styles.webm}>
                    {" "}
                    UI/UX <br></br> Graphic Design{" "}
                  </h4>
                  <p>
                    We offer a full cycle of Android & iOS mobile App design,
                    integration, & management services.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={styles.box}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
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
                <figure className={styles.bi}>
                  <Image src={aiImage} alt="web"       width={35}
                    height={35}
                    objectFit={"contain"}/>
                </figure>
                <div className={styles.detail}>
                  <h4>AI Based Services</h4>
                  <p>
                    Revolutionary software solutions powered by AI. We leverage
                    cutting-edge technology to deliver intelligent, scalable,
                    and personalized services for your business.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className={styles.center}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: "50px",
                transition: { duration: 0.1 },
              }}
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.1,
                    duration: 2,
                  },
                },
              }}
            >
              {" "}
              <figure className={styles.circle}>
                <Image src={circle} alt="circle" />
              </figure>
              <figure className={styles.mobile}>
                <Image src={mobiles} alt="mobile" width={619} height={860} />
              </figure>
            </motion.div>

            <div className={styles.right}>
              <motion.div
                className={styles.box}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
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
                <figure className={styles.bi}>
                  <Image src={smallDesktop} alt="web"       width={35}
                    height={35}
                    objectFit={"contain"} />
                </figure>

                <div className={styles.detail}>
                  <h4>Web Development</h4>
                  <p>
                    We provide web solutions including websites and web
                    applications.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={styles.box}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
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
                <figure className={styles.bi}>
                  <Image src={graphicImage} alt="web"       width={35}
                    height={35}
                    objectFit={"contain"} />
                </figure>
                <div className={styles.detail}>
                  <h4>Graphic Design | UI/UX</h4>
                  <p>
                    We focus on enhancing user experiences by designing
                    intuitive interfaces and seamless interactions for websites,
                    applications, and other digital platforms.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className={styles.box}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
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
                <figure className={styles.bi}>
                  <Image src={cloudImageSahi} alt="web"       width={35}
                    height={35}
                    objectFit={"contain"} />
                </figure>
                <div className={styles.detail}>
                  <h4>Cloud Infrastructure</h4>
                  <p>
                    Our team provides cloud infrastructure services to optimize
                    monthly cloud costs and maximum business growth.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
