/** @format */

import React from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import wave from "../public/wave.png";
import phone from "../public/contactcell.png";
import Modal from "./modal";
import { useState } from "react";
import { motion } from "framer-motion";
function Contact() {
  const [show, setShow] = useState(false);
  const [response, setResponse] = useState("");
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  // setShow(true);
  setTimeout(function () {
    setShow(false);
  }, 1000);
  // setShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.name == "" || inputs.email == "" || inputs.message == "") {
    
      setShow(true);
      setResponse("Enter Required Details");
      setTimeout(function () {
        setShow(false);
      }, 5000);
      return;
    } 
    if(!inputs.email.match(validRegex)){
 
      setShow(true);
      setResponse("Enter Valid Email");
      setTimeout(function () {
        setShow(false);
      }, 5000);
    }
    else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      };

      fetch("https://globaltechnologia.org/webAdmin/public/index.php/api/contactus", requestOptions)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          setResponse("Your Response Is Sumbitted");
          console.log(res.message);
        });
        setInputs({ name: "",
        email: "",
        message: "",})
      // setShow(true);
      setTimeout(function () {
        setShow(true);
      }, 1000);
      setTimeout(function () {
        setShow(false);
      }, 3000);
    }
  };
  return (
    <>
      <motion.div className={styles.contact_wrapper}>
        <div className={styles.wrapper} id='contact'>
          <div className={styles.contl}>
            <div
              className={styles.contact}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
                boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                // padding: 20,
                borderRadius: 30,
              }}>
              <figure className={styles.waves}>
                <Image
                  src={wave}
                  alt='quote'
                  layout='fill'
                  objectFit='contain'
                  smooth='true'
                />
              </figure>
              <div className={styles.contact_us}>
                <h3>Contact Us</h3>
                <p>We would love to hear from you.</p>
                <div className={styles.form}>
                  <form>
                    <div className={styles.row}>
                      <motion.input
                        type='text'
                        name='name'
                        id='name'
                        placeholder='Name'
                        value={inputs.name}
                        onChange={handleChange}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.1 },
                          boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                        }}
                      />
                      <motion.input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='Email'
                        value={inputs.email}
                        onChange={handleChange}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.1 },
                          boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                        }}
                      />
                    </div>

                    <motion.textarea
                    style={{resize: "none"}}
                      type='text'
                      name='message'
                      id='message'
                      placeholder='Message'
                      className={styles.message}
                      value={inputs.message}
                      onChange={handleChange}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.1 },
                        boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                      }}
                    />
                  </form>
                  <motion.button
                    onClick={handleSubmit}
                    className={styles.formtbtn}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.1 },
                      boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                    }}>
                    Let&apos;s talk
                  </motion.button>
                </div>
              </div>
              <figure className={styles.contact_cell}>
                <Image
                  src={phone}
                  alt='quote'
                  layout='fill'
                  objectFit='contain'
                />
              </figure>
            </div>
          </div>
          {show == true && <Modal message={response} />}
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
