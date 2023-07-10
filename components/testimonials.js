import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import quote from "../public/testimonial.png";
import yellowStars from "../public/yellowStars.png";

function Testimonials({ review, cname }) {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.testimonials}>
        <div className={styles.nfl}>NFL</div>
        <figure className={styles.star}>
            <Image src={yellowStars} alt="star" layout="fill" objectFit="contain" />
          </figure>
          <div className={styles.line}></div>
          <h4>
            OBS Technologia team has an extremely well-rounded skill set across
            IOS and Android mobile app development. The team was able to
            successfully bring my designs to life, within IOS and Android
            domain; by turning my wireframes and requirements into apps.{" "}
          </h4>
          <div className={styles.quote}>
            {/* <figure className={styles.iq}>
              <Image
                src={quote}
                alt="quote"
                layout="fill"
                objectFit="contain"
              />
            </figure> */}
          </div>{" "}
          <div className={styles.review}>{review}</div>
         
        
          <div className={styles.cname}>{cname}</div>
      
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
