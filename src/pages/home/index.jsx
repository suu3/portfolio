import React from "react";
import styles from "styles/home/index.module.css";
import TypeAnimation from "react-type-animation";
import { IoIosRocket, IoIosStar, IoIosMoon } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GiRabbit } from "react-icons/gi";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className={styles[`home`]}>
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
      <IoIosStar className={styles[`star`]} />
      <IoIosRocket className={styles[`rocket`]} />
      <IoIosMoon className={styles[`moon`]} />
      <section className={styles[`text`]}>
        <div className={styles[`first`]}>
          <TypeAnimation cursor={false} sequence={["Hello,"]} wrapper="h2" />
        </div>
        <div className={styles[`second`]}>
          <TypeAnimation cursor={false} sequence={[1000, "I'm"]} wrapper="h2" />
          <TypeAnimation
            cursor={false}
            sequence={[1500, " Front-end "]}
            wrapper="h2"
          />
        </div>
        <div className={styles[`second`]}>
          <TypeAnimation
            cursor={false}
            sequence={[2000, " Developer"]}
            wrapper="h2"
          />
        </div>
        <div className={styles[`highlight`]}>
          <TypeAnimation
            cursor={false}
            sequence={[3000, "Suu3"]}
            wrapper="h2"
          />
          <GiRabbit />
        </div>
      </section>
      <section className={styles[`menu`]}>
        <div onClick={() => navigate("/about")}>
          About<p>click me</p>
        </div>
        <div onClick={() => navigate("/skills")}>
          Skills<p>click me</p>
        </div>
        <div onClick={() => navigate("/projects")}>
          Project<p>click me</p>
        </div>
      </section>
    </section>
  );
};

export default Home;
