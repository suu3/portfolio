import React, { useEffect, useState } from "react";
import styles from "styles/about/timeline.module.css";
import Modal from "components/modal";
import useModal from "hook/useModal";
import { ICONS } from "lib/assets";
import { AiOutlineCaretRight } from "react-icons/ai";

const ModalHeader = ({ setShow, title }) => {
  return (
    <>
      <span style={{ fontWeight: 600 }}>{title}</span>
      <img onClick={() => setShow(false)} src={ICONS.CLOSE} alt="close" />
    </>
  );
};

const ModalBody = ({ detail }) => {
  return <>{detail}</>;
};

export default function TimeLine({ timelines }) {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const { modalShow, modal, setModalShow, handleCloseModal } = useModal({
    className: styles[`detail`],
  });

  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, [handleCloseModal]);
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
                <strong>{v.period}</strong>{" "}
                <span className={styles[`time-content`]}>
                  <span>{v.content}</span>
                  {v.detail && (
                    <button
                      onClick={() => {
                        setModalShow(true);
                        setTitle(v.content);
                        setDetail(v.detail);
                      }}
                      className={styles[`detail`]}
                    >
                      DETAIL <AiOutlineCaretRight />
                    </button>
                  )}
                </span>
              </span>
            </div>
          );
        } else {
          return (
            <li key={i}>
              <div className={styles[`time`]}>
                <div className={styles[`bar`]}></div>
              </div>
              <div className={styles[`time`]}>
                <div className={styles[`circle`]}>
                  <div className={styles[`inner-circle`]}></div>
                </div>
                <span
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <strong>{v.period}</strong>
                  <span className={styles[`time-content`]}>
                    <span>{v.content}</span>
                    {v.detail && (
                      <button
                        onClick={() => {
                          setModalShow(true);
                          setTitle(v.content);
                          setDetail(v.detail);
                        }}
                        className={styles[`detail`]}
                      >
                        DETAIL <AiOutlineCaretRight />
                      </button>
                    )}
                  </span>
                </span>
              </div>
            </li>
          );
        }
      })}
      {modalShow && (
        <Modal
          ref={modal}
          header={<ModalHeader setShow={setModalShow} title={title} />}
          body={<ModalBody detail={detail} />}
          height="80%"
        />
      )}
    </article>
  );
}
