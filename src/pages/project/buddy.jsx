import React from "react";
import styles from "styles/project/buddy.module.css";
import SideBar from "components/layout/side-bar";
import ProjectSubTitle from "components/project/sub-title";
import { BUDDY_IMAGES } from "lib/assets";

const development = [
  {
    content: "Microsoft Azure",
    backgroundColor: "#47B5FF",
  },
  {
    content: "Google Colab",
    backgroundColor: "#FFC54D",
  },
  {
    content: "Raspberry Pi 3B+",
    backgroundColor: "#F64668",
  },
];

const collaboration = [
  {
    content: "Trello",
    backgroundColor: "#26648e",
  },
  {
    content: "Google Docs",
    backgroundColor: "#4f8fc0",
  },
  {
    content: "Slack",
    backgroundColor: "#984063",
  },
];

const BuddySide = [
  {
    path: "/project/buddy#buddy",
    content: "Buddy",
  },
  {
    path: "/project/buddy#information",
    content: (
      <p>
        프로젝트
        <br /> 정보
      </p>
    ),
  },
  {
    path: "/project/buddy#demo",
    content: "시연 영상",
  },
  {
    path: "/project/buddy#description",
    content: (
      <p>
        프로젝트
        <br /> 개요
      </p>
    ),
  },
  {
    path: "/project/buddy#poster",
    content: "포스터",
  },
  {
    path: "/project/buddy#role",
    content: "역할",
  },
];

const Buddy = () => {
  return (
    <section className={`${styles[`buddy`]} section`}>
      <SideBar obj={BuddySide} />
      <ProjectSubTitle
        icon={<img src={BUDDY_IMAGES.LOGO} width={160} alt="logo" />}
        id="buddy"
        content={
          <p>
            딥러닝 기반 심리안정
            <br /> 챗봇 스피커 버디
          </p>
        }
      />
      <p>
        2021-2 졸업 프로젝트 대상 수상작 / 2021-2 이화여대 소프트웨어학부
        창업경진대회 본선 진출작입니다.
      </p>
      <h3 id="information">프로젝트 정보</h3>
      <div className={styles[`github`]}>
        <strong>Github</strong>
        <span className={styles[`link`]}>
          https://github.com/School-is-hard/Chatbot_Buddy
        </span>
      </div>
      <div className={styles[`info`]}>
        <strong>팀원 수</strong>
        <span>3명</span>
      </div>
      <p className={styles[`tool`]}>
        <strong>- 협업 툴</strong>
        <ul className={styles[`stacks`]}>
          {collaboration.map((v, i) => {
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
      <p className={styles[`tool`]}>
        <strong>- 프로그래밍 언어</strong>
        <ul className={styles[`stacks`]}>
          <li style={{ "--background-color": "#1363DF" }}>Python</li>
        </ul>
      </p>
      <h3 id="demo">시연 영상</h3>
      <iframe
        width="800"
        height="500"
        src="https://www.youtube.com/embed/1pYcX_lvk3s"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3 id="description">프로젝트 개요</h3>
      <img src={BUDDY_IMAGES.LOOK} alt="buddy look" />
      <div className={styles[`description`]}>
        <p>
          - 얼굴 인식을 통한 감정 분석 후 말을 걸어주는
          <strong>심리 안정 음성 챗봇 스피커</strong>입니다.
        </p>
        <p>
          - 친구라는 뜻과 사용자에게 친근하게 다가갈 수 있도록
          <strong>‘Buddy’</strong>라는 이름으로 네이밍 및 디자인했습니다.
        </p>
      </div>
      <h3>버디 시나리오</h3>
      <div className={styles[`scenario`]}>
        <p>1. 사용자의 얼굴을 촬영하여 표정 속 감정 분석</p>
        <p>
          2. 우울함이 감지되면 먼저 말을 걸고, 그렇지 않으면 이름을 부를 때까지
          대기
        </p>
        <p>3. 대화가 시작되면 사용자의 발화를 녹음 후 text로 변환</p>
        <p>4. 배포한 API를 통해 사용자 발화 목적 분류 및 답변 생성</p>
        <p>5. 생성된 답변을 목소리로 변환</p>
        <p>6. 스피커를 통해 재생</p>
        <p>7. 우울함이 나아지지 않으면 음악 권유 및 재생</p>
      </div>
      <h3 id="poster">프로젝트 포스터</h3>
      <img src={BUDDY_IMAGES.POSTER} alt="poster" />
      <h3 id="role">프로젝트 내 역할</h3>
      <div className={styles[`description`]}>
        <p>- 버디 외형 & 포스터 & 제품 설명서 디자인을 맡았습니다.</p>
        <p>
          - Microsoft azure에서 제공하는 얼굴 표정 인식 API를 다루는 일을
          맡았습니다.
        </p>
        <p>
          - 최종적으로 쓰이진 않았지만, 챗봇의 목소리로 사용을 고려했었던
          Multispeaker-Tacotron을 학습 시키고 성능을 검증하는 일을 맡았습니다.
        </p>
        <p>- 챗봇 데이터 전처리 및 정확도 높이는 일을 맡았습니다.</p>
      </div>
    </section>
  );
};

export default Buddy;
