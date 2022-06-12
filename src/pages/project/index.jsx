import React, { useState, useEffect } from "react";
import styles from "styles/project/index.module.css";
import SideBar from "components/layout/side-bar";
import SubTitle from "components/sub-title";
import CommonHeader from "components/common-header";
import HashTag from "components/hash-tag";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { MdSmartToy } from "react-icons/md";
import Card from "components/project/card";
import MultiHashTag from "components/multi-hash-tag";
import { teamProjectList2021, teamProjectList2022 } from "lib/projects";
import AOS from "aos";

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
          <h3>분류</h3>
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
          <div>
            {(year === "2021" || year === "All") && <h4>- 2021</h4>}
            <ul>
              {(year === "2021" || year === "All") &&
                teamProjectList2021.map((v, i) => {
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
          <div>
            {(year === "2022" || year === "All") && <h4>- 2022</h4>}
            <ul>
              {(year === "2022" || year === "All") &&
                teamProjectList2022.map((v, i) => {
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
        </article>
        <div className="divider"></div>
        <SubTitle id="side" icon={<MdSmartToy />} content="Side Project" />
        <div className="divider"></div>
        <SubTitle
          id="personal"
          icon={<BsFillPersonFill />}
          content="Personal Project"
        />
      </section>
    </>
  );
};

export default Index;
