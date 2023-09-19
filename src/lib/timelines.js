import { AiFillGithub, AiTwotoneHome } from "react-icons/ai";
import styles from "styles/skills/index.module.css";

export const aboutTimelines = [
  {
    period: "0000. 00. 00",
    content: "content1",
  },

  {
    period: "0000. 00. 00",
    content: "content2",
  },
  {
    period: "0000. 00. 00",
    content: "content3",
  },
];
export const activityTimelines = [
  {
    period: "0000. 00. 00",
    content: "content1",
    detail: () => {
      const githubLink = "#";
      return (
        <div className={styles["modal-detail"]}>
          <p>
            <strong>
              <AiFillGithub />
              Github
            </strong>
            <span
              className={styles["link"]}
              onClick={() => {
                window.location.href = githubLink;
              }}
            >
              {githubLink}
            </span>
          </p>
          explanation1
        </div>
      );
    },
  },
];

export const awardsTimelines = [
  {
    period: "0000. 00. 00",
    content: "content1",
    detail: () => {
      return (
        <div className={styles["modal-detail"]}>
          <p>
            <strong>
              <AiFillGithub />
              관련 Github
            </strong>
            <span
              className={styles["link"]}
              onClick={() => {
                window.location.href = "#";
              }}
            >
              #
            </span>
          </p>
          content 1
        </div>
      );
    },
  },
];
