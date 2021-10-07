import React from "react";
import Link from "next/link";
import {
  BaseButton,
  BaseInput,
  BasePopup,
  BaseSubtitle,
  BaseTitle,
  Layout,
} from "../components";
import { useRouter } from "next/router";
import styles from "../styles/Register.module.scss";
import LogoImg from "../assets/img/LogoImg";
import RegisterTopLeft from "../assets/img/RegisterTopLeft";
import RegisterTopRight from "../assets/img/RegisterTopRight";
import RegisterBot from "../assets/img/RegisterBot";

import InputMask from "react-input-mask";

// helpers

import validateEmail from "../helper/validateEmail";
import validatePhone from "../helper/validatePhone";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/register";

const Register = () => {
  const router = useRouter();
  const [data, setData] = React.useState({ email: "", phone: "" });
  const [modal, setModal] = React.useState(false);
  const [isError, setError] = React.useState(false);
  const [emailTaken, setEmailTaken] = React.useState(false);
  const dispatch = useDispatch();

  const isRegister = useSelector((state) => state.reg.isRegister);
  const errorRegister = useSelector((state) => state.reg.errorRegister);

  React.useEffect(() => {
    if (isRegister === false && errorRegister === true) {
      setEmailTaken(true);
    } else {
      setEmailTaken(false);
    }
  }, [isRegister, errorRegister]);

  React.useEffect(() => {
    if (isRegister) setModal(true);
  }, [isRegister]);

  const registerUser = () => {
    if (validateEmail(data.email) && validatePhone(data.phone)) {
      dispatch({
        type: "REG_PROCESS",
        payload: { email: data.email, phone: data.phone },
      });
    } else {
      setError(true);
    }
    // window.localStorage.setItem('email', data.email);
    // window.localStorage.setItem('phone', data.phone);
    // setModal(true);
  };

  return (
    <Layout>
      <RegisterTopLeft className={styles.RegisterTopLeft} />
      <RegisterTopRight className={styles.RegisterTopRight} />
      <RegisterBot className={styles.RegisterBot} />

      <BasePopup visible={modal} setVisible={setModal}>
        <BaseTitle style={{ marginBottom: 10 }}>
          проверь
          <br />
          Email
        </BaseTitle>

        <BaseSubtitle style={{ marginBottom: 24 }}>
          Тебе было отправлено письмо <br /> с паролем. Промокод будет
          <br /> доступен после авторизации.
          <br />
          <br /> Набирая очки в игре, ты
          <br /> сможешь увеличить свою скидку!
          <br />
          <br /> Каждую неделю среди
          <br /> ТОП-100 игроков проводится
          <br /> розыгрыш суперпризов.
        </BaseSubtitle>

        <BaseButton style={{ marginBottom: 8 }} method={() => router.push("/")}>
          Понятно
        </BaseButton>
        <Link href="/About">
          <a>
            <BaseButton type="clear">подробнее</BaseButton>
          </a>
        </Link>
      </BasePopup>

      <div className={styles.Register}>
        {/* <LogoImg className={styles.Register_logo}></LogoImg> */}

        {/* Phone input */}

        <div className={styles.Wrapper}>
          <InputMask
            // className={}
            className={styles.Input}
            value={data.phone}
            placeholder="Телефон"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            mask="+7\(999) 999-99-99"
            maskChar=" "
          />
        </div>

        {/* <div className={styles.Wrapper}>
          <input
            value={phone}
            placeholder={"+7 (   )   -  -  "}
            onChange={phoneMask}
            type="text"
            className={styles.Input}
            style={{ marginBottom: 16 }}
          /> */}
        {/* </div> */}

        <BaseInput
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          style={{ marginBottom: 16 }}
        />

        {isError && (
          <div className={styles.Register_error}>
            Телефон или email введены неверно!
          </div>
        )}

        {emailTaken && (
          <div className={styles.Register_error}>
            Такой пользователь уже зарегистрирован
          </div>
        )}

        <BaseButton
          style={{ width: "100%", marginBottom: 8 }}
          method={registerUser}
          disabled={!data.email || !data.phone}
        >
          зарегистрироваться
        </BaseButton>

        <div className={styles.Policy}>
          Нажимая «Зарегистрироваться», ты соглашаешься <br /> с
          <Link href="https://www.thebodyshop.ru/ru/personal-data-protection.html">
            <a target="_blank">
              <span> политикой обработки персональных данных</span>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
