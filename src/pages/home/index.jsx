import React from "react";
import styles from "styles/home/index.module.css";
import TypeAnimation from "react-type-animation";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className={styles["home"]}>
      <header>
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        <span>F</span>
        <span>O</span>
        <span>L</span>
        <span>I</span>
        <span>O</span>
      </header>
      <section className={styles["text"]}>
        <div className={styles["first"]}>
          <TypeAnimation cursor={false} sequence={["Hello,"]} wrapper="h2" />
        </div>
        <div className={styles["second"]}>
          <TypeAnimation cursor={false} sequence={[1000, "I'm"]} wrapper="h2" />
          <TypeAnimation
            cursor={false}
            sequence={[1500, " Front-end "]}
            wrapper="h2"
          />
        </div>
        <div className={styles["second"]}>
          <TypeAnimation
            cursor={false}
            sequence={[2000, " Developer"]}
            wrapper="h2"
          />
        </div>
        <div className={styles["highlight"]}>
          <TypeAnimation
            cursor={false}
            sequence={[3000, "Suu3"]}
            wrapper="h2"
          />
        </div>
        <p>프론트 엔드 개발자 username의 포트폴리오입니다.</p>
      </section>
      <section className={styles["menu"]}>
        <div onClick={() => navigate("/about")}>
          <h3>About</h3>
          <ul className={styles["list"]}>
            <li>About</li>
            <li>TimeLine</li>
            <li>Contact</li>
          </ul>
        </div>
        <div onClick={() => navigate("/skills")}>
          <h3> Skills</h3>
          <ul className={styles["list"]}>
            <li>Skills</li>
            <li>Activities</li>
            <li>Awards</li>
          </ul>
        </div>
        <div onClick={() => navigate("/project")}>
          <h3>Project</h3>
          <ul className={styles["list"]}>
            <li>Side Project</li>
            <li>Personal Study</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Home;
