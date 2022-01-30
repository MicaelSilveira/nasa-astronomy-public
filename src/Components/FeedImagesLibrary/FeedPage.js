import React from "react";
import styles from "./FeedPage.module.css";
const FeedPage = ({ setPageStats }) => {
  function previosClick() {
    setPageStats((page) => page - 1);
  }
  function nextClick() {
    setPageStats((page) => page + 1);
  }
  return (
    <div className={styles.feedPage}>
      <div className={styles.previous}>
        <button onClick={previosClick}>Previous</button>
      </div>
      <div className={styles.next}>
        <button onClick={nextClick}>Next</button>
      </div>
    </div>
  );
};

export default FeedPage;
