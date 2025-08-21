import React from "react";
import { useModal } from "../../context/ModalContext";

const ModalComponent = () => {
  const { isShow, closeModal } = useModal();

  if (!isShow) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>제목</h2>
        <p>내용</p>
        <button onClick={closeModal}>[닫기]</button>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
  },
};

export default ModalComponent;