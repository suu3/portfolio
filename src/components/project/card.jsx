import React from "react";
import styles from "styles/project/card.module.css";
import { Link } from "react-router-dom";

const Card = ({ imageSrc, path, title, period, category, stack }) => {
  return (
    <Link to={path} className={styles[`card`]}>
      <div>
        <img src={imageSrc} alt="project img" />
        <p className={styles[`category`]}>
          <span>{category}</span>
        </p>
      </div>
      <div className={styles[`text-row`]}>
        <p className={styles[`title`]}>{title}</p>
        <p className={styles[`period`]}>진행기간 : {period}</p>
        <ul className={styles[`stacks`]}>
          {stack.map((v, i) => {
            return (
              <li style={{ "--background-color": v.backgroundColor }} key={i}>
                # {v.content}
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
};

export default Card;
