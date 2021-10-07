import React from "react";
import { useRouter } from "next/router";
import { BaseButton, BaseSubtitle, BaseTitle, Layout } from "../components";
import styles from "../styles/Result.module.scss";

import LogoImg from "../assets/img/LogoImg";
import ResultBot from "../assets/img/ResultBot";
import ResultTopLeft from "../assets/img/ResultTopLeft";
import ResultTopRight from "../assets/img/ResultTopRight";
import ResultCatRed from "../assets/img/ResultCatRed";
import ResultCatBlue from "../assets/img/ResultCatBlue";
import { useSelector, useDispatch } from "react-redux";

const Result = () => {
  const router = useRouter();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const score = useSelector((state) => state.user.points);
  const scor = useSelector((state) => state.game.gameScore);
  const NEED_SCORE = process.env.NEXT_PUBLIC_NEED_SCORE || 500;

  const [sendSecondMail, setSecondMail] = React.useState(false);

  const [resultScore, setResultScore] = React.useState(0);

  const sendMailResult = useSelector((state) => state.mail.success);
  const sendMailError = useSelector((state) => state.mail.error);
  // const [score, setScore] = React.useState(0);

  const NEXT_PUBLIC_NEED_SCORE = process.env.NEXT_PUBLIC_NEED_SCORE || 500;

  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log(sendMailResult, "success");
  }, [sendMailResult]);

  React.useEffect(() => {
    if (
      scor > NEED_SCORE &&
      sendMailResult !== true &&
      sendMailError !== true
    ) {
      const { token } = JSON.parse(localStorage.getItem("token"));

      dispatch({ type: "SEND_MAIL", payload: { token } });
    }
  }, [scor]);

  React.useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      const { email, password } = JSON.parse(localStorage.getItem("user"));
      const { token } = JSON.parse(localStorage.getItem("token"));
      dispatch({ type: "AUTH_PROCESSS", payload: { email, password } });
      dispatch({ type: "GET_POINTS", payload: { token } });
    }
  });

  // React.useEffect(() => {
  //   if (isAuth) {
  //     const { token } = JSON.parse(localStorage.getItem("token"));

  //     dispatch({ type: "ADD_POINTS", payload: { points: score, token } });
  //   }
  // });

  // if (score >= 1300) {
  //   setNeedScore(1400);
  // }

  // React.useEffect(() => {
  //   const testEmail = window.localStorage.getItem("email");
  //   const testPassword = window.localStorage.getItem("phone");
  //   if (testEmail && testPassword) {
  //     setAuth(true);
  //   }
  // }, []);

  return (
    <Layout>
      <ResultBot className={styles.ResultBot} />
      <ResultTopLeft className={styles.ResultTopLeft} />
      <ResultTopRight className={styles.ResultTopRight} />

      {isAuth ? (
        <ResultCatRed className={styles.ResultCatRed} />
      ) : (
        <ResultCatBlue className={styles.ResultCatBlue} />
      )}

      <div className={styles.Result}>
        {/* <LogoImg className={styles.Result_logo} /> */}

        {isAuth ? (
          <>
            <div className={styles.myWrapper}>
              <BaseTitle style={{ marginBottom: 8, lineHeight: "95%" }}>
                <span className={styles.score}>{scor}</span>
                <br />
                <span className={styles.Result_largetitle}>очков</span>
              </BaseTitle>

              {scor > NEXT_PUBLIC_NEED_SCORE ? (
                <BaseSubtitle style={{ marginBottom: 24 }}>
                  Это победа! <br /> <br />
                  Ты получаешь скидку 30%.
                  <br />
                  Промокод отправлен тебе на email.
                </BaseSubtitle>
              ) : (
                <BaseSubtitle style={{ marginBottom: 26 }}>
                  <span className={styles.Result_needmore_text}>
                    До получения промокода <br /> следующего уровня не хватает:
                    <br />
                  </span>
                  <br />
                  {`${NEXT_PUBLIC_NEED_SCORE - scor}`} очков
                </BaseSubtitle>
              )}
            </div>
            <BaseButton method={() => router.push("/game")}>
              Играть еще раз
            </BaseButton>
          </>
        ) : (
          <>
            <BaseTitle
              style={{ marginBottom: 10, fontSize: 18, lineHeight: "130%" }}
            >
              Поздравляем
              <br />
              <span className={styles.Result_largetitle}>с победой</span>
            </BaseTitle>

            <BaseSubtitle style={{ marginBottom: 24 }}>
              Сохрани свой результат и получи <br /> скидку 20% в наших
              магазинах
            </BaseSubtitle>

            <BaseButton method={() => router.push("/register")}>
              Зарегистрироваться
            </BaseButton>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Result;
