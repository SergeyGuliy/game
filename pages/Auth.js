import React from "react";
import Link from "next/link";
import AuthBotLeft from "../assets/img/AuthBotLeft";
import AuthBotRight from "../assets/img/AuthBotRight";
import AuthTopLeft from "../assets/img/AuthTopLeft";
import AuthTopRight from "../assets/img/AuthTopRight";
import LogoImg from "../assets/img/LogoImg";
import {
  BaseButton,
  BaseInput,
  BasePopup,
  BaseTitle,
  BaseSubtitle,
  Layout,
} from "../components";

import { useRouter } from "next/router";
// helpres
import validateEmail from "../helper/validateEmail";

import { useDispatch } from "react-redux";

import styles from "../styles/Auth.module.scss";
import checkMinLength from "../helper/checkMinLength";

import { useSelector } from "react-redux";

const Auth = () => {
  const router = useRouter();
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const [isConfirm, setIsConfirm] = React.useState(true);

  const [isError, setError] = React.useState(false);
  const [isErrorAuth, setErrorAuth] = React.useState(false);

  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const errorAuth = useSelector((state) => state.auth.errorAuth);
  const nonAuthScore = useSelector((state) => state.user.nonAuthScore);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      const { email, password } = JSON.parse(localStorage.getItem("user"));
      dispatch({ type: "AUTH_PROCESSS", payload: { email, password } });
    }
  }, []);

  React.useEffect(() => {
    if (isAuth) router.push("/");
  }, [isAuth]);

  React.useEffect(() => {
    if (errorAuth) {
      setError(true);
      setErrorAuth(true);
      setIsConfirm(false);
      setModal(true);
    }
  }, [errorAuth]);

  const confirm = () => {
    if (
      validateEmail(data.email) &&
      checkMinLength(data.email) &&
      checkMinLength(data.password)
    ) {
      dispatch({ type: "AUTH_PROCESSS", payload: data });

      setModal(false);
    } else {
      setError(true);
      setErrorAuth(true);
      setIsConfirm(false);
      setModal(true);
    }
  };

  const restorePassword = () => {
    router.push("/Restore");
  };

  return (
    <Layout>
      <AuthTopLeft className={styles.AuthTopLeft} />
      <AuthTopRight className={styles.AuthTopRight} />
      <AuthBotLeft className={styles.AuthBotLeft} />
      <AuthBotRight className={styles.AuthBotRight} />

      <div className={styles.Auth}>
        {/* <LogoImg className={styles.Auth_logo}></LogoImg> */}

        <BaseInput
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          style={{ marginBottom: 16 }}
        />

        <BaseInput
          placeholder="Пароль"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          type="password"
          style={{ marginBottom: 16 }}
        />

        {isError && isErrorAuth && (
          <div className={styles.Auth_error}>
            Почта или пароль введены неверно!
          </div>
        )}

        <BaseButton
          style={{ width: "100%", marginBottom: 8 }}
          method={confirm}
          disabled={!data.email || !data.password}
        >
          Войти
        </BaseButton>

        <div className={styles.Policy}>
          Нажимая «Войти», ты соглашаешься <br /> с
          <Link href="https://www.thebodyshop.ru/ru/personal-data-protection.html">
            <a target="_blank">
              <span> политикой обработки персональных данных</span>
            </a>
          </Link>
        </div>

        <BasePopup visible={modal} setVisible={setModal}>
          <BaseTitle style={{ marginBottom: 10 }}>ошибка</BaseTitle>

          <BaseSubtitle style={{ marginBottom: 24 }}>
            Неверный email или пароль.
            <br />
            <br /> Попробуй ещё раз
            <br /> или воспользуйся формой
            <br /> восстановления пароля.
          </BaseSubtitle>

          <BaseButton
            style={{ marginBottom: 8 }}
            method={() => setModal(false)}
          >
            Понятно
          </BaseButton>
        </BasePopup>

        {!isConfirm ? (
          <BaseButton
            type="clear"
            style={{ position: "absolute", bottom: 80 }}
            method={restorePassword}
          >
            Восстановить пароль
          </BaseButton>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default Auth;
