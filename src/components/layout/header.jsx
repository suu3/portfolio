import React, { memo, useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "styles/layout/header.module.css";
import { IMAGES } from "lib/assets";
import { FaRocket } from "react-icons/fa";
import IconRow from "./icon-row";
import { useDispatch } from "react-redux";
import { changeSecondColor } from "redux/color";
import { useSelector } from "react-redux";
import { projectList } from "lib/projects";

const Rocket = memo(() => {
  return (
    <div className={styles[`profile-rocket`]}>
      <FaRocket />
    </div>
  );
});
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { value } = useSelector((state) => state.color);
  // useEffect(() => {
  //   if (location.pathname === "/about") {
  //     console.log("/about");
  //     // dispatch(changeFirstColor(value.secondColor));
  //     dispatch(changeSecondColor(styles[`orangeColor`]));
  //   } else if (location.pathname === "/skills") {
  //     console.log("/skills");
  //     // dispatch(changeFirstColor(value.secondColor));
  //     dispatch(changeSecondColor("#2A2550"));
  //   } else {
  //     console.log("/etc");
  //     // dispatch(changeFirstColor(value.secondColor));
  //     dispatch(changeSecondColor("#A5BECC"));
  //   }
  // }, [dispatch, location.pathname]);
  const [color, setColor] = useState(styles[`orangeColor`]);

  useEffect(() => {
    if (location.pathname === "/about") {
      // console.log("/about");
      setColor(styles[`orangeColor`]);
    } else if (location.pathname === "/skills") {
      // console.log("/skills");
      setColor(styles[`redPurple`]);
    } else {
      // console.log("/etc");
      setColor(styles[`skyBlue`]);
    }
  }, [location.pathname]);
  return (
    <header
      className={`${styles[`header`]}`}
      style={{
        "--last-color": color,
      }}
    >
      <div className={styles[`profile`]}>
        <Rocket />
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
                location.pathname.startsWith("/project")
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
