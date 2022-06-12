import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "components/common-header";
import SideBar from "components/layout/side-bar";
import styles from "styles/skills/index.module.css";

const SkillsSide = [
  {
    path: "/skills#skills",
    content: "Skills",
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
        <div>Skills</div>
      </section>
    </>
  );
};

export default Skills;
