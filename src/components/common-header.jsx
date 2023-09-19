import React from "react";
import styles from "styles/components/common-header.module.css";

const CommonHeader = ({ content, id = undefined, item }) => {
  return (
    <h1 id={id} className={styles["header"]}>
      {content}
      {item && item}
    </h1>
  );
};

export default CommonHeader;
