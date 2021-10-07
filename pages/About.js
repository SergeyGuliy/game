import React from "react";
import Image from "next/image";
import Head from "next/head";

import Link from "next/link";
import {
  BaseButton,
  BaseTitle,
  Layout,
  QuestionItem,
  Social,
} from "../components";
import { background } from "../utils/global";
import { Arrow } from "../assets/img/Arrow";
import hiddenMail from "../utils/hiddenMail";
import SocialBg from "../assets/img/SocialBg";
import AboutFooterTop from "../assets/img/AboutFooterTop";
import AboutFooterBot from "../assets/img/AboutFooterBot";
import styles from "../styles/About.module.scss";
// import AboutCat from "../assets/img/about_cat.png";
import AboutCat from "../assets/img/cat_about.png";
const mockUsers = [
  {
    date_period: {
      start: "02.08.2021",
      end: "08.08.2021",
    },
    winners: [
      { user_id: 15, user_mail: "dentean1@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentean2@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentean@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentean@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentean@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentean@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentean@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentean@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentean@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentean@mail.ru", user_score: 1300 },
    ],
  },
  {
    date_period: {
      start: "09.08.2021",
      end: "15.08.2021",
    },
    winners: [
      { user_id: 15, user_mail: "dentean3@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentea4n@mail.ru", user_score: 1300 },
      { user_id: 15, user_mail: "dentean@mail.ru", user_score: 1300 },
    ],
  },
];

const questions = [
  {
    id: 1,
    title: `Кто является организатором акции?`,
    answer: " Организатор акции — ООO «МОНЭКС ТРЕЙДИНГ»",
  },
  {
    id: 2,
    title: ` Что мне нужно сделать, чтобы принять участие в акции?`,
    answer:
      " В период действия акции зайдите на сайт и сыграйте в игру «Три в ряд», объединяя одинаковые игровые элементы по три и более в ряд, перемещая фишки относительно друг друга.",
  },
  {
    id: 3,
    title: `Каковы сроки проведения акции?`,
    answer: `Общий срок проведения Акции (включая срок получения Участниками Акции Поощрений): с 29 сентября 2021 г. по 30 ноября 2021 г. (включительно). \n 
     Период совершения игровых действий, регистрации на Сайте Акции и получение промо-кодов на скидку: с 29 сентября 2021 г. по 29 октября 2021 г. (включительно). \n
      Даты проведения розыгрышей суперпризов (набор из масел для тела): 
      06.10.2021
      13.10.2021
      20.10.2021
      27.10.2021\n
      Период вручения супер-призов: с 6 октября  2021г. по 30 ноября 2021г.\n
      `,
  },
  {
    id: 4,
    title: `Кто может принимать участие в акции?`,
    answer: `Любой гражданин Российской Федерации, достигший 18-летия, может стать участником акции.`,
  },
  {
    id: 5,
    title: "Сколько призов/поощрений я могу получить за весь срок Акции?",
    answer: `За весь период акции вы можете получить максимум 3 приза/поощрения:\n
    Промокод на скидку 20% — 1 шт.
    Промокод на скидку 30% — 1 шт.
    Еженедельный приз: набор из трех масел для тела — 1 шт.
    `,
  },
  {
    id: 6,
    title: "Сколько раз я могу зарегистрироваться?",
    answer: `Для одного адреса электронной почты и номера телефона доступна одна регистрация.`,
  },
  {
    id: 7,
    title: "Как я могу получить скидки  и еженедельный приз?",
    answer: `Процедура получения поощрений:\n
    Поощрения в виде промокода на скидку отправляются на электронный адрес участника, указанный при регистрации.

    Еженедельный приз доставляется курьерской службой за счет Организатора Акции по почтовому адресу, указанному победителем. Организатор Акции после розыгрыша связывается с победителями по электронным адресам, указанным при регистрации.
    `,
  },
  {
    id: 8,
    title: "Какие призы/поощрения я могу получить за участие в акции?",
    answer: `Промокод на скидку 20% на покупку товаров по полной цене в розничных магазинах The Body Shop и на сайте thebodyshop.ru. Скидка по промокоду не суммируется со скидками по другим акциям и не распространяется на приобретение подарочных карт. 

    Промокод на скидку 30% на покупку товаров по полной цене  в розничных магазинах The Body Shop и на сайте thebodyshop.ru. Скидка по промокоду не суммируется со скидками по другим акциям и не распространяется на приобретение подарочных карт. 

    Набор из трех масел для тела от The Body Shop (масло для тела «Авокадо» 200 мл, масло для тела «Манго» 200 мл, масло для тела «Британская роза» 200 мл).

    `,
  },
  {
    id: 9,
    title:
      "Что делать, если возникли вопросы, ответов на которые нет в этом F.A.Q.?",
    answer: `Если вдруг вы не нашли ответ на свой вопрос, обратитесь в службу технической поддержки на электронный адрес: support@game-bodybutters.ru. Вам ответят в течение суток.`,
  },
];

