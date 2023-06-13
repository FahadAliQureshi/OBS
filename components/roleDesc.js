/** @format */

import React from "react";
import styles from "../styles/Home.module.scss";

function RoleDesc(props) {
  return (
    <div className={styles.role_desc}>
      <p>
        Salary Range: <strong>{props.salary}</strong>
      </p>
      <p>
        Location: <strong>{props.location}</strong>
      </p>
    </div>
  );
}

export default RoleDesc;
