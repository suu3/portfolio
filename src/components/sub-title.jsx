import React from "react";
import styles from "styles/components/common-header.module.css";

const SubTitle = ({ content, id, description = undefined }) => {
  return (
    <h1 id={id} className={styles[`sub-title`]}>
      {content}
      {description && description}
    </h1>
  );
};

export default SubTitle;
