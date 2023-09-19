import React, { memo, useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "styles/layout/header.module.css";
import { FaRocket } from "react-icons/fa";
import IconRow from "./icon-row";

const Rocket = memo(() => {
  return (
    <div className={styles["profile-rocket"]}>
      <FaRocket />
    </div>
  );
});
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [color, setColor] = useState(styles["orangeColor"]);

  useEffect(() => {
    if (location.pathname === "/about") {
      setColor(styles["orangeColor"]);
    } else if (location.pathname === "/skills") {
      setColor(styles["redPurple"]);
    } else {
      setColor(styles["skyBlue"]);
    }
  }, [location.pathname]);

  return (
    <header
      className={`${styles["header"]}`}
      style={{
        "--last-color": color,
      }}
    >
      <div className={styles["profile"]}>
        <Rocket />
        <img
          onClick={() => navigate("/")}
          width={200}
          height={200}
          src={"#"}
          alt="home"
        />
      </div>
      <nav>
        <ul className={styles["nav"]}>
          <h1 style={{ zIndex: 1 }}>UserName</h1>
          <li onClick={() => navigate("/about")}>
            <span
              style={
                location.pathname === "/about"
                  ? { color: styles["greenColor"] }
                  : { color: "black" }
              }
            >
              ABOUT
            </span>
          </li>
          <div className={styles["border"]} />
          <li onClick={() => navigate("/skills")}>
            <span
              style={
                location.pathname === "/skills"
                  ? { color: styles["greenColor"] }
                  : { color: "black" }
              }
            >
              SKILLS
            </span>
          </li>
          <div className={styles["border"]}></div>
          <li onClick={() => navigate("/project")}>
            <span
              style={
                location.pathname.startsWith("/project")
                  ? { color: styles["greenColor"] }
                  : { color: "black" }
              }
            >
              PROJECT
            </span>
          </li>
        </ul>
      </nav>
      <IconRow />
    </header>
  );
};

export default memo(Header);
