import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CommonHeader from "components/common-header";
import styles from "styles/about/index.module.css";
import TimeLine from "components/about/timeline";
const About = (props) => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <section className={styles[`about`]}>
      <CommonHeader content="About" />
      <article className={styles[`article`]} data-aos="fade-up">
        <p>도전하고 성장하는 프론트 엔드 개발자, 변수경입니다.</p>
        <p>
          <strong>저는 새로운 기술에 도전하는 것을 좋아합니다. </strong> 다양한
          웹, 앱, 딥러닝 등의 프로젝트를 해온 저는 새로운 기술과 마주칠 일이
          많았습니다. 그때마다 저는 강의를 듣거나 기술 블로그를 찾아보며
          공부하고, 배운 내용을 실전 프로젝트에 최대한 적용하여 제 것으로 만들곤
          했습니다.
        </p>
        <p>
          <strong>새로운 경험에 대한 도전 또한 좋아합니다. </strong>
          이는 제가 ‘실패-원인 분석-발전-재도전’이라는 원칙을 항상 마음속에
          두어, 어떤 결과를 마주하더라도 그것을 양분으로 성장하는 힘을 가졌기
          때문입니다. 저는 공모전이나 개발 챌린지, 프로젝트 고도화 프로그램,
          튜터링 프로그램 등에 참여하기도 하며 매일 도전하고 경험하며 살고
          있습니다. 이런 도전을 통해 저는 나날이 성장합니다.
        </p>
        <p>
          <strong>협업을 좋아하는 개발자이기도 합니다. </strong>팀 프로젝트의
          장점은 혼자서는 발견할 수 없었던 문제들을 해결할 수 있다는 것과
          단기간에 멋진 결과물을 내는 힘이라고 생각합니다. 저는 이런 팀
          프로젝트의 장점에 매력을 느끼고 장단기에 걸친 다양한 팀 프로젝트를
          진행하면서 팀원 간의 소통 방법을 익혀왔습니다.
        </p>
      </article>
      <TimeLine />
    </section>
  );
};

export default About;
