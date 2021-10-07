import React from "react";
import { useRouter } from "next/router";
import styles from "./Timer.module.scss";
import { actions } from "../../redux/game";
import { useDispatch, useSelector } from "react-redux";

const Timer = () => {
  const score = useSelector((state) => state.game.score);
  const router = useRouter();
  const [minutes, setMinutes] = React.useState(1);
  const [seconds, setSeconds] = React.useState(0);
  const [curScore, setCurScore] = React.useState(0);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      const { email, password } = JSON.parse(localStorage.getItem("user"));
      dispatch({ type: "AUTH_PROCESSS", payload: { email, password } });
    }
  }, []);

  React.useEffect(() => {
    setCurScore(score);
  }, [score]);

  React.useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 950);
    return () => {
      clearInterval(myInterval);
    };
  });

  const computedColor = () => {
    if (seconds <= 15 && minutes != 1) {
      return "#EF8194";
    }
    return "#53998C";
  };

  React.useEffect(() => {
    computedColor();
    if (minutes < 1 && seconds < 1) {
      if (isAuth) {
        dispatch({
          type: "ADD_POINTS",
          payload: { points: curScore, token: accessToken },
        });
        dispatch(actions.endGame());
        router.push("/result");
      } else {
        dispatch({
          type: "ADD_POINTS_NON_AUTH",
          payload: { points: curScore },
        });
        router.push("/result");
      }
    }
  }, [seconds]);

  return (
    <>
      {minutes === 0 && seconds === 0 ? (
        <div style={{ color: computedColor() }} className={styles.Timer}>
          00:00
        </div>
      ) : (
        <div style={{ color: computedColor() }} className={styles.Timer}>
          {"0"}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      )}
    </>
  );
};

export default Timer;
