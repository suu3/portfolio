import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "components/common-header";
import styles from "styles/about/index.module.css";
import SubTitle from "components/sub-title";
import TimeLine from "components/about/timeline";
import SideBar from "components/layout/side-bar";
import Contact from "components/about/contact";
import { aboutTimelines } from "lib/timelines";

const Explain = () => {
  return (
    <article className={styles[`article`]}>
      <div className={styles[`hash-row`]}>
        <span className={styles[`hash`]}># hashtag 1</span>
        <span className={styles[`hash`]}># hashtag 2</span>
      </div>
      <p data-aos="fade-up" data-aos-duration="1000">
        I'm a Front-end Developer, username.
      </p>
      <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
        <strong>Introduction Title 1 </strong>
        <br />
        Introduction Paragraph 1
      </p>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <strong>Introduction Title 2</strong>
        <br />
        Introduction Paragraph 2
      </p>
      <p data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
        <strong>Introduction Title 2</strong>
        <br /> Introduction Paragraph 3
      </p>
    </article>
  );
};
const AboutSide = [
  {
    path: "/about#about",
    content: "About",
  },
  {
    path: "/about#timeline",
    content: "Timeline",
  },
  {
    path: "/about#contact",
    content: "Contact",
  },
];

const About = (props) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <SideBar obj={AboutSide} />
      <section className={`${styles[`about`]} section`}>
        <CommonHeader id="about" content="About" />
        <Explain />
        <SubTitle id="timeline" content="Timeline" />
        <TimeLine timelines={aboutTimelines} />
        <SubTitle id="contact" content="Contact" />
        <Contact />
      </section>
    </>
  );
};

export default About;
