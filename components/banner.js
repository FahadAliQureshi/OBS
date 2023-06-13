import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link"
import img from "../public/right.png";
import { motion } from "framer-motion";
function Banner() {
  return (
    <>
      <div className={styles.banner_container}>
        {" "}
        <div className={styles.black}></div>
        <div className={styles.b}></div>{" "}
        <div className={styles.wrapper}>
          <div className={styles.banner}>
            <div className={styles.bl}>
              <p className={styles.mv}>Empowering you with purpose & passion</p>
              <p className={styles.dv}>
                Excellent IT services for your success
              </p>
              <h2>Innovative future of digital world.</h2>
              <p className={styles.mv}>
                We help businesses digitally transform by building innovative
                products.
              </p>
              <p className={styles.bannerp}>
                We help businesses digitally transform by building innovative
                products{" "}
              </p>
              <Link  href="/Hire" smooth="true"><button className={styles.hired}>Hire Us</button></Link>
            </div>
            <div className={styles.cover}>
              <motion.div
                className={styles.br}
                initial="hidden"
                animate="visible"
                whileHover={{
                  x: "-50px",
                  transition: { duration: 0.1 },
                }}
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
                <Image
                  src={img}
                  alt="phone"
                  layout="fill"
                  objectFit="contain"
                  priority
                  smooth
                  className={styles.br}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
