import React from "react";
import styles from "styles/project/gymt.module.css";
import SideBar from "components/layout/side-bar";
import ProjectSubTitle from "components/project/sub-title";
import { GYMT_IMAGES } from "lib/assets";
const development = [
  {
    content: "React Native",
    backgroundColor: "#F47C7C",
  },
  {
    content: "Expo",
    backgroundColor: "#839AA8",
  },
];

const prototype = [
  {
    content: "Figma",
    backgroundColor: "#FF06B7",
  },
];
const GymtSide = [
  {
    path: "/project/gymt#gymt",
    content: "gymt",
  },
  {
    path: "/project/gymt#information",
    content: (
      <p>
        프로젝트
        <br /> 정보
      </p>
    ),
  },
  {
    path: "/project/gymt#description",
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

const Gymt = (props) => {
  return (
    <section className={`${styles[`gymt`]} section`}>
      <SideBar obj={GymtSide} />
      <ProjectSubTitle
        icon={<img src={GYMT_IMAGES.LOGO} width={160} alt="logo" />}
        id="gymt"
        content={
          <p>
            공공 체육관
            <br /> 정보 제공 App ‘짐트’
          </p>
        }
      />
      <p>
        2021-2 경상북도 데이터 경진대회 제품 및 서비스 개발 부문 우수상 수상
        프로젝트입니다.
      </p>
      <h3 id="information">프로젝트 정보</h3>
      <div className={styles[`github`]}>
        <strong>Github</strong>
        <span className={styles[`link`]}>https://github.com/suu3/Gymt </span>
      </div>
      <div className={styles[`info`]}>
        <strong>팀원 수</strong>
        <span>3명</span>
      </div>
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
      <img src={GYMT_IMAGES.DESCRIPTION} width={800} alt="gymt description" />
      <div className={styles[`description`]}>
        <p>
          - 체육관 정보(종목, 가격, 운영 시간 등)를 검색하고 같이 운동할 사람을
          구할 수 있는 공공 체육 시설 정보 제공 모바일 앱입니다.
        </p>
        <p>- 부기능으로 대회 정보나 날씨, 커뮤니티 기능 등을 제공합니다.</p>
      </div>
      <h3 id="role">프로젝트 내 역할</h3>
      <div className={styles[`description`]}>
        <p>- 로고를 포함한 전체적인 디자인을 맡았습니다.</p>
        <p>
          - Firebase DB에 공공 데이터 포털 사이트에서 모은 데이터를 넣고,
          불러왔습니다.
        </p>
        <p>- 다음은 앱 내 구현 목록입니다.</p>
        <div className={styles[`list`]}>
          <p>
            1. 홈 화면을 구현했습니다. 탭과 슬라이더, 날씨 API를 사용했으며,
            대회 정보 화면의 경우 Firebase DB에서 데이터를 불러왔습니다.
          </p>
          <img src={GYMT_IMAGES.HOME} width={600} alt="home" />
          <p>
            2. 체육관 List 화면을 구성했습니다. Firebase의 DB에서 데이터를
            불러왔습니다.
          </p>
          <img src={GYMT_IMAGES.LIST} width={200} alt="list" />
          <p>3. 내 정보 & 로그인 화면 UI를 구성했습니다.</p>
          <img src={GYMT_IMAGES.LOGIN} width={400} alt="login mypage" />
        </div>
      </div>
    </section>
  );
};

export default Gymt;
