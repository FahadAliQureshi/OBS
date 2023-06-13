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
import { motion } from "framer-motion";
function Content() {
  return (
    <>
      <div className={styles.wrapper} id="services">
        <div className={styles.content}>
          <p className={styles.yh}>OUR SERVICES</p>
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
                <figure className={styles.bi}>
                  <Image src={web} alt="web" width={72} height={72} />
                </figure>
                <div className={styles.detail}>
                  <h4>Web Development</h4>
                  <p>
                    Our team creates web solutions including websites & web
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
                    <Image src={gd} alt="web" width={72} height={72} />
                  </figure>
                </motion.div>

                <div className={styles.detail}>
                  <h4 className={styles.webd}>Graphic Design | UI/UX</h4>
                  <h4 className={styles.webm}> UI/UX <br></br>  Graphic Design </h4>
                  <p>
                    Without UI/UX an application is like a suit without a man.
                    We create visually appealing, digital interfaces that
                    attract and retain users.
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
                  <Image src={ad} alt="web" width={64.96} height={69.39} />
                </figure>
                <div className={styles.detail}>
                  <h4>App Development</h4>
                  <p>
                    We offer a full cycle of Android and iOS mobile application
                    design, integration, and management services.
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
            > <figure className={styles.circle}>
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
                  <Image src={marketing} alt="web" width={84} height={72} />
                </figure>

                <div className={styles.detail}>
                  <h4>Marketing</h4>
                  <p>
                    Want to sell a product? Our Experts provide PPC, SMM, SMO
                    services ensuring that we win the trust of Your Customers
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
                  <Image src={seo} alt="web" width={83} height={73.56} />
                </figure>
                <div className={styles.detail}>
                  <h4>SEO</h4>
                  <p>
                    We understand different elements and their working in Search
                    Engine Optimization. Hire us and turn the traffic into
                    customers
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
                  <Image src={os} alt="web" width={83} height={80} />
                </figure>
                <div className={styles.detail}>
                  <h4>Other Services</h4>
                  <p>
                    We can deliver a broad range of quality products and
                    solutions to meet your operational needs.
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
