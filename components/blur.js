import React from 'react';
import styles from "../styles/Home.module.scss";
import Image from 'next/image';
import Logo from "../public/yellowlogo.png"
import {motion} from "framer-motion"
function Blur() {
  return (
    <div className={styles.blur}>
      
        <motion.figure   variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.1,
                    },
                  },
                }}>
            <Image
            src={Logo}
            alt="OBS TECHNOLOGIA"
            layout="fill"
            objectFit="contain"
            />
        </motion.figure>

    </div>
  )
}

export default Blur