import React from "react";
import styles from "styles/components/common-header.module.css";

const CommonHeader = ({ content }) => {
  return <h1 className={styles[`header`]}>{content}</h1>;
};

export default CommonHeader;
