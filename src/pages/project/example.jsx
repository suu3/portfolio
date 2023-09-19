import React from "react";
import styles from "styles/project/buddy.module.css";
import SideBar from "components/layout/side-bar";
import ProjectSubTitle from "components/project/sub-title";

const development = [
  {
    content: "Stack 1",
    backgroundColor: "#47B5FF",
  },
  {
    content: "Stack 2",
    backgroundColor: "#FFC54D",
  },
  {
    content: "Stack 3",
    backgroundColor: "#F64668",
  },
];

const collaboration = [
  {
    content: "Stack 1",
    backgroundColor: "#26648e",
  },
  {
    content: "Stack 2",
    backgroundColor: "#4f8fc0",
  },
  {
    content: "Stack 3",
    backgroundColor: "#984063",
  },
];

const Side = [
  {
    path: "/project/example#subTitle",
    content: "subTitle",
  },
  {
    path: "/project/example#information",
    content: (
      <p>
        프로젝트
        <br /> 정보
      </p>
    ),
  },
  {
    path: "/project/example#description",
    content: (
      <p>
        프로젝트
        <br /> 개요
      </p>
    ),
  },
];

const Buddy = () => {
  return (
    <section className={`${styles[`buddy`]} section`}>
      <SideBar obj={Side} />
      <ProjectSubTitle id="subTitle" content={<p>sub-title</p>} />
      <p>description</p>
      <h3 id="information">프로젝트 정보</h3>
      <div className={styles["github"]}>
        <strong>Github</strong>
        <span className={styles["link"]}>github link</span>
      </div>
      <div className={styles["info"]}>
        <strong>팀원 수</strong>
        <span>n명</span>
      </div>
      <p className={styles["tool"]}>
        <strong>- 협업 툴</strong>
        <ul className={styles["stacks"]}>{/* stacks */}</ul>
      </p>
      <p className={styles["tool"]}>
        <strong>- 개발 환경</strong>
        <ul className={styles[`stacks`]}>{/* development */}</ul>
      </p>
      <p className={styles[`tool`]}>
        <strong>- 프로그래밍 언어</strong>
        <ul className={styles[`stacks`]}>{/* language */}</ul>
      </p>
      <h3 id="description">프로젝트 개요</h3>
      <div className={styles[`description`]}>project description</div>
    </section>
  );
};

export default Buddy;
