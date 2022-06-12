import { AiFillGithub, AiTwotoneHome } from "react-icons/ai";
import styles from "styles/skills/index.module.css";

export const aboutTimelines = [
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
export const activityTimelines = [
    {
      period: "2021. 09 - 2021. 12",
      content: "소프트웨어 학부 알고리즘 튜터링 ‘알튜비튜’",
      detail: () => {
        return (
          <div className={styles[`modal-detail`]}>
            <p>
              <strong>
                <AiFillGithub />
                Github
              </strong>
              <span
                className={styles[`link`]}
                onClick={() => {
                  window.location.href =
                    "https://github.com/Altu-Bitu/Altu-Bitu-Suu";
                }}
              >
                https://github.com/Altu-Bitu/Altu-Bitu-Suu
              </span>
            </p>
            <span>
              이화여자대학교 소프트웨어학부에서 진행한 알고리즘 튜터링입니다.
            </span>
            <br />
            <span>해당 활동을 통해 여러가지 알고리즘 문제를 풀었습니다.</span>
          </div>
        );
      },
    },
    {
      period: "2021. 12 - 2022. 02",
      content: "웹 프로그래밍 동아리 피로그래밍 16기",
      detail: () => {
        return (
          <div className={styles[`modal-detail`]}>
            <p>
              <strong
                style={{
                  "--background-color": styles[`darkPurple`],
                  "--color": "white",
                }}
              >
                <AiTwotoneHome />
                Site
              </strong>
              <span
                className={styles[`link`]}
                onClick={() => {
                  window.location.href = "https://pirogramming.com/";
                }}
              >
                https://pirogramming.com/
              </span>
            </p>
            <span>
              한 달간 Html, CSS, JavaScript, Django, 협업 등의 세션을 듣고
            </span>
            <br />
            <span>
              아이디어 기획 경선 후, 한 달간 Django 팀 프로젝트를 하는 동아리
              입니다.
            </span>
          </div>
        );
      },
    },
    {
      period: "2022. 04 ~ ",
      content: "웹 프로그래밍 동아리 피로그래밍 17기 운영진 교육팀",
    },
    {
      period: "2022. 03 - 2022. 06",
      content: "프로젝트 고도화 프로그램 UPF 2022SS",
      detail: () => {
        return (
          <div className={styles[`modal-detail`]}>
            <p>
              <strong
                style={{
                  "--background-color": styles[`redPurple`],
                  "--color": "white",
                }}
              >
                <AiTwotoneHome />
                Site
              </strong>
              <span
                className={styles[`link`]}
                onClick={() => {
                  window.location.href = "https://www.unit.center/upf";
                }}
              >
                https://www.unit.center/upf
              </span>
            </p>
            <span>
              개발자들끼리 네트워킹을 하고, 프로젝트 고도화를 돕는 프로그램입니다.
            </span>
            <br />
            <br />
            <span>
              동아리 '피로그래밍'에서 진행한
              <strong style={{ fontWeight: 700 }}>'Knock/Knock'</strong>라는
              프로젝트를 Django에서 React & NodeJS로 스택 전환하는 것을 목표로
              참가했습니다.
            </span>
          </div>
        );
      },
    },
  ];



  export const awardsTimelines = [
    {
      period: "2021 .11 .25",
      content: "2021-2 졸업 프로젝트 대상",
      detail: () => {
        return (
          <div className={styles[`modal-detail`]}>
            <p>
              <strong>
                <AiFillGithub />
                관련 Github
              </strong>
              <span
                className={styles[`link`]}
                onClick={() => {
                  window.location.href =
                    "https://github.com/School-is-hard/Chatbot_Buddy";
                }}
              >
                https://github.com/School-is-hard/Chatbot_Buddy
              </span>
            </p>
            <span>
              2021-2 이화여자대학교 졸업프로젝트에서 딥러닝 기반 심리안정 챗봇 스피커 "Buddy" 프로젝트로 <strong style={{ fontWeight: 700 }}>대상</strong>을 수상했습니다.
            </span>
          </div>
        );
      },
    },
    {
      period: "2021. 09. 14",
      content: "경상북도 데이터 경진대회 제품 및 서비스 개발 부문 우수상",
      detail: () => {
        return (
          <div className={styles[`modal-detail`]}>
            <p style={{marginBottom: "1rem"}}>
            <strong>
                <AiFillGithub />
                관련 Github
              </strong>
              <span
                className={styles[`link`]}
                onClick={() => {
                  window.location.href = "https://github.com/suu3/Gymt";
                }}
              >
                https://github.com/suu3/Gymt
              </span>
            </p>
            <p >
              <strong
                style={{
                  "--background-color": styles[`redPurple`],
                  "--color": "white",
                  
                }}
              >
                <AiTwotoneHome />
                관련 Site
              </strong>
              <span
                className={styles[`link`]}
                onClick={() => {
                  window.location.href = "http://www.gbdcon.kr";
                }}
              >
                http://www.gbdcon.kr
              </span>
            </p>
            <span>
              공공 체육 시설 정보 제공 플랫폼 "GYMT"로 <strong style={{ fontWeight: 700 }}>우수상</strong>을 수상했습니다.
            </span>
            
          </div>
        );
      },
    },

  ];