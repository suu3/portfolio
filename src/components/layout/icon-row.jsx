import React, { memo } from "react";
import styles from "styles/layout/icon-row.module.css";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";

const IconRow = () => {
  return (
    <nav className={styles[`icon-row`]}>
      <ul>
        <li>
          <AiFillGithub
            onClick={() => {
              window.location.href = "https://github.com/suu3";
            }}
          />
        </li>
        <li>
          <ImBlogger
            onClick={() => {
              window.location.href = "https://temp-ha3.tistory.com/";
            }}
          />
        </li>
        <li>
          <AiFillMail />
        </li>
      </ul>
    </nav>
  );
};

export default memo(IconRow);
