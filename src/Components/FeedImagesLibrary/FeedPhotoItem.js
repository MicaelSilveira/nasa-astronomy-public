import React from "react";
import Modal from "../Modal/Modal";
import styles from "./FeedPhotoItem.module.css";
const FeedPhotoItem = ({ item }) => {
  const [modal, setModal] = React.useState(null);
  const url = item.links[0];
  function handleClick() {
    setModal(item);
  }
  return (
    <>
      <div className={styles.photoItem} onClick={handleClick}>
        <img src={url.href} />
      </div>
      {modal && <Modal data={modal} setModal={setModal} />}
    </>
  );
};

export default FeedPhotoItem;
