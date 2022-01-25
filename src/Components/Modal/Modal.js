import React from "react";
import styles from "./Modal.module.css";
import ModalContent from "./ModalContent";
const Modal = ({ data, setModal }) => {
  function handleClick(event) {
    if (event.target === event.currentTarget) {
      setModal(null);
    }
  }
  return (
    <div className={`${styles.modal} animeLeft`} onClick={handleClick}>
      <ModalContent data={data} setModal={setModal} />
    </div>
  );
};

export default Modal;
