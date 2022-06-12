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

const activityTimelines = [
  {
    period: "2021. 09 - 2021. 12",
    content: "소프트웨어 학부 알고리즘 튜터링 ‘알튜비튜’",
    detail: () => {
      return (
        <div className={styles[`modal-detail`]}>
          이화여자대학교 소프트웨어학부에서 진행한 알고리즘 튜터링입니다. 해당
          활동을 통해 여러가지 알고리즘 문제를 풀었습니다.
          <p>
            <strong>Github </strong>
          </p>
        </div>
      );
    },
  },
  {
    period: "2021. 12 - 2022. 02",
    content: "웹 프로그래밍 동아리 피로그래밍 16기",
    detail: () => {
      return <div>asdfddd</div>;
    },
  },
  {
    period: "2022. 04 ~ ",
    content: "웹 프로그래밍 동아리 피로그래밍 17기 운영진 교육팀",
    detail: () => {
      return <div>asdfddd</div>;
    },
  },
  {
    period: "2022. 03 - 2022. 06",
    content: "프로젝트 고도화 프로그램 UPF 2022SS",
    detail: () => {
      return <div>asdfddd</div>;
    },
  },
];

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
              <img
                alt="stack"
                src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"
              />
              <img
                alt="stack"
                src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white"
              />
              <img
                alt="stack"
                src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white"
              />
              <img
                alt="stack"
                src="https://img.shields.io/badge/Python-3766AB?style=flat-square&logo=Python&logoColor=white"
              />
              <img
                alt="stack"
                src="https://img.shields.io/badge/Django-092E20?style=flat-square&logo=Django&logoColor=white"
              />
              <img
                alt="stack"
                src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
              />
              <img
                alt="stack"
                src="https://img.shields.io/badge/React Native-61DAFB?style=flat-square&logo=React&logoColor=white"
              />
              <img
                alt="stack"
                src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"
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
                <strong>학점</strong> 4.11 / 4.3
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <strong>JLPT</strong> N2
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <strong>TOEIC</strong> 870
              </li>
            </ul>
          </div>
        </article>
        <article>
          <SubTitle
            content="Activities"
            id="activities"
            description={
              <p className={styles[`description`]}>
                새로운 경험과 사람들과의 만남을 좋아하는 저는 여러 활동을
                해왔습니다.
              </p>
            }
          />
          <TimeLine timelines={activityTimelines} />
        </article>
        <article>
          <SubTitle content="Awards" id="awards" />
        </article>
      </section>
    </>
  );
};

export default Skills;
