/** @format */
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Input from "../components/Input";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useRouter } from 'next/router'
import FormData from 'form-data'
import Modal from "../components/modal";
import axios from "axios";
import hire from '../public/hire.png'
import { useState,useEffect } from "react";
import Image from "next/image";
function Hire() {
  const router = useRouter();
const data = router.query.job_id;
console.log(data);
useEffect(() => {

setJob_id(router.query.job_id)
console.log("job",data)
}, [data])

  const [response, setResponse] = useState(""); 
   const [show, setShow] = useState(false);
   const [job_id , setJob_id] = useState("0")
   const [cv ,setCv] = useState({})
  const [inputs, setInputs] = useState({
             name:"",
             cname:"",
             url:"",
             youremail:"",
             confirmemail:"",
             lastname:"",
             platform:"",
             budget:"",
             time:"",
             detail:""
    // cv: {cv},
    // job_id:"2"
  });
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let formData = new FormData();
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    console.log("$$$", e.target.name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.name == "" || inputs.youremail == ""  || inputs.message == "" ||inputs.lastname == "" || inputs.detail == "") {
      
      if(inputs.youremail !== inputs.confirmemail ){    
         setShow(true);   
          setResponse("Enter Same Email");
          setTimeout(function () {
            setShow(false);
          }, 5000);
             }else if(!inputs.youremail.match(validRegex)){
              setShow(true);   
              setResponse("Enter Valid Email");
              setTimeout(function () {
                setShow(false);
              }, 5000);
             }
      else
{  setShow(true);
      setResponse("Enter Required Details");
      setTimeout(function () {
        setShow(false);
      }, 5000);}
      return;
    } else {
      formData.append("name",inputs.name)
      formData.append("cname",inputs.cname)
      formData.append("platform",inputs.platform)
      formData.append("budget",inputs.budget)
      formData.append("detail",inputs.detail)
      formData.append("lastname",inputs.lastname)
      formData.append("youremail",inputs.youremail)
      formData.append("confirmemail",inputs.confirmemail)
      formData.append("time",inputs.time)
      formData.append("url", inputs.url)
      // formData.append("job_id", job_id)
      
      console.log("form",cv.cv)
      // formData.append("fname",inputs.fname)
      const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'multipart/form-data'},
        body: JSON.stringify([inputs]),
      };
      const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    // url = 'https://globaltechnologia.org/webAdmin/api/apply_job'
    axios.post('https://globaltechnologia.org/webAdmin/api/budget_contact', formData, config)
        .then(response => {
            console.log(response);
            if(response.status == 200) {
            setResponse(response?.data?.message);
            setShow(true);
            setInputs({
             name:"",
             cname:"",
             url:"",
             youremail:"",
             confirmemail:"",
             detail:"",
             lastname:"",
             platform:"",
             detail:"",
             time:"",
            });
            setCv({})
            setTimeout(function () {
              setShow(false);
            }, 5000);
          }

            else{
              setResponse("try again")
            }

        })
        .catch(error => {
            console.log(error);
        });
      // fetch("https://globaltechnologia.org/webAdmin/api/apply_job", requestOptions)
      
      //   .then((response) => response.json())
      //   .then((res) => {
      //     console.log(res);
      //     setResponse(res);
      //     console.log(res);
      //   });
      // setShow(true);
      // setTimeout(function () {
      //   setShow(false);
      // }, 1000);
      // setInputs({name:'',lastname:'',email:'',phone:''}) 
    }
  };
  const color = "#000000"
  return (
    <>
          <Head>
        <title>OBS TECHNOLOGIA</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple.png"/>
	<link rel="icon" type="image/png" sizes="32x32" href="../public/favicon32.png"/>
	<link rel="icon" type="image/png" sizes="16x16" href="../public/favicon16.png"/>
	{/* <link rel="manifest" href="../public/site.webmanifest"/> */}
	<link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5"/>
	<meta name="msapplication-TileColor" content="#da532c"/>
	<meta name="theme-color" content="#ffffff"/>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <Header  color={color}/>
      <div className={styles.wrapper}>
        <div className={styles.career}>
          <div className={styles.hire}>
            <div className={styles.form_desc}>
              <h3 className={styles.form_title}>Got a project for us?</h3>
              <div className={styles.line}></div>
              <p className={styles.pascal}>We collaborate with platforms and companies to transform innovative concepts into stunning digital goods and experiences.</p>
              <figure className={styles.picture}>
          <Image
            src={hire}
            alt='member'
            layout='fill'
            objectFit='contain'
            priority
          />
        </figure>
            </div>
            <hr className={styles.hr2} />
            <div className={styles.form_content}>
              <div className={styles.name}>
                <div className={styles.fieldset}>
                  <label htmlFor='name' className={styles.labels}>
                    First Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className={styles.inputs}
                    placeholder='Name'
                    value={inputs.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.fieldset}>
                  <label htmlFor='lname' className={styles.labels}>
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='lastname'
                    id='lname'
                    className={styles.inputs}
                    placeholder='Last Name'
                    value={inputs.lastname}
                    onChange={handleChange}
                  />
                </div>
                {/* <input type='text' value='Last Name' className={styles.lname} /> */}
              </div>
            <div className={styles.ebox}>
          
              <div className={styles.email}>
                <label htmlFor='youremail' className={styles.labels}>
                  Your Email
                </label>
                <input
                  type='text'
                  name='youremail'
                  id='youremail'
                  className={`${styles.inputs} "" ${styles.email}` }
                  placeholder='Your Email'
                  value={inputs.youremail}
                  onChange={handleChange}
                />
              </div>  
              <div className={styles.email}>
                <label htmlFor='email' className={styles.labels}>
                 Confirm Email
                </label>
                <input
                  type='text'
                  name='confirmemail'
                  id='confirmemail'
                  className={`${styles.inputs} "" ${styles.email}` }
                  placeholder='Confirm Email'
                  value={inputs.confirmemail}
                  onChange={handleChange}
                />
              </div>
            </div>
              <div className={styles.fieldset}>
                <label htmlFor='time' className={styles.labels}>
                  What is your timeline for the project
                </label>
                <input
                  type='text'
                  name='time'
                  id='time'
                  className={styles.inputs}
                  placeholder=''
                  value={inputs.time}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.fieldset}>
                <label htmlFor='url' className={styles.labels}>
                  Your website URL?
                </label>
                <input
                  type='text'
                  name='url'
                  id='url'
                  className={styles.inputs}
                  placeholder=''
                  value={inputs.url}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.fieldset}>
                <label htmlFor='cname' className={styles.labels}>
                  Your Company Name
                </label>
                <input
                  type='text'
                  name='cname'
                  id='cname'
                  className={styles.inputs}
                  placeholder=''
                  value={inputs.cname}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.fieldset}>
                <label htmlFor='platform' className={styles.labels}>
                  Choose your Platform
                </label>
                <input
                  type='text'
                  name='platform'
                  id='platform'
                  className={styles.inputs}
                  placeholder=''
                  value={inputs.platform}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.fieldset}>
                <label htmlFor='budget' className={styles.labels}>
                  Tell us about your budget
                </label>
                <input
                  type='number'
                  name='budget'
                  id='budget'
                  className={styles.inputs}
                  placeholder=''
                  value={inputs.budget}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.fieldsets}>
                <label htmlFor='detail' className={styles.labels}>
                  Tell us about your project
                </label>
                <textarea
                  type='text'
                  name='detail'
                  id='detail'
                  className={styles.inputs}
                  placeholder=''
                  value={inputs.detail}
                  onChange={handleChange}
                />
              </div>
              {/*   <Input
                type='email'
                value='Email Address'
                className={styles.email}
              />
              <Input
                type='number'
                value='Phone Number'
                className={styles.phone}
              />

              <input type='file' value='Resumes' className={styles.upload} />*/}
              {/* <div className={styles.fieldset}>
                <label htmlFor='resume' className={styles.labels}>
                  Resume
                </label>
                <input
                  type='file'
                  name='cv'
                  id='cv'
                  className={styles.upload}
                  placeholder='Resume'
                  value={inputs.cv}
                  onChange={(e)=>{
                    console.log("file", e.target.name)
                    setCv({ [e.target.name]: e.target.files[0]})
                    console.log("cv",cv)
                  }}
                />
              </div> */}
            </div>
            <button
              type='submit'
              role='button'
              id='submit-btn'
              value='Submit Application'
              className={styles.buttns}
              onClick={handleSubmit}>
              Start working with us!
            </button>
          </div>
        </div>
      </div>
      {show == true && <Modal message={response} />}
      <Footer />
    </>
  );
}

export default Hire;
