import React, { useEffect, useState } from "react";
import Link from "next/link";
import RoleDesc from "../../../components/roleDesc";
import styles from "../../../styles/Home.module.scss";
import RoleInfo from "../../../components/roleInfo";
import RoleResp from "../../../components/roleResp";
import SubmitButtom from "../../../components/submitButton";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { useRouter } from "next/router";
function Career() {
  const router = useRouter();
  const { id, name } = router.query;
  const [ids, setId] = useState({ id: id });
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [color, setColor] = useState("#ffd400");
  var das = {};
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ids),
  };
  
  useEffect(() => {
    console.log("doom", id);
    console.log("doom", ids);
    setIsLoading(true);
    setId(id);
 
    console.log("dooms");
    fetch(
      "https://globaltechnologia.org/webAdmin/public/index.php/api/jobshowbyid",
      requestOptions
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("RESPONSE DATA =================", res);
        setData(res.data);
        // console.log("doomss",res);
        // das = res.data
        // console.log("doomss",data);
      })
      .catch((e) => {
        console.log("errer================", e);
      });
    // console.log("doomss",data);
  }, []);
  console.log("doomss", data);
  const job_title = "Frontend Developer- Full time / Onsite";
  const role_info =
    "We are looking for a Frontend Developer. If you are a hard working  individual who tends to think out of the box, then; we would like to meet you.";
  const role_resp = [
    "Use markup languages like HTML to create user-friendly web pages",
    "Maintain and improve website",
    "Optimize applications for maximum speed",
    "Design mobile-based features",
    "Collaborate with back-end developers and web designers to improve usability",
    "Get feedback from, and build solutions for, users and customers",
    "Write functional requirement documents and guides",
    "Create quality mockups and prototypes",
    "Help back-end developers with coding and troubleshooting",
    "Ensure high quality graphic standards and brand consistency",
    "Stay up-to-date on emerging technologies",
    "Proven work experience as a Front-end developer",
    "Hands on experience with markup languages",
    "Experience with JavaScript, CSS and jQuery",
    "Familiarity with browser testing and debugging",
    "In-depth understanding of the entire web development process (design, development and deployment)",
    "BSc degree in Computer Science or relevant field",
  ];
  const submitStyle = {
    padding: "1.7% 16.3%",
    backgroundColor: "black",
    color: "white",
    fontSize: "24px",
    lineHeight: "29.6px",
    borderRadius: "50px",
  };

  return (
    <>
       <Header color="#ffd400"/>
      <div className={styles.wrapper}>
        <div className={styles.contain}>
          <div className={styles.heading}>
            <h3
              className={styles.title}
            >{`${data?.title} - ${data?.type}/${data?.jobeMode}`}</h3>
            <hr className={styles.hr1} />
            <h2 className={styles.desc}>
              {`${data?.domain} - ${data?.type}`} - Islamabad - Pakistan
            </h2>
          </div>
          <RoleInfo role_info={role_info} />
          {/* {data.description} */}
          <RoleResp role_resp={data?.description} />
          <RoleDesc
            salary="Market Competitive"
            location="I-8 Markaz Islamabad"
          />
          <Link
            href={{
              pathname: "/careers/forum",
              query: data, // the data
            }}
          >
            <div className={styles.submit_btn_container}>
              <p className="submit" style={submitStyle}>
                Apply for this Job
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Career;
