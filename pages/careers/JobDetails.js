/** @format */

import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Home.module.scss";
import Careercard from "../../components/careercard";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Link from "next/link";
import ErrorBoundary from "../../components/ErrorBoundary";
import Blur from "../../components/blur";
import { motion } from "framer-motion";
import error from "../../public/err.png";
import Image from "next/image";
const reactLogo = require("../../public/reactLogo.png");

function JobDetails() {
  const [job, setJob] = useState([]);
  const [show, setShow] = useState("");
  const domain = "https://globaltechnologia.org/webAdmin/";

  const [isHovered, setIsHovered] = useState(-1);

  const handleMouseEnter = (cardIndex) => {
    setIsHovered(cardIndex);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://globaltechnologia.org/webAdmin/public/index.php/api/jobshow")
      .then((res) => {
        setIsLoading(true);
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((res) => {
        console.log("&&&&&&&&&&&&&", res);
        if (res?.length > 0) {
          const job = res;
          setJob(job);
          setIsLoading(false);
        } else {
          return;
        }
      });
    setTimeout(() => {
      console.log("2222222222222222222");
      setIsLoading(false);
    }, 2000);
    console.log("EEEEEE", job);
    if (job.length != 0) {
      for (var i = 0; i < job.length; i++) {
        console.log("pain", job[i].id);
      }
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <motion.div
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
          <Blur />
        </motion.div>
      ) : job.length != 0 ? (
        <ErrorBoundary>
          <Header color="#000000" />

<div style={{}}>
          <div style={{ background: "#FFD400", width: "100%", height:"100%" }}>
              {/* jobheader */}

              <div
                style={{
                  background: "#FFD400",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    background: "#FFD400",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <input type="radio" style={{ borderRadius: 9999 }} />
                  <label htmlFor=""> React Native Developer</label>
                </div>
                <div
                  style={{
                    background: "#FFD400",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <input type="radio" style={{ borderRadius: 9999 }} />
                  <label htmlFor=""> HR Operations Executive</label>
                </div>
                <div
                  style={{
                    background: "#FFD400",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <input type="radio" style={{ borderRadius: 9999 }} />
                  <label htmlFor=""> React Native Developer</label>
                </div>
                <div
                  style={{
                    background: "#FFD400",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <input type="radio" style={{ borderRadius: 9999 }} />
                  <label htmlFor=""> HR Operations Executive</label>
                </div>
                <div
                  style={{
                    background: "#FFD400",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <input type="radio" style={{ borderRadius: 9999 }} />
                  <label htmlFor=""> React Native Developer</label>
                </div>
                <div
                  style={{
                    background: "#FFD400",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <input type="radio" style={{ borderRadius: 9999 }} />
                  <label htmlFor=""> HR Operations Executive</label>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "70%",
                  top: "17.5%",
                  left: "30%",
               height:"18.2%"
                }}
              >
                <div
                  style={{
                    background: "white",
                    height:"97%",
                    
                  }}
                >
                  <div
                    style={{
                      background: "white",
                      display:"flex",
                      justifySelf:"flex-end",
                      justifyContent:"flex-end",
                      marginRight:"110px",
                    }}
                  >
                    <div
                      style={{ display: "flex", justifyContent: "space-between",width:"55%", marginTop:"15px"}}
                    >
                      <div style={{ background: "#FFD400", display: "flex", justifyContent:"center",alignContent:"center",alignItems:"center",
                      borderRadius:"30px", height:"30px", width:"20%" }}>
                        Job Role
                      </div>
                      <div>Responsibilities</div>
                      <div>More</div>
                    </div>
                  </div>
                  <div style={{ background: "white", fontSize: "20px", marginRight:"100px", }}>
                    We are looking for a React native developer. If you are a
                    hard working individual who tends to think out of the box,
                    then; we would like to meet you.
                  </div>
                </div>
              </div>

              <div style={{ background: "#FFD400" }}>
                <div style={{ background: "#FFD400", display: "flex" }}></div>
              </div>
            </div>
            </div>
          <div className={styles.wrapper}>
       
          </div>

          <Footer />
        </ErrorBoundary>
      ) : (
        <>
          <Header />
          <figure className={styles.center}>
            <Image src={error} alt="web" width={450} height={340} />
          </figure>
        </>
      )}
    </>
  );
}

export default JobDetails;
