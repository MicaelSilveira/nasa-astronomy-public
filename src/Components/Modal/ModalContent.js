import React from "react";
import styles from "./ModalContent.module.css";
const ModalContent = ({ data, setModal }) => {
  function mobileClick() {
    setModal(null);
  }
  return (
    <div className={styles.modalContent}>
      <div className={styles.title}>
        <h1>{data.data[0].title}</h1>
      </div>
      <div className={styles.img}>
        <img src={data.links[0].href} />
      </div>
      <div className={styles.descri}>
        <div className={styles.date}>
          <h3>
            Date: {""}
            {data.data[0].date_created}
          </h3>
        </div>
        {data.data[0].location && (
          <div className={styles.location}>
            <h3>Location: {data.data[0].location}</h3>
          </div>
        )}
        <div className={styles.description}>
          <p>{data.data[0].description}</p>
        </div>
      </div>
      <div className={styles.mobile}>
        <button onClick={mobileClick}>Back</button>
      </div>
    </div>
  );
};

export default ModalContent;
