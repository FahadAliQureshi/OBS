/** @format */

import React from "react";
import styles from "../styles/Home.module.scss";

export default function RoleInfo(props) {
  return (
    <div className={styles.role_info}>
      <h3 className={styles.title}>About The Role</h3>
      <p className={styles.role_desc}>{props.role_info}</p>
    </div>
  );
}
