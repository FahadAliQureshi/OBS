import React from "react";
import styles from "../styles/Home.module.scss";
function modal(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>{props.message}</div>
    </div>
  );
}

export default modal;
