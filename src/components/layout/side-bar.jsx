import React from "react";
import styles from "styles/layout/side-bar.module.css";
import { HashLink as Link } from "react-router-hash-link";

const SideBar = ({ obj }) => {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  return (
    <aside className={styles[`side`]}>
      <ul>
        {obj.map((v, i) => {
          return (
            <Link scroll={(el) => scrollWidthOffset(el)} to={v.path}>
              <li>{v.content}</li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
