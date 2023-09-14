import React, { useEffect, useState } from "react";
import logo from "../public/logo.png";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// import  from "react";
import { useRouter } from "next/router";
import Nav from "./nav";
import hamburger from "../public/ham.png";
function Header(props) {
  const router = useRouter();
  const [color, setColor] = useState("#ffd400");
  const [bg, setBg] = useState("#000000");
  const [high, setHigh] = useState(true);

  const [nav, setNav] = useState(false);
  const navHandle = () => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$", router);
    setNav(!nav);
  };
  console.log("$$$$$$$$$$$$$$$$$$$$$$$$", router);
  useEffect(() => {
    if (router.pathname !== "/" ) {
      setColor("#000000");
      setBg("#ffffff");
      setHigh(700);
    }
    // if (router.pathname == "/careers") {
    //   setColor("#ffd400");
    //   setBg("#ffffff");
    //   setHigh(700);
    // }
    if (router.pathname !== "/portfolio" && router.pathname !== "/careers"  && router.pathname !== "/careers/JobDetails"  && router.pathname !== "/careers/forum" ) {
      
      setBg("black");
     
    } else {
      setColor("#000000");
      setBg("white"); // Set black background for all other pages
      
    }
  }, []);

  return (
    <>
      <header className={styles.header} style={{ backgroundColor: `${bg}`, zIndex:"999"  }}>
        <Link href="/">
          <figure className={styles.hlogo}>
            <Image
              src={logo}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </Link>
        <ul className={styles.center_nav} style={{ color: `${color}` }}>
          {router.asPath == "/" ? (
            <motion.li
              className={styles.lis}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                // boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                padding: 10,
                borderRadius: 30,
                border: `1px solid #ffd400`,
              }}
            >
              <Link href="/">Home</Link>
            </motion.li>
          ) : (
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                // boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
                padding: 10,
                borderRadius: 30,
                border: `1px solid #ffd400`,
              }}
            >
              <Link href="/">Home</Link>
            </motion.li>
          )}
          {router.pathname == "/portfolio" ? (
            <motion.li
              className={styles.lis}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                padding: 10,
                border: `1px solid #ffd400`,
                borderRadius: 30,
              }}
            >
              <Link href="/portfolio">Portfolio</Link>
            </motion.li>
          ) : (
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                padding: 10,
                border: `1px solid #ffd400`,
                borderRadius: 30,
              }}
            >
              <Link href="/portfolio">Portfolio</Link>
            </motion.li>
          )}
          {router.asPath == "/#services" ? (
            <motion.li
              className={styles.lis}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                padding: 10,
                border: `1px solid #ffd400`,
                borderRadius: 30,
              }}
              // onClick={() => router.push("/#services")}
            >
              {/* Services */}
              <Link href="/#services">Services </Link>
              {/* <Link  href= {{pathname:"/#services"}}>Services</Link> */}
            </motion.li>
          ) : (
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                padding: 10,
                border: `1px solid #ffd400`,
                borderRadius: 30,
              }}
              // onClick={() => router.push("/#services")}
            >
              {/* Services */}
              <Link href="/#services">Services </Link>
              {/* <Link  href= {{pathname:"/#services"}}>Services</Link> */}
            </motion.li>
          )}
          {router.pathname.includes("/careers") ? (
            <motion.li
              className={styles.lis}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                padding: 10,
                border: `1px solid #ffd400`,
                borderRadius: 30,
              }}
            >
              <Link href="/careers">Careers</Link>
            </motion.li>
          ) : (
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                padding: 10,
                border: `1px solid #ffd400`,
                borderRadius: 30,
              }}
            >
              <Link href="/careers">Careers</Link>
            </motion.li>
          )}
          {router.asPath == "/#contact" ? (
            <motion.li
              className={styles.lis}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                padding: 10,
                border: `1px solid #ffd400`,
                borderRadius: 30,
              }}
            >
              <Link href="/#contact">
                <a>Contact</a>
              </Link>
            </motion.li>
          ) : (
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                padding: 10,
                border: `1px solid #ffd400`,
                borderRadius: 30,
              }}
            >
              <Link href="/#contact">
                <a>Contact</a>
              </Link>
            </motion.li>
          )}
        </ul>
        <ul className="right-nav" style={{ color: `${color}` }}>
          {router.asPath == "/#about" ? (
            <motion.li
              className={styles.lis}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                padding: 10,
                border: `1px solid #ffd400`,
                borderRadius: 30,
              }}
            >
              {" "}
              <Link href="/#about" smooth="true">
                <a>About</a>
              </Link>
            </motion.li>
          ) : (
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
                padding: 10,
                border: `1px solid #ffd400`,
                borderRadius: 30,
              }}
            >
              {" "}
              <Link href="/#about" smooth="true">
                <a>About</a>
              </Link>
            </motion.li>
          )}
          <Link href="/Hire" smooth="true">
            <li
              className={styles.btn}
              style={{ background: `${color}`, color: `${bg}` }}
            >
              Hire us
            </li>
          </Link>
        </ul>
        <span onClick={navHandle} className={styles.navbar}>
          <figure className={styles.ham}>
            <Image
              src={hamburger}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </span>
      </header>
      {nav && <Nav setNav={setNav} />}
    </>
  );
}

export default Header;
