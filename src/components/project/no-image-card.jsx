import React from "react";
import styles from "styles/project/no-image-card.module.css";
import { Link } from "react-router-dom";

const NoImageCard = ({ path, title, description, stack }) => {
  return (
    <Link
      data-aos="fade-up"
      data-aos-duration="1000"
      // data-aos-once="true"
      to={path}
    >
      <div className={styles[`card`]}>
        <div className={styles[`text-row`]}>
          <p className={styles[`title`]}>{title}</p>
          <p className={styles[`description`]}>{description}</p>
          <ul className={styles[`stacks`]}>
            {stack.map((v, i) => {
              return (
                <li
                  style={{
                    "--background-color": v.backgroundColor,
                    "--color": v.color,
                  }}
                  key={i}
                >
                  # {v.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default NoImageCard;
