import React from "react";
import styles from "styles/about/index.module.css";

const Contact = (props) => {
  return (
    <article className={styles[`contact`]}>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <strong>Tel</strong> 010-2674-1080
      </p>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <strong>E-mail</strong> ahob789@ewhain.net
      </p>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <strong>Github</strong> https://github.com/suu3
      </p>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <strong>Tech Blog</strong> https://temp-ha3.tistory.com
      </p>
    </article>
  );
};

export default Contact;
