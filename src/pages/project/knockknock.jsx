import React from "react";
import styles from "styles/project/knockknock.module.css";
import SideBar from "components/layout/side-bar";
import ProjectSubTitle from "components/project/sub-title";
import { KNOCK_IMAGES } from "lib/assets";
import SubTitle from "components/sub-title";
const development = [
  {
    content: "Django",
    backgroundColor: "#1F4690",
  },
];
const deployment = [
  {
    content: "AWS EC2",
    backgroundColor: "#F15412",
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

const prototype = [
  {
    content: "Figma",
    backgroundColor: "#FF06B7",
  },
];
const KnockSide = [
  {
    path: "/project/knockknock#knockknock",
    content: "KnockKnock(Django)",
  },
  {
    path: "/project/knockknock#information",
    content: (
      <p>
        프로젝트
        <br /> 정보
      </p>
    ),
  },
  {
    path: "/project/knockknock#description",
    content: (
      <p>
        프로젝트
        <br /> 개요
      </p>
    ),
  },
  {
    path: "/project/knockknock#role",
    content: "역할(Django)",
  },
  {
    path: "/project/knockknock#react",
    content: "KnockKnock(React)",
  },
  {
    path: "/project/knockknock#react-role",
    content: "역할(React)",
  },
];
const KnockKnock = () => {
  return (
    <section className={`${styles[`knock`]} section`}>
      <SideBar obj={KnockSide} />
      <ProjectSubTitle
        icon={<img src={KNOCK_IMAGES.LOGO} width={160} alt="logo" />}
        id="knockknock"
        content={
          <p>
            동거인과의 생활 관리 웹
            <br /> ‘Knock/Knock’
          </p>
        }
      />
      <h3 id="information">프로젝트 정보</h3>
      <div className={styles[`github`]}>
        <strong>Github</strong>
        <span className={styles[`link`]}>
          https://github.com/piro16knockknock/knockknock
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
        <strong>- 배포</strong>
        <ul className={styles[`stacks`]}>
          {deployment.map((v, i) => {
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
      <img src={KNOCK_IMAGES.DESCRIPTION} width={700} alt="gymt description" />
      <div className={styles[`description`]}>
        <p>
          - 룸메이트와의 평화로운 거주 생활을 돕기 위한{" "}
          <strong>생활 관리 서비스</strong>입니다.
        </p>
        <p>
          - 사이트 이름인 <strong>“노크, 노크”</strong>는 아무리 한 집 아래에
          산다 해도 노크 정도는 하고 살자, 즉 각자의 공간을 유지하며 살아가자는
          의미입니다.
        </p>
        <p>
          - 공유 캘린더를 통한 빨래/청소 등의 할 일 관리, 생활 수칙 작성 등의
          기능을 제공합니다.
        </p>
      </div>
      <h3 id="role">ER Diagram</h3>
      <img src={KNOCK_IMAGES.ERD} width={800} alt="erd" />
      <h3 id="role">프로젝트 내 역할</h3>
      <div className={styles[`description`]}>
        <p>- ER Diagram을 설계했습니다.</p>
        <p>- 테스트 서버 배포 전, QA를 담당했습니다.</p>
        <p>
          - 다음은 사이트 내 페이지 구현 목록입니다. <br />
          주로 Django Ajax 통신, Html, CSS, JavaScript를 사용하여 구현했습니다.
        </p>
        <div className={styles[`list`]}>
          <p>
            1. 설정 메뉴(집 관리, 룸메이트 관리)를 구현했습니다. <br />집 정보
            업데이트, 유저 검색, 룸메이트 초대 및 초대 취소, 초대 링크 생성,
            룸메이트 목록 캐러셀 등을 작업했습니다.
          </p>
          <img src={KNOCK_IMAGES.SETTING} width={800} alt="home" />
          <p>
            2. 집 등록, 초대 링크, 노크하기(기존에 만들어져 있는 집에 들어가기
            위해 요청을 보내는 것), 노크 수락 및 거절 기능을 구현했습니다.
          </p>
          <img src={KNOCK_IMAGES.ENROLL} width={800} alt="enroll" />
          <p>
            3. 마이 페이지의 이사가기 기능과 이전 집 기록 보기, 이전 집 생활
            수칙을 현재 집에 가져오는 기능을 구현했습니다.
          </p>
          <img src={KNOCK_IMAGES.MYPAGE} width={800} alt="mypage" />
          <p>
            4. 로그인, 회원 가입, 회원 정보 업데이트, 프로필 사진 업데이트 UI를
            만들었습니다.
          </p>
          <img src={KNOCK_IMAGES.LOGIN} width={800} alt="login" />
        </div>
      </div>
      <div className="divider"></div>
      <SubTitle id="react" content="Knock/Knock React" />
      <div className={styles[`github`]}>
        <strong>Github</strong>
        <span className={styles[`link`]}>
          https://github.com/piro16knockknock/knockknock_react
        </span>
      </div>
      <div className={styles[`description`]}>
        <p>
          현재 UPF(United Project Festa)라는 개발자들과 교류하고, 프로젝트의
          고도화를 돕는 프로그램에 참여하여,
          <br /> 더 좋은 사용자 경험을 제공하기 위해 Django에서 React, NodeJS로
          스택 전환 중입니다.
        </p>
        <p>
          - Django에서 바닐라 자바스크립트로 구현했던 부분들을 React로 바꾸고
          있습니다.
        </p>
        <p>- 부트스트랩을 커스텀 컴포넌트로 교체하고 있습니다.</p>
        <p>- 디자인을 조금씩 바꾸고, 반응형을 조금씩 추가하고 있습니다.</p>
      </div>
      <h3 id="react-role">현재까지의 역할 및 구현 사항</h3>
      <div className={styles[`description`]}>
        <p>
          반응형 헤더, 모달, 캐러셀 등 기존에 맡았던 페이지와 동일하게 역할을
          맡아 구현해나가고 있습니다.
        </p>
      </div>
      <img src={KNOCK_IMAGES.REACT} width={800} alt="react" />
    </section>
  );
};

export default KnockKnock;
