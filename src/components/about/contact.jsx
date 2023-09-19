import React from "react";
import styles from "styles/about/index.module.css";

const Contact = () => {
  return (
    <article className={styles[`contact`]}>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <strong>Tel</strong> 000-0000-0000
      </p>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <strong>E-mail</strong> user@email.com
      </p>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <strong>Github</strong>
        <span
          className={styles[`link`]}
          onClick={() => {
            window.location.href = "#";
          }}
        >
          github link
        </span>
      </p>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <strong>Tech Blog</strong>
        <span
          className={styles[`link`]}
          onClick={() => {
            window.location.href = "#";
          }}
        >
          blog link
        </span>
      </p>
    </article>
  );
};

export default Contact;
