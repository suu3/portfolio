import React, { useState, useEffect } from "react";
import styles from "styles/project/index.module.css";
import SideBar from "components/layout/side-bar";
import SubTitle from "components/sub-title";
import CommonHeader from "components/common-header";
import HashTag from "components/hash-tag";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { MdSmartToy } from "react-icons/md";
import Card from "components/project/card";
import NoImageCard from "components/project/no-image-card";
import MultiHashTag from "components/multi-hash-tag";
import {
  teamProjectList2021,
  teamProjectList2022,
  sideProjectList2021,
  personalProjectList2021,
  personalProjectList2022,
} from "lib/projects";
import AOS from "aos";

const Explain = () => {
  return (
    <article className={styles[`article`]}>
      <p data-aos="fade-up" data-aos-duration="1000">
        다음은 제가
        <strong>프론트 엔드 개발자로의 꿈을 확립해나가는 과정</strong>에서 해 온
        프로젝트들입니다.
      </p>
      <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
        저는 저의 첫 프로젝트인 [‘Buddy’
        프로젝트](https://www.notion.so/Buddy-257b0a0af9ef47d7bf87efd9640c6a8a)를
        하면서 **클라우드 서비스와 딥러닝 기술**에 대해 먼저 접하게 되었고, 장기
        프로젝트를 하면서 팀원들과의 소통방법을 익혔습니다.
      </p>
      <p data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
        Buddy 프로젝트를 진행하면서 들었던 학교 웹 UX UI 관련 수업인 ‘HCI’
        수업을 듣고 처음으로 프론트 엔드 개발자 진로에 대한 흥미를 갖게
        되었습니다. - 저는 바로 다음 방학, 프론트 엔드에 대한 흥미를 확인하기
        위해 [‘짐트’
        프로젝트](https://www.notion.so/App-573731fd5dda415a8367eed109c75e0c)를
        통해 처음으로 프론트엔드 기술인 **React Native**를 공부하게 되었고,
        팀원들과 공모전에 나가 수상하면서 프론트 엔드 진로에 대한 확신을 갖게
        되었습니다.
      </p>
      <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
        {" "}
        프론트 엔드 개발자가 되기 위해 어떤 역량을 키워야할지 계속해서
        고민해왔던 저는, 학교 수업에서는 **웹 수업과 React Native 수업**을
        들었고, 수업을 통해 [Rainbow
        프로젝트](https://www.notion.so/Rainbow-c5044b1db2f9435dbb5324b81ccd3e08)와
        [Balancing Life
        프로젝트](https://www.notion.so/Balancing-Life-decf625ebc7c4e8888d0cf9bcc49b703)를
        수행했습니다.
      </p>
      <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
        한편, 혼자서는
        **[React_Practice](https://www.notion.so/React_practice-9a12143c37164b599571d0cd934b759a)**라는
        레포지토리를 파서 혼자 컴포넌트를 만들어보며 프론트 엔드로의 꿈을
        계속해서 키워갔습니다. - 개발자들과의 체계적인 협업 경험이 부족하다
        생각했던 저는, [웹 개발 동아리 ‘피로그래밍’
        활동](https://www.notion.so/a7e51316d8644b58a069c8559aaa8a97)을 하면서
        **컨벤션, 브랜치 규칙 등의 협업 방법**들을 습득했고, [Knock Knock
        프로젝트](https://www.notion.so/Knock-Knock-1f86167d768a4dd3ab9823f28279ebf5)를
        배포해보는 경험을 하게 되었습니다.
      </p>
      <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
        - 동아리 활동을 하면서도 저는 프론트 엔드에 대한 공부를 놓지 않기 위해
        **JS ES6 강의**나 **리액트 클론코딩 강의**를 통해 계속해서 역량을
        쌓아왔습니다.
      </p>
      <p>
        - 동아리 활동이 끝나고, Knock Knock 프로젝트 팀원들과 프론트 & 백, 각자
        분야의 역량을 더 쌓아나가고자 프로젝트 고도화 프로그램인 **UPF
        프로그램**에 참여하여, **Django에서 NodeJS와 React로 기술 스택을
        전환**하고 있습니다.
      </p>
      <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000">
        - 최근에는 **TypeScript와 React**를 실전 프로젝트에 적용해봐야겠다는
        생각으로 혼자 [영화
        사이트](https://www.notion.so/movie_web-side-project-4d9871db9142428ebbaed8f5cc5b19ca)를
        만들었고, **프론트-백-디자이너** 역할이 분리된 프로젝트 경험을
        쌓아야겠다는 생각에서 **NextJS와 TypeScript**를 사용한 [‘포즈’라는
        팀프로젝트](https://www.notion.so/PAWS-7c8fe7dcfca64a37a839bed414dc1101)를
        수행하기도 했습니다.
      </p>
    </article>
  );
};
const projectSide = [
  {
    path: "/project#project",
    content: "Project",
  },
  {
    path: "/project#team",
    content: "Team",
  },
  {
    path: "/project#side",
    content: "Side",
  },
  {
    path: "/project#personal",
    content: "Personal",
  },
];

const Index = (props) => {
  const [year, setYear] = useState("All");
  const [services, setServices] = useState(["Deep Learning", "Web", "Mobile"]);
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <SideBar obj={projectSide} />
      <section className={`${styles[`about`]} section`}>
        <CommonHeader content="Project" id="project" />
        <article className={styles[`category`]}>
          {/* <Explain /> */}
          <h3>
            분류<p>연도별, 종류별로 프로젝트를 확인할 수 있습니다.</p>
          </h3>
          <h4>- 연도별</h4>
          <div>
            <HashTag
              category={year}
              onClick={() => setYear("All")}
              content="All"
            />
            <HashTag
              category={year}
              onClick={() => setYear("2022")}
              content="2022"
            />
            <HashTag
              category={year}
              onClick={() => setYear("2021")}
              content="2021"
            />
          </div>
          <h4>- 서비스 종류별</h4>
          <div>
            <MultiHashTag
              category={services}
              onClick={() => {
                if (services.includes("Deep Learning")) {
                  setServices((p) => {
                    const filtered = p.filter((e) => e !== "Deep Learning");
                    return filtered;
                  });
                } else {
                  setServices((p) => [...p, "Deep Learning"]);
                }
              }}
              backgroundColor={styles[`skyBlue`]}
              content="Deep Learning"
            />
            <MultiHashTag
              category={services}
              onClick={() => {
                if (services.includes("Web")) {
                  setServices((p) => {
                    const filtered = p.filter((e) => e !== "Web");
                    return filtered;
                  });
                } else {
                  setServices((p) => [...p, "Web"]);
                }
              }}
              backgroundColor={styles[`orangeColor`]}
              content="Web"
            />
            <MultiHashTag
              category={services}
              onClick={() => {
                if (services.includes("Mobile")) {
                  setServices((p) => {
                    const filtered = p.filter((e) => e !== "Mobile");
                    return filtered;
                  });
                } else {
                  setServices((p) => [...p, "Mobile"]);
                }
              }}
              backgroundColor={styles[`greenColor`]}
              content="Mobile"
            />
          </div>
        </article>
        <SubTitle
          id="team"
          icon={<BsFillPeopleFill />}
          content="Team Project"
        />
        <article className={styles[`team`]}>
          {(year === "2021" || year === "All") && (
            <div>
              <h4>- 2021</h4>
              <ul>
                {teamProjectList2021.map((v, i) => {
                  if (!services.includes(v.category.content)) return <></>;
                  return (
                    <Card
                      title={v.title}
                      key={i}
                      imageSrc={v.imageSrc}
                      path={v.path}
                      period={v.period}
                      category={v.category}
                      stack={v.stack}
                    />
                  );
                })}
              </ul>
            </div>
          )}
          {(year === "2022" || year === "All") && (
            <div>
              <h4>- 2022</h4>
              <ul>
                {teamProjectList2022.map((v, i) => {
                  if (!services.includes(v.category.content)) return <></>;
                  return (
                    <Card
                      title={v.title}
                      key={i}
                      imageSrc={v.imageSrc}
                      path={v.path}
                      period={v.period}
                      category={v.category}
                      stack={v.stack}
                    />
                  );
                })}
              </ul>
            </div>
          )}
        </article>
        <div className="divider"></div>
        <SubTitle id="side" icon={<MdSmartToy />} content="Side Project" />
        <article className={styles[`team`]}>
          {(year === "2021" || year === "All") && (
            <div>
              <h4>- 2021</h4>
              <ul>
                {sideProjectList2021.map((v, i) => {
                  if (!services.includes(v.category.content)) return <></>;
                  return (
                    <Card
                      title={v.title}
                      key={i}
                      imageSrc={v.imageSrc}
                      path={v.path}
                      period={v.period}
                      category={v.category}
                      stack={v.stack}
                    />
                  );
                })}
              </ul>
            </div>
          )}
        </article>
        <div className="divider"></div>
        <SubTitle
          id="personal"
          icon={<BsFillPersonFill />}
          content="Personal Study(Project)"
        />
        <article className={styles[`personal`]}>
          {(year === "2021" || year === "All") && (
            <div>
              <h4>- 2021</h4>
              <ul>
                {personalProjectList2021.map((v, i) => {
                  return (
                    <NoImageCard
                      title={v.title}
                      key={i}
                      path={v.path}
                      description={v.description}
                      stack={v.stack}
                    />
                  );
                })}
              </ul>
            </div>
          )}
          {(year === "2022" || year === "All") && (
            <div>
              <h4>- 2022</h4>
              <ul>
                {personalProjectList2022.map((v, i) => {
                  return (
                    <NoImageCard
                      title={v.title}
                      key={i}
                      path={v.path}
                      description={v.description}
                      stack={v.stack}
                    />
                  );
                })}
              </ul>
            </div>
          )}
        </article>
      </section>
    </>
  );
};

export default Index;
