/** @format */
import React from "react";
import styles from "../styles/Home.module.scss";

function Input(props) {
  return (
    <div className={styles.fieldset}>
      {/* <label for={props.id} className={styles.labels}> */}
      {props.value}
      {/* </label> */}
      <input
        id={props.id}
        className={styles.inputs}
        type={props.type}
        required
      />
    </div>
  );
}

export default Input;
