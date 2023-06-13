/** @format */

import React from "react";
import styles from "../styles/Home.module.scss";

export default function RoleResp(props) {
  return (
    <div className={styles.role_resp}>
      <h3 className={styles.title}>Job Responsibilities</h3>
      <ul
        className={styles.role_req}
        style={{ listStyleType: "inherit", margin: " 10px 0px 0px 70px" }}
      >
        {/* <li>{props.role_resp}</li> */}
        <div dangerouslySetInnerHTML={{ __html: props.role_resp }} />
      </ul>
    </div>
  );
}
