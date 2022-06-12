import React from "react";
import styles from "styles/components/common-header.module.css";

const SubTitle = ({ content, id }) => {
  return (
    <h1 id={id} className={styles[`sub-title`]}>
      {content}
    </h1>
  );
};

export default SubTitle;
