import React, { useState, useEffect } from "react";
import styles from "styles/project/index.module.css";
import SideBar from "components/layout/side-bar";
import SubTitle from "components/sub-title";
import CommonHeader from "components/common-header";
import HashTag from "components/hash-tag";
import { BsFillPeopleFill, BsFillPersonFill } from "react-icons/bs";
import Card from "components/project/card";
import NoImageCard from "components/project/no-image-card";
import MultiHashTag from "components/multi-hash-tag";
import { teamProjectList2021, personalProjectList2021 } from "lib/projects";
import AOS from "aos";

const projectSide = [
  {
    path: "/project#project",
    content: "Project",
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

const Index = () => {
  const [year, setYear] = useState("All");
  const [services, setServices] = useState(["Deep Learning", "Web", "Mobile"]);

  const onClickHashTag = (filter) => {
    if (filter && services.includes(filter)) {
      setServices((p) => {
        const filtered = p.filter((e) => e !== filter);
        return filtered;
      });
    } else {
      setServices((p) => [...p, filter]);
    }
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <SideBar obj={projectSide} />
      <section className={`${styles["about"]} section`}>
        <CommonHeader content="Project" id="project" />
        <article className={styles["category"]}>
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
              onClick={() => setYear("2021")}
              content="2021"
            />
          </div>
          <h4>- 서비스 종류별</h4>
          <div>
            <MultiHashTag
              category={services}
              backgroundColor={styles["skyBlue"]}
              filter="Deep Learning"
              onClick={() => onClickHashTag("Deep Learning")}
            />
            <MultiHashTag
              category={services}
              backgroundColor={styles["orangeColor"]}
              filter="Web"
              onClick={() => onClickHashTag("Web")}
            />
            <MultiHashTag
              category={services}
              backgroundColor={styles["greenColor"]}
              filter="Mobile"
              onClick={() => onClickHashTag("Mobile")}
            />
          </div>
        </article>
        <SubTitle
          id="side"
          icon={<BsFillPeopleFill />}
          content="Side Project"
        />
        <article className={styles["team"]}>
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
        </article>
        <div className="divider"></div>
        <SubTitle
          id="personal"
          icon={<BsFillPersonFill />}
          content="Personal Study(Project)"
        />
        <article className={styles["personal"]}>
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
        </article>
      </section>
    </>
  );
};

export default Index;
