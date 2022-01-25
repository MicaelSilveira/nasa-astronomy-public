import React from "react";
import styles from "./FeedLibrary.module.css";
import FeedPage from "./FeedPage";
import FeedPhotos from "./FeedPhotos";
const Feed = ({ setPageStats, date }) => {
  const items = date.collection.items.splice(0, 20);
  const itemsFilter = items.filter((item) => {
    return item["links"];
  });
  return (
    <div className={styles.feed}>
      <FeedPhotos items={itemsFilter} />
      <FeedPage setPageStats={setPageStats} />
    </div>
  );
};

export default Feed;
