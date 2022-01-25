import React from "react";
import styles from "./Feed.module.css";
const Feed = ({ data, img, descri, dataPost }) => {
  return (
    <div className={`${styles.feed}`}>
      <div className={`${styles.content} animeLeft`}>
        <div className={styles.title}>
          <h1>{data.title}</h1>
        </div>
        {img && (
          <div className={styles.img}>
            <img src={img} />
          </div>
        )}
        {dataPost && (
          <div className={styles.data}>
            <h3>Date: {dataPost}</h3>
          </div>
        )}
        {descri && (
          <div className={styles.descri}>
            <p>{descri}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
