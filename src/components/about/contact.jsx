import React from "react";
import styles from "styles/about/index.module.css";

const Contact = (props) => {
  return (
    <article className={styles[`contact`]}>
      <p>
        <strong>Tel</strong> 010-2674-1080
      </p>
      <p>
        <strong>E-mail</strong> ahob789@ewhain.net
      </p>
      <p>
        <strong>Github</strong> https://github.com/suu3
      </p>
      <p>
        <strong>Tech Blog</strong> https://temp-ha3.tistory.com
      </p>
    </article>
  );
};

export default Contact;
