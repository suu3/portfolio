import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "styles/components/common-header.module.css";

const ProjectSubTitle = ({
  icon = undefined,
  content,
  id,
  description = undefined,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <span onClick={() => navigate("/project")} className={styles[`goBack`]}>
        돌아가기
      </span>
      <h1 id={id} className={styles[`project-sub-title`]}>
        {icon && icon}
        {content}
        {description && description}
      </h1>
    </div>
  );
};

export default ProjectSubTitle;
