import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import quote from "../public/testimonial.png";
import stars from "../public/star.png";

function Testimonials({ review, cname }) {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.testimonials}>
          <h3 className={styles.th}>TESTIMONIALS</h3>
          <h2>People who have already worked with us!</h2>
          <div className={styles.quote}>
            <figure className={styles.iq}>
              <Image
                src={quote}
                alt="quote"
                layout="fill"
                objectFit="contain"
              />
            </figure>
          </div>{" "}
          <div className={styles.review}>{review}</div>
          <div className={styles.line}></div>
          <div className={styles.cname}>{cname}</div>
          <figure className={styles.star}>
            <Image src={stars} alt="star" layout="fill" objectFit="contain" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
