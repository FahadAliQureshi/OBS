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
import axios from "axios";
import JobsHeader from "../../components/JobsHeader";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import { useRouter } from "next/router";

const reactLogo = require("../../public/reactLogo.png");

function JobDetails() {
  const router = useRouter();
  const data = router.query;
  console.log("JOB DETAILS ===============",data?.jobData)
  const [job, setJob] = useState([]);
  const [show, setShow] = useState("");
  const domain = "https://globaltechnologia.com/webAdmin/";

  const [isHovered, setIsHovered] = useState(false);
  const [selectedJob, setSelectedJob] = useState("Job Role 1");

  const [selectedJob2, setSelectedJob2] = useState("Job1");

  const handleJobClick = (jobRole) => {
    setSelectedJob(jobRole);
  };

  const handleJob = (jobRoleMain) => {
    // alert(jobRoleMain);
    setSelectedJob2(jobRoleMain);
  };

  const handleMouseEnter = (cardIndex) => {
    setIsHovered(cardIndex);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://globaltechnologia.com/webAdmin/public/index.php/api/jobshow")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Failed to fetch job data");
        }
      })
      .then((res) => {
        console.log("&&&&&&&&&&&&&", res);
        if (res?.length > 0) {
          const jobData = res;
          setJob(jobData);
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      })
      .catch((error) => {
        console.log("Error fetching job data:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("EEEEEE", job);
    if (job.length !== 0) {
      for (var i = 0; i < job.length; i++) {
        console.log("pain", job[i].id);
      }
    }
  }, [job]);

 

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
          <div className={styles.heading}>
            <h3
              className={styles.title}
            >{`${data.title} - ${data.type}/${data.jobeMode}`}</h3>
            <hr className={styles.hr1} />
            <h2 className={styles.desc}>
              {`${data.domain} - ${data.type}`} - Islamabad - Pakistan
            </h2>
          </div>
          <div style={{overflowX:"auto"}}>

          <div style={{minWidth:"1000px"}}>
            <div className={styles.containerOne}>
              {/* jobheader */}

              <div
                className={styles.innerContainerOne}
                style={{
                  height: selectedJob === "Job Role 2" ? "850px" : "",
                }}
              >
                {/* this */}

                <div className={styles.jobInput}>
                  <input
                    className={styles.inputsi}
                    type="radio"
                    value="Job1"
                    checked={selectedJob2 === "Job1"}
                    onChange={() => handleJob("Job1")}
                  />
                  <label style={{ width: "80%" }} htmlFor="">
                    {" "}
                    React Native Developer
                  </label>
                </div>
                <div className={styles.jobInput}>
                  <input
                    className={styles.inputsi}
                    type="radio"
                    value="Job1"
                    checked={selectedJob2 === "HR Operations Executive"}
                    onChange={() => handleJob("HR Operations Executive")}
                  />
                  <label style={{ width: "80%" }} htmlFor="">
                    {" "}
                    HR Operations Executive
                  </label>
                </div>

                <div className={styles.jobInput}>
                  <input
                    className={styles.inputsi}
                    type="radio"
                    value="Job1"
                    checked={selectedJob2 === "Job3"}
                    onChange={() => handleJob("Job3")}
                  />

                  <label style={{ width: "80%" }} htmlFor="">
                    {" "}
                    React Native Developer
                  </label>
                </div>
                <div className={styles.jobInput}>
                  <input
                    className={styles.inputsi}
                    type="radio"
                    style={{ borderRadius: 9999 }}
                    value="Job1"
                    checked={selectedJob2 === "Job4"}
                    onChange={() => handleJob("Job4")}
                  />
                  <label style={{ width: "80%" }} htmlFor="">
                    {" "}
                    HR Operations Executive
                  </label>
                </div>

                <div className={styles.jobInput}>
                  <input
                    className={styles.inputsi}
                    type="radio"
                    style={{ borderRadius: 9999 }}
                    value="Job1"
                    checked={selectedJob2 === "Job5"}
                    onChange={() => handleJob("Job5")}
                  />
                  <label style={{ width: "80%" }} htmlFor="">
                    {" "}
                    React Native Developer
                  </label>
                </div>
                <div className={styles.jobInput}>
                  <input
                    className={styles.inputsi}
                    type="radio"
                    style={{ borderRadius: 9999 }}
                    value="Job1"
                    checked={selectedJob2 === "Job6"}
                    onChange={() => handleJob("Job6")}
                  />
                  <label style={{ width: "80%" }} htmlFor="">
                    {" "}
                    HR Operations Executive
                  </label>
                </div>
              </div>
              <div
                style={{
                  // position: "absolute",
                  width: "77%",
                  // top: "17.5%",
                  // left: "25%",
                  height: "18.2%",
                }}
              >
                <div className={styles.jobDescMain}>
                  <JobsHeader
                    selectedJob={selectedJob}
                    setSelectedJob={setSelectedJob}
                    handleJobClick={handleJobClick}
                  />

                  <div
                    className="job1"
                    style={{
                      display: selectedJob2 === "Job1" ? "block" : "none",
                      background: "white",
                    }}
                  >
                    <div
                      className={styles.firstDesc}
                      style={{
                        display: selectedJob === "Job Role 1" ? "flex" : "none",
                      }}
                    >
                      We are looking for a React native developer. If you are a
                      hard working individual who tends to think out of the box,
                      then; we would like to meet you.
                    </div>

                    <div
                      className={styles.require}
                      style={{
                        display: selectedJob === "Job Role 2" ? "flex" : "none",
                      }}
                    >
                      <ul>
                        <li>
                          Must have Bachelor&apos;s Degree in relevant field
                        </li>
                        <li>
                          Minimum 1-2 years of professional experience working
                          with React Native.
                        </li>
                        <li>Must be based in Islamabad/Rawalpindi</li>
                        <li>
                          Release applications to the Apple and Google Play
                          stores.
                        </li>
                        <li>
                          Highly proficient in one or more libraries (e.g.
                          Redux, React Router, Context Api etc.) for state
                          managing and routing in addition to react.
                        </li>
                        <li>
                          Leverage native APIs for deep integrations with both
                          platforms.
                        </li>
                        <li>
                          English skills (ability to effectively communicate via
                          written and spoken English).
                          <li>Must have command over GIT version control.</li>
                          <li>
                            Solid understanding of the React lifecycle
                            Application DevOps e.g Fastlane, CircleCI, etc.
                          </li>
                          <li>
                            Familiarities with native build tools and IDEs like
                            XCode, Android Studio,
                          </li>
                        </li>
                        and Gradle
                      </ul>
                    </div>

                    <div
                      className={styles.thirdDesc}
                      style={{
                        display:
                          selectedJob === "Job Role 3" ? "block" : "none",
                      }}
                    >
                      <div className={styles.salary}>
                        Salary Range:{" "}
                        <div className={styles.market}>Market Competitive</div>{" "}
                      </div>
                      <div className={styles.salary}>
                        {" "}
                        Location:{" "}
                        <div className={styles.market}>
                          I-8 Markaz Islamabad
                        </div>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    className="HR Operations Executive"
                    style={{
                      display:
                        selectedJob2 === "HR Operations Executive"
                          ? "block"
                          : "none",
                    }}
                  >
                    <div
                      className={styles.firstDesc}
                      style={{
                        display: selectedJob === "Job Role 1" ? "flex" : "none",
                      }}
                    >
                      We are looking for a HR Operations Executive. If you are a
                      hard working individual who tends to think out of the box,
                      then; we would like to meet you.
                    </div>

                    <div
                      className={styles.require}
                      style={{
                        display: selectedJob === "Job Role 2" ? "flex" : "none",
                      }}
                    >
                      <ul>
                        <li>
                          Must have Bachelor&apos;s Degree in relevant field
                        </li>
                        <li>
                          Minimum 1-2 years of professional experience working
                          with HR Operations Executive.
                        </li>
                        <li>Must be based in Islamabad/Rawalpindi</li>
                        <li>
                          Release applications to the Apple and Google Play
                          stores.
                        </li>
                        <li>
                          Highly proficient in one or more libraries (e.g.
                          Redux, React Router, Context Api etc.) for state
                          managing and routing in addition to react.
                        </li>
                        <li>
                          Leverage native APIs for deep integrations with both
                          platforms.
                        </li>
                        <li>
                          English skills (ability to effectively communicate via
                          written and spoken English).
                          <li>Must have command over GIT version control.</li>
                          <li>
                            Solid understanding of the React lifecycle
                            Application DevOps e.g Fastlane, CircleCI, etc.
                          </li>
                          <li>
                            Familiarities with native build tools and IDEs like
                            XCode, Android Studio,
                          </li>
                        </li>
                        and Gradle
                      </ul>
                    </div>

                    <div
                      className={styles.thirdDesc}
                      style={{
                        display:
                          selectedJob === "Job Role 3" ? "block" : "none",
                      }}
                    >
                      <div className={styles.salary}>
                        Salary Range:{" "}
                        <div className={styles.market}>Market Competitive</div>{" "}
                      </div>
                      <div className={styles.salary}>
                        {" "}
                        Location:{" "}
                        <div className={styles.market}>
                          I-8 Markaz Islamabad
                        </div>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    className="job3"
                    style={{
                      display: selectedJob2 === "Job3" ? "block" : "none",
                    }}
                  >
                    <div
                      className={styles.firstDesc}
                      style={{
                        display: selectedJob === "Job Role 1" ? "flex" : "none",
                      }}
                    >
                      We are looking for a React native developer. If you are a
                      hard working individual who tends to think out of the box,
                      then; we would like to meet you.
                    </div>

                    <div
                      className={styles.require}
                      style={{
                        display: selectedJob === "Job Role 2" ? "flex" : "none",
                      }}
                    >
                      <ul>
                        <li>
                          Must have Bachelor&apos;s Degree in relevant field
                        </li>
                        <li>
                          Minimum 1-2 years of professional experience working
                          with React Native.
                        </li>
                        <li>Must be based in Islamabad/Rawalpindi</li>
                        <li>
                          Release applications to the Apple and Google Play
                          stores.
                        </li>
                        <li>
                          Highly proficient in one or more libraries (e.g.
                          Redux, React Router, Context Api etc.) for state
                          managing and routing in addition to react.
                        </li>
                        <li>
                          Leverage native APIs for deep integrations with both
                          platforms.
                        </li>
                        <li>
                          English skills (ability to effectively communicate via
                          written and spoken English).
                          <li>Must have command over GIT version control.</li>
                          <li>
                            Solid understanding of the React lifecycle
                            Application DevOps e.g Fastlane, CircleCI, etc.
                          </li>
                          <li>
                            Familiarities with native build tools and IDEs like
                            XCode, Android Studio,
                          </li>
                        </li>
                        and Gradle
                      </ul>
                    </div>

                    <div
                      className={styles.thirdDesc}
                      style={{
                        display:
                          selectedJob === "Job Role 3" ? "block" : "none",
                      }}
                    >
                      <div className={styles.salary}>
                        Salary Range:{" "}
                        <div className={styles.market}>Market Competitive</div>{" "}
                      </div>
                      <div className={styles.salary}>
                        {" "}
                        Location:{" "}
                        <div className={styles.market}>
                          I-8 Markaz Islamabad
                        </div>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    className="job4"
                    style={{
                      display: selectedJob2 === "Job4" ? "block" : "none",
                    }}
                  >
                    <div
                      className={styles.firstDesc}
                      style={{
                        display: selectedJob === "Job Role 1" ? "flex" : "none",
                      }}
                    >
                      We are looking for a React native developer. If you are a
                      hard working individual who tends to think out of the box,
                      then; we would like to meet you.
                    </div>

                    <div
                      className={styles.require}
                      style={{
                        display: selectedJob === "Job Role 2" ? "flex" : "none",
                      }}
                    >
                      <ul>
                        <li>
                          Must have Bachelor&apos;s Degree in relevant field
                        </li>
                        <li>
                          Minimum 1-2 years of professional experience working
                          with React Native.
                        </li>
                        <li>Must be based in Islamabad/Rawalpindi</li>
                        <li>
                          Release applications to the Apple and Google Play
                          stores.
                        </li>
                        <li>
                          Highly proficient in one or more libraries (e.g.
                          Redux, React Router, Context Api etc.) for state
                          managing and routing in addition to react.
                        </li>
                        <li>
                          Leverage native APIs for deep integrations with both
                          platforms.
                        </li>
                        <li>
                          English skills (ability to effectively communicate via
                          written and spoken English).
                          <li>Must have command over GIT version control.</li>
                          <li>
                            Solid understanding of the React lifecycle
                            Application DevOps e.g Fastlane, CircleCI, etc.
                          </li>
                          <li>
                            Familiarities with native build tools and IDEs like
                            XCode, Android Studio,
                          </li>
                        </li>
                        and Gradle
                      </ul>
                    </div>

                    <div
                      className={styles.thirdDesc}
                      style={{
                        display:
                          selectedJob === "Job Role 3" ? "block" : "none",
                      }}
                    >
                      <div className={styles.salary}>
                        Salary Range:{" "}
                        <div className={styles.market}>Market Competitive</div>{" "}
                      </div>
                      <div className={styles.salary}>
                        {" "}
                        Location:{" "}
                        <div className={styles.market}>
                          I-8 Markaz Islamabad
                        </div>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    className="job5"
                    style={{
                      display: selectedJob2 === "Job5" ? "block" : "none",
                    }}
                  >
                    <div
                      className={styles.firstDesc}
                      style={{
                        display: selectedJob === "Job Role 1" ? "flex" : "none",
                      }}
                    >
                      We are looking for a React native developer. If you are a
                      hard working individual who tends to think out of the box,
                      then; we would like to meet you.
                    </div>

                    <div
                      className={styles.require}
                      style={{
                        display: selectedJob === "Job Role 2" ? "flex" : "none",
                      }}
                    >
                      <ul>
                        <li>
                          Must have Bachelor&apos;s Degree in relevant field
                        </li>
                        <li>
                          Minimum 1-2 years of professional experience working
                          with React Native.
                        </li>
                        <li>Must be based in Islamabad/Rawalpindi</li>
                        <li>
                          Release applications to the Apple and Google Play
                          stores.
                        </li>
                        <li>
                          Highly proficient in one or more libraries (e.g.
                          Redux, React Router, Context Api etc.) for state
                          managing and routing in addition to react.
                        </li>
                        <li>
                          Leverage native APIs for deep integrations with both
                          platforms.
                        </li>
                        <li>
                          English skills (ability to effectively communicate via
                          written and spoken English).
                          <li>Must have command over GIT version control.</li>
                          <li>
                            Solid understanding of the React lifecycle
                            Application DevOps e.g Fastlane, CircleCI, etc.
                          </li>
                          <li>
                            Familiarities with native build tools and IDEs like
                            XCode, Android Studio,
                          </li>
                        </li>
                        and Gradle
                      </ul>
                    </div>

                    <div
                      className={styles.thirdDesc}
                      style={{
                        display:
                          selectedJob === "Job Role 3" ? "block" : "none",
                      }}
                    >
                      <div className={styles.salary}>
                        Salary Range:{" "}
                        <div className={styles.market}>Market Competitive</div>{" "}
                      </div>
                      <div className={styles.salary}>
                        {" "}
                        Location:{" "}
                        <div className={styles.market}>
                          I-8 Markaz Islamabad
                        </div>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    className="job6"
                    style={{
                      display: selectedJob2 === "Job6" ? "block" : "none",
                    }}
                  >
                    <div
                      className={styles.firstDesc}
                      style={{
                        display: selectedJob === "Job Role 1" ? "flex" : "none",
                      }}
                    >
                      We are looking for a React native developer. If you are a
                      hard working individual who tends to think out of the box,
                      then; we would like to meet you.
                    </div>

                    <div
                      className={styles.require}
                      style={{
                        display: selectedJob === "Job Role 2" ? "flex" : "none",
                      }}
                    >
                      <ul>
                        <li>
                          Must have Bachelor&apos;s Degree in relevant field
                        </li>
                        <li>
                          Minimum 1-2 years of professional experience working
                          with React Native.
                        </li>
                        <li>Must be based in Islamabad/Rawalpindi</li>
                        <li>
                          Release applications to the Apple and Google Play
                          stores.
                        </li>
                        <li>
                          Highly proficient in one or more libraries (e.g.
                          Redux, React Router, Context Api etc.) for state
                          managing and routing in addition to react.
                        </li>
                        <li>
                          Leverage native APIs for deep integrations with both
                          platforms.
                        </li>
                        <li>
                          English skills (ability to effectively communicate via
                          written and spoken English).
                          <li>Must have command over GIT version control.</li>
                          <li>
                            Solid understanding of the React lifecycle
                            Application DevOps e.g Fastlane, CircleCI, etc.
                          </li>
                          <li>
                            Familiarities with native build tools and IDEs like
                            XCode, Android Studio,
                          </li>
                        </li>
                        and Gradle
                      </ul>
                    </div>

                    <div
                      className={styles.thirdDesc}
                      style={{
                        display:
                          selectedJob === "Job Role 3" ? "block" : "none",
                      }}
                    >
                      <div className={styles.salary}>
                        Salary Range:{" "}
                        <div className={styles.market}>Market Competitive</div>{" "}
                      </div>
                      <div className={styles.salary}>
                        {" "}
                        Location:{" "}
                        <div className={styles.market}>
                          I-8 Markaz Islamabad
                        </div>{" "}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: "30px",
                    }}
                  >
                    <Link
                      href={{
                        pathname: "/careers/forum",
                        query: data
                    
                      }}
                    >
                      <div
                        style={{
                          background: "#000000",
                          color: "#FFFFFF",
                          width: "40%",
                          height: "40px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50px",
                          cursor:"pointer"
                        }}
                      >
                        Apply for this job
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div style={{ background: "#FFD400" }}>
                <div style={{ background: "#FFD400", display: "flex" }}></div>
              </div>
            </div>
            </div>
          </div>
          <div className={styles.wrapper}></div>

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
