import React from "react";
import styles from "styles/components/hash-tag.module.css";
const HashTag = ({ category, onClick, backgroundColor, color, content }) => {
  return (
    <div
      onClick={onClick}
      className={styles["hash-tag"]}
      style={
        category === content
          ? { "--background-color": backgroundColor, "--color": color }
          : { "--background-color": "transparent", "--color": color }
      }
    >
      {content}
    </div>
  );
};

export default HashTag;
