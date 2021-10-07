import React from "react";
import styles from "./BaseButton.module.scss";

const BaseButton = ({
  children,
  method,
  style,
  type = "primary",
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      style={{ ...style }}
      className={`${styles.Button} ${styles["Button_" + type]}`}
      onClick={method}
    >
      {children}
    </button>
  );
};

export default BaseButton;
