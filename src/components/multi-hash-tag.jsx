import React from "react";
import styles from "styles/components/hash-tag.module.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const MultiHashTag = ({
  category,
  onClick,
  backgroundColor,
  color,
  content,
}) => {
  return (
    <div
      onClick={onClick}
      className={styles[`hash-tag`]}
      style={
        category.includes(content)
          ? { "--background-color": backgroundColor, "--color": color }
          : { "--background-color": "transparent", "--color": color }
      }
    >
      {content}
      {category.includes(content) ? <AiFillEye /> : <AiFillEyeInvisible />}
    </div>
  );
};

export default MultiHashTag;
