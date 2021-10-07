import React from "react";
import styles from "./QuestionItem.module.scss";

const QuestionItem = ({ item }) => {
  const [isAnswer, setIsAnswer] = React.useState(false);

  return (
    <div key={item.id} className={styles.About_question_item}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={` ${styles.About_question_showbtn} ${
          isAnswer ? styles.active : ""
        }`}
        onClick={() => setIsAnswer(!isAnswer)}
      >
        <g clipPath="url(#clip0)">
          <path
            d="M16.2262 1.14116C16.2262 0.656523 15.8333 0.263649 15.3487 0.263649C14.8641 0.263649 14.4712 0.656522 14.4712 1.14116L14.4712 14.2414L1.37105 14.2414C0.886414 14.2414 0.49354 14.6342 0.493539 15.1189C0.49354 15.6035 0.886414 15.9964 1.37105 15.9964L14.4712 15.9964V28.6226C14.4712 29.1073 14.8641 29.5002 15.3487 29.5002C15.8333 29.5002 16.2262 29.1073 16.2262 28.6226L16.2262 15.9964L28.8525 15.9964C29.3372 15.9964 29.73 15.6035 29.73 15.1189C29.73 14.6342 29.3372 14.2414 28.8525 14.2414L16.2262 14.2414L16.2262 1.14116Z"
            fill="#004236"
            stroke="#004236"
            strokeWidth="0.3"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="30" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className={styles.About_question_title}>{item.title}</div>

      {isAnswer && (
        <div className={styles.About_question_answer}>{item.answer}</div>
      )}
    </div>
  );
};

export default QuestionItem;
