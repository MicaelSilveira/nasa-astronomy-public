import React from "react";
import styles from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={`${styles.loading} animeLeft`}>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
