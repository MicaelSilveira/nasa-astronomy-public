import React from "react";

import FeedPhotoItem from "./FeedPhotoItem";
import styles from "./FeedPhotos.module.css";
const FeedPhotos = ({ items }) => {
  return (
    <div className={styles.photo}>
      {items.map((item, index) => {
        return <FeedPhotoItem item={item} key={index} />;
      })}
    </div>
  );
};

export default FeedPhotos;
