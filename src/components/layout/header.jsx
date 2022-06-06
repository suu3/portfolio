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
        <h1>SUU3</h1>
      </div>
      <nav>
        <ul className={styles[`nav`]}>
          <li onClick={() => navigate("/about")}>
            <FaStarAndCrescent style={{ color: "tomato" }} />
            <span>About</span>
          </li>
          <li onClick={() => navigate("/skills")}>
            <FaStarAndCrescent style={{ color: "tomato" }} />
            <span>Skills</span>
          </li>
          <li onClick={() => navigate("/project")}>
            <FaRocket style={{ color: "indigo" }} />
            <span>Project</span>
          </li>
        </ul>
      </nav>
      <IconRow />
    </header>
  );
};

export default memo(Header);
