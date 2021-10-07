import React from "react";
import styles from "./BaseInput.module.scss";

const BaseInput = ({ value, placeholder, onChange, type = "text", style }) => {
  return (
    <div className={styles.Wrapper}>
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className={styles.Input}
        style={{ ...style }}
      />
    </div>
  );
};

export default BaseInput;
