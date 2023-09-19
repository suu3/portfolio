import React, { memo } from "react";
import styles from "styles/layout/icon-row.module.css";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { ImBlogger } from "react-icons/im";
import Tooltip from "@mui/material/Tooltip";

const IconRow = () => {
  return (
    <nav className={styles[`icon-row`]}>
      <ul>
        <li>
          <AiFillGithub
            onClick={() => {
              window.location.href = "#";
            }}
          />
        </li>
        <li>
          <ImBlogger
            onClick={() => {
              window.location.href = "#";
            }}
          />
        </li>
        <Tooltip placement="top" title="email address" arrow>
          <li>
            <AiFillMail
              onClick={() => {
                window.location.href = "#";
              }}
            />
          </li>
        </Tooltip>
      </ul>
    </nav>
  );
};

export default memo(IconRow);
