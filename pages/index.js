import React from "react";
import Head from "next/head";
import {
  BaseButton,
  BaseSubtitle,
  BaseTitle,
  Layout,
  NavbarLink,
  BaseInput,
  BasePopup,
} from "../components";
import Link from "next/link";

import { useRouter } from "next/router";
import styles from "../styles/Home.module.scss";
import Strawberry from "../assets/img/Strawberry";
import Grapefruit from "../assets/img/Grapefruit";
import Leftgroup from "../assets/img/Leftgroup";
import Rightgroup from "../assets/img/Rightgroup";
import LogoImg from "../assets/img/LogoImg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import setCookie from "../helper/createCockies";

export default function Home() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const accessToken = useSelector((state) => state.auth.accessToken);
  const points = useSelector((state) => state.user.points);
  const nonAuthScore = useSelector((state) => state.user.nonAuthScore);

  const [modal, setModal] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      const { email, password } = JSON.parse(localStorage.getItem("user"));
      const { token } = JSON.parse(localStorage.getItem("token"));
      dispatch({ type: "AUTH_PROCESSS", payload: { email, password } });
      if (nonAuthScore > 0) {
        dispatch({
          type: "ADD_POINTS",
          payload: { points: nonAuthScore, token },
        });
      } else {
        dispatch({ type: "GET_RANK", payload: { token } });
        dispatch({ type: "GET_POINTS", payload: { token } });
      }
    }
  }, []);

  const router = useRouter();

  return (
    <Layout>
      <Grapefruit className={styles.Grapefruit} />

      <Strawberry className={styles.Strawberry} />

      <Leftgroup className={styles.Leftgroup} />

      <Rightgroup className={styles.Rightgroup} />

      <div className={styles.MainContent}>
        <Head>
          <title>THE BODY SHOP</title>
          <meta
            name="description"
            content="ЗАМУР-Р-РЧАТЕЛЬНЫЕ БАТТЕРЫ! Помоги котику собрать ингредиенты из новой коллекции масел для тела «The Body Shop», получи промо-код на скидку и получи возможность участвовать в розыгрыше наборов из масел для тела"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {!isAuth && (
          <BasePopup homePage={true} visible={modal} setVisible={setModal}>
            <BaseTitle style={{ marginBottom: 16 }}>
              <span
                style={{ fontSize: 24, color: "#004236", fontWeight: "bold" }}
              >
                Правила
              </span>
            </BaseTitle>

            <BaseSubtitle style={{ marginBottom: 24 }}>
              <span
                style={{ fontSize: 18, color: "#53998C", fontWeight: "bold" }}
              >
                1 шаг
              </span>
              <br />
              <span style={{ fontSize: 15, color: "#004236" }}>
                Составь три и больше одинаковых элементов в ряд
              </span>
              <br />
              <br />
              <span
                style={{ fontSize: 18, color: "#53998C", fontWeight: "bold" }}
              >
                2 шаг
              </span>
              <br />
              <span style={{ fontSize: 15, color: "#004236" }}>
                Для этого нажми
                <br />
                на карточки, которые хочешь поменять местами
              </span>
              <br />
              <br />
              <span
                style={{ fontSize: 18, color: "#53998C", fontWeight: "bold" }}
              >
                3 шаг
              </span>
              <br />
              <span style={{ fontSize: 15, color: "#004236" }}>
                Получай очки <br /> за каждую комбинацию!
              </span>
            </BaseSubtitle>

            <BaseButton
              style={{ marginBottom: 8 }}
              method={() => {
                setModal(false);
                router.push("/game");
              }}
            >
              Играть
            </BaseButton>
          </BasePopup>
        )}

        <main className={styles.Main}>
          {/* <div className={styles.Main__logoImg}>
            <LogoImg />
          </div> */}
          <BaseTitle style={{ marginBottom: 15, lineHeight: "200%" }}>
            Замур-р-рчательные
            <br />
            <span className={styles.Main_largetitle}>баттеры</span>
          </BaseTitle>
          <BaseSubtitle type="Home" style={{ marginBottom: 24 }}>
            Помоги котику собрать <br /> ингредиенты из новой коллекции <br />{" "}
            масел для тела The Body Shop
          </BaseSubtitle>

          {!isAuth && (
            <BaseButton
              style={{ marginBottom: 16 }}
              method={() => {
                setModal(true);
              }}
            >
              Играть
            </BaseButton>
          )}
          {isAuth && (
            <BaseButton
              style={{ marginBottom: 16 }}
              method={() => router.push("/game")}
            >
              Играть
            </BaseButton>
          )}

          {isAuth ? (
            <div className={styles.Record}>
              Ваши очки: <span>{points || 0}</span>
            </div>
          ) : (
            <NavbarLink href="/Auth" title="Войти" />
          )}
        </main>
      </div>
    </Layout>
  );
}
