import React from "react";

import LoaderLime from "../../assets/img/loaderLime";
import styles from "./LoaderField.module.scss";

const LoaderField = () => {
  return (
    <div className={styles.Loader}>
      <div className={styles.rotating}>
        <LoaderLime />
      </div>
    </div>
  );
};
export default LoaderField;
