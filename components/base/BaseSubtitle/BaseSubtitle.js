import React from "react";
import styles from "./BaseSubtitle.module.scss";

const BaseSubtitle = ({ children, style, type }) => {
  return (
    <p
      className={`${styles.p} ${styles["BaseTitlePage_" + type]}`}
      style={{ ...style }}
    >
      {children}
    </p>
  );
};

export default BaseSubtitle;
