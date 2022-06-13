import React from "react";
import styles from "styles/project/paws.module.css";
import SideBar from "components/layout/side-bar";
import ProjectSubTitle from "components/project/sub-title";
import { PAWS_IMAGES } from "lib/assets";
const development = [
  {
    content: "NextJS",
    backgroundColor: "#B20600",
  },
  {
    content: "TypeScript",
    backgroundColor: "#34B3F1",
  },
  {
    content: "Spring boot",
    backgroundColor: "#82A284",
  },
];

const prototype = [
  {
    content: "Figma",
    backgroundColor: "#FF06B7",
  },
];
const collaboration = [
  {
    content: "Slack",
    backgroundColor: "#7C3E66",
    color: "white",
  },
  {
    content: "Notion",
    backgroundColor: "#251D3A",
    color: "white",
  },
];
const PawsSide = [
  {
    path: "/project/paws#paws",
    content: "paws",
  },
  {
    path: "/project/paws#information",
    content: (
      <p>
        프로젝트
        <br /> 정보
      </p>
    ),
  },
  {
    path: "/project/paws#description",
    content: (
      <p>
        프로젝트
        <br /> 개요
      </p>
    ),
  },
  {
    path: "/project/gymt#role",
    content: "역할",
  },
];

const Paws = () => {
  return (
    <section className={`${styles[`paws`]} section`}>
      <SideBar obj={PawsSide} />
      <ProjectSubTitle
        icon={<img src={PAWS_IMAGES.LOGO} width={160} alt="logo" />}
        id="paws"
        content={
          <p>
            반려동물 숏 폼<br /> 모바일 웹 ‘PAWS’
          </p>
        }
      />
      <h3 id="information">프로젝트 정보</h3>
      <div className={styles[`github`]}>
        <strong>Github</strong>
        <span className={styles[`link`]}>
          https://github.com/Numble3/Paws-Frontend (메인 사이트)
          <br />
          https://github.com/Numble3/admin (관리자 페이지)
        </span>
      </div>
      <div className={styles[`info`]}>
        <strong>팀원 수</strong>
        <span>5명</span>
      </div>
      <p className={styles[`tool`]}>
        <strong>- 협업 툴</strong>
        <ul className={styles[`stacks`]}>
          {collaboration.map((v, i) => {
            return (
              <li
                key={i}
                style={{
                  "--color": v.color,
                  "--background-color": v.backgroundColor,
                }}
              >
                {v.content}
              </li>
            );
          })}
        </ul>
      </p>
      <p className={styles[`tool`]}>
        <strong>- 프로토타입</strong>
        <ul className={styles[`stacks`]}>
          {prototype.map((v, i) => {
            return (
              <li key={i} style={{ "--background-color": v.backgroundColor }}>
                {v.content}
              </li>
            );
          })}
        </ul>
      </p>
      <p className={styles[`tool`]}>
        <strong>- 개발 환경</strong>
        <ul className={styles[`stacks`]}>
          {development.map((v, i) => {
            return (
              <li key={i} style={{ "--background-color": v.backgroundColor }}>
                {v.content}
              </li>
            );
          })}
        </ul>
      </p>
      <h3 id="description">프로젝트 개요</h3>
      <img src={PAWS_IMAGES.DESCRIPTION} width={800} alt="gymt description" />
      <div className={styles[`description`]}>
        <p>
          반려동물 숏 폼 모바일 웹 서비스입니다. (웹으로 개발되었으나, 모바일에
          맞춰져 있습니다.)
        </p>
        <p>- 반려동물 유튜브 영상이나 직접 찍은 영상을 올릴 수 있습니다. </p>
        <p>- 영상을 인기순, 최신순으로 볼 수 있습니다.</p>
        <p>- 좋아요로 관심 영상에 등록할 수 있고, 댓글을 달 수 있습니다.</p>
        <p>
          - 홈화면에서 일일 인기 영상을 볼 수 있습니다. (하루 동안의 좋아요
          증가수 기준)
        </p>
      </div>
      <h3 id="role">프로젝트 내 역할</h3>
      <div className={styles[`description`]}>
        <p>- 다음은 앱 내 구현 목록입니다.</p>
        <div className={styles[`list`]}>
          <p>1. 홈카테고리 & 검색으로 찾기 탭</p>
          <img src={PAWS_IMAGES.SEARCH} width={200} alt="home" />
          <p>2. 동영상 리스트 무한 스크롤 / 최신순 & 인기순</p>
          <img src={PAWS_IMAGES.SCROLL} width={400} alt="list" />
          <p>3. 동영상 업로드</p>
          <img src={PAWS_IMAGES.UPLOAD} width={400} alt="login mypage" />
          <p>4. 좋아요 기능, 코멘트창 무한 스크롤 및 API</p>
          <img src={PAWS_IMAGES.API} width={200} alt="login mypage" />
        </div>
      </div>
    </section>
  );
};

export default Paws;
