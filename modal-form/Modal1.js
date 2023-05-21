import Modal from "react-modal";
import { useState } from "react";
import styles from "./Modal1.module.scss";
import FormModal from "./FormModal";
import { IoMdClose } from "react-icons/io";

const Modal1 = ({ button }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button className="btn" onClick={() => setIsOpen(true)}>
        {button}
      </button>
      <Modal
        className={styles.modal}
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        <IoMdClose className={styles.close} onClick={closeModal} />

        <FormModal closeModal={closeModal} />
      </Modal>
    </>
  );
};
export default Modal1;
