import React from "react";
import Image from "next/image";
import portfolio from "../public/portfolio.png";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
function Portfolio() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.portfolio}>
          <motion.div
            className={styles.pleft}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 0.9, transition: { duration: 0.1 } }}
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
            <Image src={portfolio} width={800} alt="portfolio " height={835} objectFit="contain"/>
          </motion.div>
          <div className={styles.pright}>
            <h4>OUR PORTFOLIO</h4>
            <p>
              At OBS Technologia, we are ensuring to compete with the ever
              challenging and diverse market of Apple App store by our
              innovative, creative and eye catching applications.
            </p>
            <p>
              We believe in the excellence of our applications through our best
              professional team. Over the time we have coordinated with number
              of local and foreign clients and worked on different projects from
              different domains.
            </p>
            <h3>Want to see our projects? Click on the Button!</h3>
            <div>
              <Link href="/portfolio">
                <motion.button
                className={styles.cursor}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1 },
                    boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                  }}
                >
                  Let’s go
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
