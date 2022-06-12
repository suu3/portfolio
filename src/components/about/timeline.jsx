import * as React from "react";
import styles from "styles/about/timeline.module.css";

export default function TimeLine({ timelines }) {
  return (
    <article className={styles[`article`]}>
      {timelines.map((v, i) => {
        if (i === 0) {
          return (
            <div key={i} className={styles[`time`]}>
              <div className={styles[`circle`]}></div>
              <span
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <strong>{v.period}</strong> {v.content}
              </span>
            </div>
          );
        } else {
          return (
            <>
              <div className={styles[`time`]}>
                <div className={styles[`bar`]}></div>
              </div>
              <div key={i} className={styles[`time`]}>
                <div className={styles[`circle`]}></div>
                <span
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <strong>{v.period}</strong> {v.content}
                </span>
              </div>
            </>
          );
        }
      })}
    </article>
  );
}
