import React, { memo, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "styles/layout/header.module.css";
import { IMAGES } from "lib/assets";
import { FaRocket, FaStarAndCrescent } from "react-icons/fa";
import IconRow from "./icon-row";

const Header = () => {
  const [headerColor, setHeaderColor] = useState("#536976");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/about") {
      setHeaderColor("white");
      console.log(headerColor);
    } else {
      setHeaderColor("#536976");
    }
  }, [headerColor, location.pathname]);
  return (
    <header
      className={`${styles[`header`]}`}
      style={{ "--color": headerColor }}
    >
      <div className={styles[`profile`]}>
        <div className={styles[`profile-rocket`]}>
          <FaRocket />
        </div>
        <img onClick={() => navigate("/")} src={IMAGES.PROFILE} alt="home" />
      </div>
      <nav>
        <ul className={styles[`nav`]}>
          <h1>SUU3</h1>
          <li onClick={() => navigate("/about")}>
            <span
              style={
                location.pathname === "/about"
                  ? { color: styles[`greenColor`] }
                  : { color: "black" }
              }
            >
              ABOUT
            </span>
          </li>
          <div className={styles[`border`]}></div>
          <li onClick={() => navigate("/skills")}>
            <span
              style={
                location.pathname === "/skills"
                  ? { color: styles[`greenColor`] }
                  : { color: "black" }
              }
            >
              SKILLS
            </span>
          </li>
          <div className={styles[`border`]}></div>
          <li onClick={() => navigate("/project")}>
            <span
              style={
                location.pathname === "/project"
                  ? { color: styles[`greenColor`] }
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
