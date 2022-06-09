import React from "react";
import styles from "styles/components/common-header.module.css";

const SubTitle = ({ content }) => {
  return <h1 className={styles[`sub-title`]}>{content}</h1>;
};

export default SubTitle;
