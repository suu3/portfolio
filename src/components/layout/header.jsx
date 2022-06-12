import React, { memo, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "styles/layout/header.module.css";
import { IMAGES } from "lib/assets";
import { FaRocket } from "react-icons/fa";
import IconRow from "./icon-row";
import { useDispatch } from "react-redux";
import { changeFirstColor, changeSecondColor } from "redux/color";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.color);
  useEffect(() => {
    if (location.pathname === "/about") {
      // dispatch(changeFirstColor(value.secondColor));
      dispatch(changeSecondColor(styles[`orangeColor`]));
    } else if (location.pathname === "/skills") {
      // dispatch(changeFirstColor(value.secondColor));
      dispatch(changeSecondColor("#2A2550"));
    } else {
      // dispatch(changeFirstColor(value.secondColor));
      dispatch(changeSecondColor("#A5BECC"));
    }
  }, [dispatch, location.pathname, value.secondColor]);
  return (
    <header
      className={`${styles[`header`]}`}
      style={{
        // "--first-color": value.firstColor,
        "--last-color": value.secondColor,
      }}
    >
      <div className={styles[`profile`]}>
        <div className={styles[`profile-rocket`]}>
          <FaRocket />
        </div>
        <img onClick={() => navigate("/")} src={IMAGES.PROFILE} alt="home" />
      </div>
      <nav>
        <ul className={styles[`nav`]}>
          <h1 style={{ zIndex: 1 }}>SUU3</h1>
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
