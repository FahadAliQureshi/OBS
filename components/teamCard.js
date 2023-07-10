/** @format */

import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import styles from "../styles/Home.module.scss";

function TeamCard(props) {
  console.log("okkkkk", props);
  var i = 0;
  useEffect(() => {}, []);
  const domain = "https://globaltechnologia.org/webAdmin/public/";
  return (
    <>
      <motion.div
        key={props.data.id}
        className={styles.card}
        whileHover={{
          // scale: 1,
          transition: { duration: 0.1 },
          boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
          padding: `0px 0px 10px 0px`,
          borderRadius: 30,
        }}
      >
        <figure className={styles.picture}>
          <Image
            loader={() => {
              return domain + props.data.url;
            }}
            src={domain + props.data.url}
            alt="member"
            layout="fill"
            objectFit="contain"
            priority
          />
        </figure>
        {/* <div className={styles.yc}>{props.num + 1}</div> */}
        <div className={styles.cn}>{props.data.name}</div>
        <div className={styles.cl}></div>
        <div className={styles.position}>{props.data.designation}</div>
      </motion.div>
    </>
  );
}
export default TeamCard;