const About = () => {
  const [page, setPage] = React.useState(1);

  const prevPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevDisable = () => {
    if (page <= 1) {
      return true;
    }
    return false;
  };

  const nextDisable = () => {
    if (mockUsers.length <= page) {
      return true;
    }
    return false;
  };

  const winnersComputed = (pageNumber = 1) => {
    let startIndex = pageNumber - 1;
    let endIndex = pageNumber;

    let winners = mockUsers.slice(startIndex, endIndex);
    return winners;
  };

  return (
    <>
      <Layout bg={background.light_beige}>
        <div className={styles.About_content}>
          <BaseTitle style={{ marginBottom: 16 }} type="left">
            <span style={{ fontSize: 14, display: "block", marginBottom: "" }}>
              Замур-р-рчательные
            </span>
            <br />
            <span style={{ fontSize: 34 }}>баттеры</span>
          </BaseTitle>
          <div className={styles.About_timing}>
            <span>Сроки проведения с </span>29.09.21 по 29.10.21
          </div>
          <h2 className={styles.About_subtitle}>
            Помоги котику собрать ингредиенты из коллекции масел для тела от{" "}
            <br />
            The Body Shop
          </h2>
          <p className={styles.About_text}>
            Играй и выигрывай скидки и подарки от этичного бьюти-бренда из
            Великобритании The Body Shop
          </p>
          <br />
          <p className={styles.About_text}>
            Игровая механика «Три в ряд». Необходимо объединять игровые элементы
            по три и более в ряд, перемещая фишки относительно друг друга. При
            этом фишки сгорают, а игрок получает соизмеримое количество баллов.
            Количество балов зависит от того, сколько фишек сгорело и от типа
            фишки.
          </p>
          <br />
          <br />
          {/* <h2 className={styles.About_subtitle}>Механика геймплэя</h2>
        <ul className={styles.About_ul}>
          <li className={styles.About_li}>
            <span className={styles.About_li_number}>1.</span>Первый экран
            открывает игровое поле, заполненное фишками.
          </li>
          <li className={styles.About_li}>
            <span className={styles.About_li_number}>2.</span>При смене
            положения фишки меняются местами: перетаскиваемая с той на какое
            поле ставится.
          </li>
          <li className={styles.About_li}>
            <span className={styles.About_li_number}>3.</span>Если при смене
            фишки рядом оказались одинаковые значки, то они сгорают, а игрок
            получает некоторое количество баллов. Количество балов зависит от
            того сколько фишек сгорело и типа фишки.
          </li>
        </ul> */}
          <h2 className={styles.About_subtitle}>Призовой фонд</h2>
          <p className={styles.About_text}>
            Скидка 20% в магазинах The Body Shop с 29 сентября по 31 октября
            2021 года включительно для каждого, кто сыграл один раз и
            зарегистрировался.
          </p>
          <br />
          <p className={styles.About_text}>
            Скидка 30% в магазинах The Body Shop c 29 сентября по 31 октября
            2021 года включительно для зарегистрированных пользователей,
            набравших 500 и более баллов за одну игру.
          </p>
          <br />
          <p className={styles.About_text}>
            Каждую неделю проходит розыгрыш 10 наборов из масел для тела среди
            ТОП-100 участников за неделю (набравших максимальное количество
            баллов) и сделавших репост Акции в одной из социальных сетей
            (vk.com, facebook.com, ok.ru). Розыгрыш проходит 4 раза: 06.10.2021;
            13.10.2021; 20.10.2021; 27.10.2021.
          </p>
          <br />
          <p className={styles.About_textmini}>
            Состав призового набора:
            <span>
              масло для тела «Авокадо» 200 мл, масло для тела «Манго» 200 мл,
              масло для тела «Британская роза» 200 мл.
            </span>
          </p>
          {/* тут будет картинка кота с призами */}
          <div className={styles.About_catimg}>
            <Image src={AboutCat} />
          </div>

          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1UaFpbYw7S2m8sMvCNcKjdNcxPy4RujnK/view?usp=sharing"
            }
          >
            <a target="_blank">
              <div className={styles.About_btn}>
                <BaseButton type="secondary">подробнее</BaseButton>
              </div>
            </a>
          </Link>
        </div>

        <div className={styles.About_social}>
          <Social background="#004236" fill="#FFED76" />
          <div className={styles.About_social_bg}>
            <SocialBg />
          </div>
        </div>
        {/* 
      <div className={styles.About_winner}>
        <BaseTitle
          style={{ marginBottom: 24, textAlign: "center" }}
          type="left"
        >
          победители
        </BaseTitle>

        <div className={styles.About_winner_content}>
          <span
            className={` ${styles.Navbar_left} ${
              prevDisable() ? styles.disable : ""
            }`}
          >
            <BaseButton
              type="clear"
              style={{ width: 23, height: 20 }}
              method={prevPage}
            >
              <Arrow />
            </BaseButton>
          </span>
          <span
            className={` ${styles.Navbar_right} ${
              nextDisable() ? styles.disable : ""
            }`}
          >
            <BaseButton
              type="clear"
              style={{ width: 23, height: 20 }}
              method={nextPage}
            >
              <Arrow />
            </BaseButton>
          </span>

          {mockUsers && (
            <div>
              {winnersComputed(page).map((winnersPeriod, index) => {
                return (
                  <div key={index}>
                    <div className={styles.About_winner_header}>
                      <div className={styles.Period}>
                        {winnersPeriod.date_period.start} —{" "}
                        {winnersPeriod.date_period.end}
                      </div>
                    </div>

                    <ul className={styles.About_winner_users}>
                      {winnersPeriod.winners.map((winner, j) => {
                        return (
                          <li key={j} className={styles.About_winner_user}>
                            <div className={styles.About_winner_usermail}>
                              {hiddenMail(winner.user_mail)}
                            </div>
                            <div className={styles.About_winner_userscore}>
                              {winner.user_score}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div> */}

        <div className={styles.About_question}>
          <div className={styles.About_question_header}>
            <BaseTitle type="left">FAQ</BaseTitle>
          </div>

          <div>
            {questions &&
              questions.map((item) => {
                return <QuestionItem item={item} key={item.id} />;
              })}
          </div>
        </div>

        <div className={styles.About_footer}>
          <div className={styles.About_footer_content}>
            <div className={styles.About_footer_topimg}>
              <AboutFooterTop />
            </div>
            <div className={styles.About_footer_botimg}>
              <AboutFooterBot />
            </div>
            <div className={styles.About_footer_title}>
              <BaseTitle type="left" style={{ color: "#FFED76" }}>
                связаться <br />с нами
              </BaseTitle>
            </div>
            <div className={styles.About_footer_subtitle}>
              Напиши нам, и мы ответим <br /> на интересующие тебя вопросы
            </div>

            {/* <BaseButton type="default" style={{ width: "100%" }}>
            написать
          </BaseButton> */}

            <a
              className={styles.mailLink}
              href="mailto:support@game-bodybutters.ru"
            >
              написать
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
