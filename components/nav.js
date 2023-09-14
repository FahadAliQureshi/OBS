import React from "react";
import styles from "../styles/Home.module.scss";
import logo from "../public/logo.png";
import Image from "next/image";
import toggle from "../public/dropdown.png";
import Link from "next/link";
function Nav(props) {
  const navHandle = () => {
    props.setNav(false);
  };
  return (
    <div className={styles.mobilenav}>
      {" "}
      <div className={styles.mobileback}>
        <div onClick={navHandle}>
          {" "}
          <figure>
            <Image
              src={toggle}
              alt="OBS TECHNOLOGIA"
              layout="fill"
              objectFit="contain"
            />
          </figure>
        </div>
      </div>
      <div className={styles.mobilebar}>
        <figure className={styles.hlogo}>
          <Image
            src={logo}
            alt="OBS TECHNOLOGIA"
            layout="fill"
            objectFit="contain"
          />
        </figure>
        <ul className={styles.uppernav}>
          <li onClick={navHandle}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={navHandle}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li onClick={navHandle}>
            <Link href="/#services">Services </Link>
          </li> 
          <li onClick={navHandle}>
          <Link href="/careers">Careers</Link>
          </li>
          <li onClick={navHandle}>
            <Link href="/#contact">Contact Us</Link>
          </li>
          <li onClick={navHandle}>
            {" "}
            <Link href="/#about">About</Link>
          </li>
         
        </ul>
      </div>
    </div>
  );
}

export default Nav;
