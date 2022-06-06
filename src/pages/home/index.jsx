import React from "react";
import styles from "styles/home/index.module.css";
import TypeAnimation from "react-type-animation";
import { IoIosRocket, IoIosStar, IoIosMoon } from "react-icons/io";

const Home = () => {
  return (
    <section className={styles[`home`]}>
      <div>
        <TypeAnimation cursor={false} sequence={["Hello,"]} wrapper="h2" />
      </div>
      <div>
        <TypeAnimation
          cursor={false}
          sequence={[1000, "I'm Front-end Developer"]}
          wrapper="h2"
        />
      </div>
      <div className={styles[`highlight`]}>
        <TypeAnimation cursor={false} sequence={[3000, "Suu3"]} wrapper="h2" />
      </div>
      <IoIosStar className={styles[`star`]} />
      <IoIosRocket className={styles[`rocket`]} />
      <IoIosMoon className={styles[`moon`]} />
    </section>
  );
};

export default Home;
