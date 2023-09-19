import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "components/common-header";
import SideBar from "components/layout/side-bar";
import styles from "styles/skills/index.module.css";
import SubTitle from "components/sub-title";
import { BsFillPencilFill } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import TimeLine from "components/about/timeline";
import { activityTimelines, awardsTimelines } from "lib/timelines";

const SkillsSide = [
  {
    path: "/skills#skills",
    content: "Skills",
  },
  {
    path: "/skills#activities",
    content: "Activities",
  },
  {
    path: "/skills#awards",
    content: "Awards",
  },
];

const Skills = (props) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <SideBar obj={SkillsSide} />
      <section className={`${styles[`skills`]} section`}>
        <CommonHeader content="Skills" id="skills" />
        <article className={styles[`grid`]}>
          <div>
            <h3>
              <MdComputer />
              Tech Stack
            </h3>
            <p
              className={styles[`tech`]}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img
                alt="stack"
                src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
              />
              <img
                alt="stack"
                src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
              />
              <img
                alt="stack"
                src="https://img.shields.io/badge/JavaScript-ffb13b?style=flat-square&logo=javascript&logoColor=white"
              />
            </p>
          </div>
          <div className={styles[`score`]}>
            <h3>
              <BsFillPencilFill />
              Scores
            </h3>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <strong>certificate</strong> 1
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <strong>certificate</strong> 2
              </li>
            </ul>
          </div>
        </article>
        <article>
          <SubTitle
            content="Activities"
            id="activities"
            description={<p className={styles["description"]}>description</p>}
          />
          <TimeLine timelines={activityTimelines} />
        </article>
        <article>
          <SubTitle content="Awards" id="awards" />
          <TimeLine timelines={awardsTimelines} />
        </article>
      </section>
    </>
  );
};

export default Skills;
