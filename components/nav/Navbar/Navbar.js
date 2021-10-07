import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BaseButton,
  BasePopup,
  BaseSubtitle,
  BaseTitle,
  NavbarLink,
} from "../..";
import styled from "./Navbar.module.scss";
import Burger from "../../../assets/img/Burger";
import LogoText from "../../../assets/img/LogoText";
import NavbarTop from "../../../assets/img/NavbarTop";
import NavbarBotLeft from "../../../assets/img/NavbarBotLeft";
import NavbarBotRight from "../../../assets/img/NavbarBotRight";
import { actions } from "../../../redux/auth";
import { useDispatch, useSelector } from "react-redux";

const Navbar = ({ fill }) => {
  const [auth, setAuth] = React.useState(false);

  const isAuth = useSelector((state) => state.auth.isAuth);
  const rank = useSelector((state) => state.user.rank);
  const email = useSelector((state) => state.auth.email);
  const points = useSelector((state) => state.user.points);

  const router = useRouter();

  React.useEffect(() => {
    if (!isAuth) {
      if (localStorage.getItem("user") !== null) {
        const { email, password } = JSON.parse(localStorage.getItem("user"));
        const { token } = JSON.parse(localStorage.getItem("token"));
        dispatch({ type: "AUTH_PROCESSS", payload: { email, password } });
        dispatch({ type: "GET_RANK", payload: { token } });
      }
    }
  }, []);

  const links = [
    { id: 1, href: "/Coupons", title: "Мои промокоды" },
    { id: 2, href: "/Prize", title: "Призы" },
    { id: 3, href: "/Rating", title: "Рейтинг игроков" },
    { id: 4, href: "/About", title: "Об игре" },
  ];

  const [burgerActive, setBurgerActive] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    router.reload(window.location.pathname);
    setModal(false);
    dispatch(actions.logout());
  };

  React.useEffect(() => {
    if (burgerActive) {
      document.body.style.overflow = "hidden";

      document.ontouchmove = function (event) {
        event.preventDefault();
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [burgerActive]);

  return (
    <>
      <BasePopup visible={modal} setVisible={setModal}>
        <BaseTitle style={{ marginBottom: 10 }}>выйти?</BaseTitle>

        <BaseSubtitle style={{ marginBottom: 24 }}>
          Ты сможешь вернуться <br /> и продолжить игру <br /> в любой момент
        </BaseSubtitle>

        <BaseButton style={{ marginBottom: 16 }} method={logout}>
          Да
        </BaseButton>
        <BaseButton method={() => setModal(false)} type="clear">
          Не выходить
        </BaseButton>
      </BasePopup>

      <div className={styled.Navbar}>
        <div
          style={{ zIndex: 10000 }}
          onClick={() => setBurgerActive(!burgerActive)}
        >
          <Burger open={burgerActive} fill={fill} />
        </div>

        {!burgerActive ? (
          <div className={styled.NavbarDefault}>
            <div className={styled.NavbarDefault__logo}>
              <LogoText
                className={styled.NavbarDefault__logoText}
                fill={fill}
              />
              {/* <div
                className={styled.NavbarDefault__burger}
                onClick={() => setBurgerActive(!burgerActive)}
              >
                <Burger open={burgerActive} fill={fill} />
              </div> */}
            </div>
          </div>
        ) : (
          <div className={styled.NavbarActive}>
            <div className={styled.wrapper}>
              <NavbarTop className={styled.NavbarTop} />
              <NavbarBotLeft className={styled.NavbarBotLeft} />
              <NavbarBotRight className={styled.NavbarBotRight} />

              <div className={styled.NavbarActive__logo}>
                <LogoText className={styled.NavbarActivet__logoText} />
                {/* 
                <div
                  className={styled.NavbarActive__burger}
                  onClick={() => setBurgerActive(!burgerActive)}
                ></div> */}
              </div>

              {isAuth ? (
                <div className={styled.NavbarActive__userinfo}>
                  <div className={styled.NavbarActive__usermail}>{email}</div>
                  <div className={styled.NavbarActive__userplace}>
                    {rank} место
                  </div>
                  <div className={styled.NavbarActive__userrecorde}>
                    Ваши очки: {points || 0}
                  </div>
                </div>
              ) : (
                <div className={styled.NavbarActive__userinfo}>
                  <p className={styled.NavbarActive__text}>
                    Ты не вошёл в аккаунт
                  </p>
                  <BaseButton
                    type="secondary"
                    method={() => router.push("/Auth")}
                  >
                    Войти
                  </BaseButton>
                </div>
              )}

              {isAuth ? (
                <div className={styled.NavbarActive__nav}>
                  {links.map((link) => {
                    return (
                      <span key={link.id}>
                        <NavbarLink href={link.href} title={link.title} />
                      </span>
                    );
                  })}
                </div>
              ) : (
                <div className={styled.NavbarActive__nav}>
                  <span style={{ marginBottom: 142 }}>
                    <NavbarLink href={links[1].href} title={links[1].title} />
                    <span style={{ display: "block", marginTop: 15 }}></span>
                    <NavbarLink href={links[3].href} title={links[3].title} />
                  </span>
                </div>
              )}

              {isAuth ? (
                <BaseButton
                  method={() => setModal(true)}
                  type="clear"
                  style={{ marginBottom: 40 }}
                >
                  Выйти
                </BaseButton>
              ) : (
                ""
              )}

              <Link href="https://www.thebodyshop.ru/ru/personal-data-protection.html">
                <a target="_blank">
                  <p className={styled.NavbarActive__text}>
                    <span>Политика обработки</span> <br />
                    <span>персональных данных</span>
                  </p>
                </a>
              </Link>

              <p className={styled.NavbarActive__text}>
                © 2021. The Body Shop.
                <br /> Все права защищены.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
