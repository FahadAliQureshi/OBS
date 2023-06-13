import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../public/logo.png";
import facebook from "../public/facebook.png";
import linkedin from "../public/linkedin.png";
import instagram from "../public/instagram.png";
import Link from "next/link";
function Footer() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.wrapper} id="about">
          <div className={styles.footer}>
            <div className={styles.footer_row}>
              <div className={styles.b1}>
                <figure className={styles.logos}>
                  <Image
                    src={logo}
                    alt="OBS TECHNOLOGIA"
                    layout="fill"
                    objectFit="contain"
                  />
                </figure>
                <p>
                  OBS Technologia is one of the fastest-growing IT companies
                  providing various solutions and services across industries
                </p>
              </div>
              <div className={styles.foot}>
                <div className={styles.b3}>
                  <h3>Contact us</h3>
                  <div className={styles.socials}>
                <figure className={styles.social}>
                      <a href="https://www.facebook.com/obstechnologia">   
                      <Image
                        src={facebook}
                        alt="OBS TECHNOLOGIA"
                        layout="fill"
                        objectFit="contain"
                      /></a>
                    </figure>
                   
                    <figure className={styles.social}>
               <a href="https://www.instagram.com/obstechnologia/">       
                <Image
                        src={instagram}
                        alt="OBS TECHNOLOGIA"
                        layout="fill"
                        objectFit="contain"
                      />
                   </a>
                    </figure>    
                    <figure className={styles.social}>
                      <a href="https://www.linkedin.com/company/69542733/">  <Image
                        src={linkedin}
                        alt="OBS TECHNOLOGIA"
                        layout="fill"
                        objectFit="contain"
                      /></a>
                    </figure>
                  
                  </div>
                </div>
                <div className={styles.b2}>
                  <h3>Call us</h3>
                  <p>051-8892643</p>
                </div>
                <div className={styles.b2}>
                  <h3 className={styles.hadd}>Address</h3>
                  <p className={styles.address}>
                    Office # 2, 3rd Floor Huzaifah Centre I-8 Markaz, Islamabad
                  </p>
                </div>
                <div className={styles.b2}>
                  <h3>Email</h3>
                  {/* <p className={styles.email}>
                    <a href="mailto:ceo@obstechnologia.com">
                      ceo@obstechnologia.com
                    </a>{" "}
                  </p> */}
                  <p className={styles.email}>
                    <a href="mailto:hr@obstechnologia.com">
                      hr@obstechnologia.com
                    </a>
                  </p>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div className={styles.seprator}></div>
        <div className={styles.wrapper}>
           <div className={styles.bottom_footer}>
          <p>@2023 FUTURE,OBS Technologia,All Rights Reserved</p>
        </div>
        </div>
       
      </div>
    </>
  );
}

export default Footer;
