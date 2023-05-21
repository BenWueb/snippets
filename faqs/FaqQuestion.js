import styles from "./FaqQuestion.module.scss";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const FaqQuestion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={onClick}
        className={
          show
            ? `${styles.questionContainer} ${styles.questionContainerHover}`
            : styles.questionContainer
        }
      >
        <p className={styles.question}>
          {question}
          <FaAngleDown
            style={{
              marginLeft: "auto",
              height: "30px",
              width: "30px",
              verticalAlign: "middle",
            }}
            className={show && styles.show}
          />
        </p>

        {show && <p className={styles.answer}>{answer}</p>}
      </div>
    </>
  );
};
export default FaqQuestion;
