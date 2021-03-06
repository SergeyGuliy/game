import React from "react";
import { useSelector } from "react-redux";
import styles from "./Score.module.scss";
const Score = () => {
  const score = useSelector((state) => state.game.score);

  return (
    <div className={styles.score}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.score_icon}
      >
        <path
          d="M25.5716 14.9999C25.5716 20.8383 20.8386 25.5713 15.0001 25.5713C9.1617 25.5713 4.42871 20.8383 4.42871 14.9999C4.42871 9.16146 9.1617 4.42847 15.0001 4.42847C20.8386 4.42847 25.5716 9.16146 25.5716 14.9999Z"
          fill="#F8BB46"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM26.5716 14.9999C26.5716 21.3906 21.3909 26.5713 15.0001 26.5713C8.60942 26.5713 3.42871 21.3906 3.42871 14.9999C3.42871 8.60917 8.60942 3.42847 15.0001 3.42847C21.3909 3.42847 26.5716 8.60917 26.5716 14.9999Z"
          fill="#F8BB46"
        />
      </svg>
      {score}
    </div>
  );
};

export default Score;
