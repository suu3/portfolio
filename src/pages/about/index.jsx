import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "components/common-header";
import styles from "styles/about/index.module.css";
import SubTitle from "components/sub-title";
import Switch from "@mui/material/Switch";
import TimeLine from "components/about/timeline";
import SideBar from "components/layout/side-bar";
import Contact from "components/about/contact";
import { IMAGES } from "lib/assets";

const aboutTimelines = [
  {
    period: "1997. 07. 15",
    content: "",
  },

  {
    period: "2013. 03 - 2015. 12",
    content: "안산동산고등학교 졸업",
  },
  {
    period: "2016. 03 - 2022. 08",
    content: "이화여자대학교 컴퓨터공학과 졸업 예정",
  },
];
const Explain = () => {
  return (
    <article className={styles[`article`]}>
      <div className={styles[`hash-row`]}>
        <span className={styles[`hash`]}># 성장이 고픈 개발자</span>
        <span className={styles[`hash`]}># 협업을 즐기는 개발자</span>
      </div>
      {/* <div className={styles[`emoji`]}>
        <img alt="emoji" src={IMAGES.EMOJI} />
      </div> */}
      <p data-aos="fade-up" data-aos-duration="1000">
        도전하고 성장하는 프론트 엔드 개발자, <strong>변수경</strong>입니다.
      </p>
      <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
        <strong>저는 새로운 기술에 도전하는 것을 좋아합니다. </strong>
        <br /> 다양한 웹, 앱, 딥러닝 등의 프로젝트를 해온 저는 새로운 기술과
        마주칠 일이 많았습니다. <br />
        그때마다 저는 강의를 듣거나 기술 블로그를 찾아보며 공부하고, 배운 내용을
        실전 프로젝트에 최대한 적용하여 제 것으로 만들곤 했습니다.
      </p>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <strong>새로운 경험에 대한 도전 또한 좋아합니다. </strong>
        <br />
        이는 제가 ‘실패-원인 분석-발전-재도전’이라는 원칙을 항상 마음속에 두어,
        어떤 결과를 마주하더라도 그것을 양분으로 성장하는 힘을 가졌기
        때문입니다. <br />
        저는 공모전이나 개발 챌린지, 프로젝트 고도화 프로그램, 튜터링 프로그램
        등에 참여하기도 하며 매일 도전하고 경험하며 살고 있습니다. 이런 도전을
        통해 저는 나날이 성장합니다.
      </p>
      <p data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
        <strong>협업을 좋아하는 개발자이기도 합니다. </strong>
        <br />팀 프로젝트의 장점은 혼자서는 발견할 수 없었던 문제들을 해결할 수
        있다는 것과 단기간에 멋진 결과물을 내는 힘이라고 생각합니다. <br />
        저는 이런 팀 프로젝트의 장점에 매력을 느끼고 장단기에 걸친 다양한 팀
        프로젝트를 진행하면서 팀원 간의 소통 방법을 익혀왔습니다.
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

const Item = ({ on, setOn }) => {
  return (
    <div className={styles[`switch`]}>
      <span>개발자 변수경</span>
      <Switch checked={on} onChange={() => setOn(!on)} color="secondary" />
      <span>사람 변수경</span>
    </div>
  );
};

const About = (props) => {
  useEffect(() => {
    AOS.init();
  });
  const [on, setOn] = useState(false);
  return (
    <>
      <SideBar obj={AboutSide} />
      <section className={`${styles[`about`]} section`}>
        <CommonHeader
          id="about"
          content="About"
          // item={<Item on={on} setOn={setOn} />}
        />
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
