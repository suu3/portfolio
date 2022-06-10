import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "components/common-header";

const About = (props) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section>
      <CommonHeader content="Skills" />
      <div>Skills</div>
    </section>
  );
};

export default About;
