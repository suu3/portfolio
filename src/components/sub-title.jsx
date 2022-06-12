import React from "react";
import styles from "styles/components/common-header.module.css";

const SubTitle = ({
  icon = undefined,
  content,
  id,
  description = undefined,
}) => {
  return (
    <h1 id={id} className={styles[`sub-title`]}>
      {icon && icon}
      {content}
      {description && description}
    </h1>
  );
};

export default SubTitle;
