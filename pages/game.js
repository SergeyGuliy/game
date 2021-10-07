import React, {useEffect, useState} from "react";

import GameTopLeft from "../assets/img/GameTopLeft";
import GameTopRight from "../assets/img/GameTopRight";
import GameBot from "../assets/img/GameBot";

import Timer from "../components/Timer";
import Score from "../components/Score";
import LoaderField from "../components/LoaderField";
import Fields from "../components/Fields";
import ShuffleFields from "../assets/img/shuffleFields";

import { useDispatch, useSelector } from "react-redux";

import { actions } from "../redux/game";
import styles from "../styles/Game.module.scss";

const Game = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // init the sound
    function Sound(src) {
      this.sound = document.createElement("audio");
      this.sound.src = src;
      this.sound.setAttribute("preload", "auto");
      this.sound.setAttribute("controls", "none");
      this.sound.style.display = "none";
      document.body.appendChild(this.sound);
      this.play = function(){
        this.sound.play();
      }
      this.stop = function(){
        this.sound.pause();
      }
    }

    const mySound = new Sound("/bling.mp3");

    dispatch(actions.setSound(mySound))

    if (localStorage.getItem("user") !== null) {
      const { email, password } = JSON.parse(localStorage.getItem("user"));

      dispatch({ type: "AUTH_PROCESSS", payload: { email, password } });
    }
  }, []);

  // const [bonus, setBonus] = React.useState(0);

  const [disBtn, setDisBtn] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  const shuffleFields = () => {
    setLoading(true);
    setDisBtn(true);
    dispatch(actions.shuffle());

    setTimeout(() => {
      setLoading(false);
      setDisBtn(false);
    }, 1000);
  };

  React.useEffect(() => {
    dispatch(actions.shuffle());
    setLoading(true);
    setDisBtn(true);
    dispatch(actions.startGame());
    setTimeout(() => {
      setLoading(false);
      setDisBtn(false);
    }, 1000);
  }, []);

  const bonus = useSelector((state) => state.game.bonus);
  const [bonusItems, setBonusItems] = React.useState([]);
  React.useEffect(() => {
    if (bonus) {
      setBonusItems((prev) => [...prev, bonus]);
      setTimeout(() => {
        setBonusItems([]);
      }, 700);
    }
  }, [bonus]);

  // const [viewBonus, setViewBonus] = React.useState(false);
  // const [curBonus, setCurBonus] = React.useState(0);

  // const test = () => {
  //   setTimeout(() => {
  //     setViewBonus(false);
  //     console.log("setTimeout");
  //   }, 1000);
  // };
  // React.useEffect(() => {
  //   if (bonus !== 0) {
  //     console.log("useEffect bonus");
  //     setCurBonus(bonus);
  //     setViewBonus(true);
  //     test();
  //   }
  // });

  return (
    <div className={styles.Game}>
      <GameTopLeft className={styles.GameTopLeft} />
      <GameTopRight className={styles.GameTopRight} />
      <GameBot className={styles.GameBot} />
      <div className={styles.GameWrapper}>
        <div className={styles.Game_header}>
          <Score />
          <Timer />
        </div>
        {/* {viewBonus && <div className={styles.Bonus}>{`+${curBonus}`}</div>} */}
        {bonus === 0 &&
          bonusItems.map((item, index) => {
            const x = 20 + Math.floor(Math.random() * 50);
            const y = 20 + Math.floor(Math.random() * 50);
            return (
              <div
                key={item + index}
                style={{ bottom: `${x}%`, left: `${y}%` }}
                className={styles.Bonus}
              >{`+${item}`}</div>
            );
          })}
        <div
          className={styles.Game_content}
        >
          {loading && <LoaderField />}

          <Fields />
        </div>
        <button
          type="button"
          className={`${!disBtn ? styles.btn : styles.btn_disabled}`}
          disabled={disBtn}
          onClick={shuffleFields}
        >
          <ShuffleFields />
          <span>Перемешать</span>
        </button>
      </div>
    </div>
  );
};

export default Game;
