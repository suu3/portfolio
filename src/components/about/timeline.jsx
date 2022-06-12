import * as React from "react";
import styles from "styles/about/timeline.module.css";

export default function TimeLine() {
  return (
    <article className={styles[`article`]}>
      <div className={styles[`time`]}>
        <div className={styles[`circle`]}></div>
        <span
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <strong>1997. 07. 15</strong>
        </span>
      </div>
      <div className={styles[`time`]}>
        <div className={styles[`bar`]}></div>
      </div>
      <div className={styles[`time`]}>
        <div className={styles[`circle`]}></div>
        <span
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <strong>2013. 03 - 2015. 12</strong> 안산동산고등학교
        </span>
      </div>
      <div className={styles[`time`]}>
        <div className={styles[`bar`]}></div>
      </div>
      <div className={styles[`time`]}>
        <div className={styles[`circle`]}></div>
        <span
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <strong>2016. 03 - 2022. 08</strong> 이화여자대학교 컴퓨터공학과
        </span>
      </div>
    </article>
  );
}
