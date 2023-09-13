import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import CountUp from "react-countup";

const Resources = () => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className={styles.backGround}>
        {/* <h1>Our Resources</h1> */}
    
          <div ref={targetRef}>
          <div 
          className={styles.counter}>  <h1>Our Resources</h1></div>
            {isVisible && <div 
            className={styles.counterRow}> 
           <div  className={styles.rowOne}><div className={styles.font}><CountUp start={0} end={2} duration={8} /></div>DevOps</div>
            <div  className={styles.rowOne}><div className={styles.font}><CountUp start={1} end={5} duration={8} /></div>Graphic Designers</div>
            <div  className={styles.rowOne}><div className={styles.font}><CountUp start={1} end={10} duration={8} /></div>Mobile Apps</div>
            <div  className={styles.rowOne}><div className={styles.font}><CountUp start={1} end={5} duration={8} /></div>QA Engineers</div>
            <div  className={styles.rowOne}><div className={styles.font}><CountUp start={1} end={7} duration={8} /></div>Web Apps</div>
            </div>}
            <div style={{display:"flex", justifyContent:"center", marginTop:"50px"}}>  <h1>Our Achievements</h1></div>
            {isVisible && <div className={styles.counterRowTwo}> 
           
            <div  className={styles.rowTwo}><div className={styles.font}><CountUp start={4} end={17} duration={8} />+</div>App Projects</div>
            <div  className={styles.rowTwo}><div className={styles.font}><CountUp start={5} end={13} duration={8} />+</div>Web Projects</div>
            <div  className={styles.rowTwo}><div className={styles.font}><CountUp start={0} end={3} duration={8} />+</div>University Collaboration</div>
  
            </div>}
            
          </div>
          
     
      </div>
    </>
  );
};

export default Resources;
