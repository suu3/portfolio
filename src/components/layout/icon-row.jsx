import React from "react";
import styles from "styles/layout/icon-row.module.css";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";

const IconRow = () => {
  return (
    <nav className={styles[`icon-row`]}>
      <ul>
        <li>
          <AiFillGithub />
        </li>
        <li>
          <ImBlogger />
        </li>
        <li>
          <AiFillMail />
        </li>
      </ul>
    </nav>
  );
};

export default IconRow;
