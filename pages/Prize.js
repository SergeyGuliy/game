import React from "react";
import styles from "../styles/Coupons.module.scss";
import { BaseSubtitle, BaseTitle, Layout, Social } from "../components";
import CouponsBot from "../assets/img/CouponsBot";
import CouponsTop from "../assets/img/CouponsTop";
import Avocado from "../assets/img/Avocado";
import Mango from "../assets/img/Mango";

import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import FirstPrize from "../assets/img/prize/FirstPrize";
import SecondPrize from "../assets/img/prize/SecondPrize";
import ThirdPrize from "../assets/img/prize/ThirdPrize";

const Coupons = () => {
  // const NEED_SCORE = process.env.NEXT_PUBLIC_NEED_SCORE || 1400;

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch({ type: "GET_COUNT_GAME", payload: { token } });
  // }, []);

  React.useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      const { email, password } = JSON.parse(localStorage.getItem("user"));
      const { token } = JSON.parse(localStorage.getItem("token"));
      dispatch({ type: "AUTH_PROCESSS", payload: { email, password } });
      dispatch({ type: "GET_POINTS", payload: { token } });
      dispatch({ type: "GET_COUNT_GAME", payload: { token } });
      dispatch({ type: "CHECK_REWARD_TAKEN", payload: { token } });
    }
  }, []);

  // const score = useSelector((state) => state.user.points);
  const countGame = useSelector((state) => state.user.countGame);
  const rewardTaken = useSelector((state) => state.user.rewardTaken);

  const view = rewardTaken && countGame >= 2;
  return (
    <Layout>
      <div className={styles.Coupons_topimg}>
        <CouponsTop />
      </div>

      <div className={styles.Coupons_botimg}>
        <CouponsBot />
      </div>

      <div className={` ${styles.Coupons} ${styles.default}`}>
        <Swiper
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1.1,
              spaceBetween: 8,
              slidesOffsetBefore: 15,
              slidesOffsetAfter: 15,
            },
            360: {
              width: 290,
              slidesPerView: 1.1,
              spaceBetween: 8,
              // spaceBetween: 15,
              slidesOffsetBefore: 50,
              slidesOffsetAfter: 50,
            },
            375: {
              width: 290,
              slidesPerView: 1.1,
              spaceBetween: 8,
              // spaceBetween: 15,
              slidesOffsetBefore: 50,
              slidesOffsetAfter: 0,
            },
            393: {
              width: 290,
              slidesPerView: 1.1,
              spaceBetween: 8,
              // spaceBetween: 15,
              slidesOffsetBefore: 50,
              slidesOffsetAfter: 0,
            },
            411: {
              width: 295,
              slidesPerView: 1.1,
              spaceBetween: 8,
              slidesOffsetBefore: 60,
              slidesOffsetAfter: 0,
            },
            425: {
              width: 425,
              slidesPerView: 1.1,
              spaceBetween: 20,
              slidesOffsetBefore: 20,
              slidesOffsetAfter: 0,
            },
            640: {
              width: 640,
              slidesPerView: 1,
              spaceBetween: 20,
              // slidesOffsetBefore: 15,
              // slidesOffsetAfter: 15,
              allowTouchMove: false,
            },
            768: {
              width: 640,
              slidesPerView: 1,
              spaceBetween: 20,
              // slidesOffsetBefore: 20,
              // slidesOffsetAfter: 20,
              allowTouchMove: false,
            },
          }}
        >
          <SwiperSlide
            className={styles.SwiperSlide}
            style={{ width: "70%!important", height: "20px!important" }}
          >
            <div className="">
              <div className={styles.Coupons_item2}>
                <FirstPrize className={styles.firstPrize} />
                {/* <Avocado className={styles.Avocado} /> */}

                {/* <div className={styles.Coupons_img}></div> */}
                {/* <BaseTitle type="coupons" style={{ marginBottom: 8 }}>
                  avocado
                </BaseTitle> */}

                {/* <BaseSubtitle style={{ marginBottom: 16 }}>
                  Промокод на скидку 20% <br /> с 29 сентября по 29 октября
                </BaseSubtitle> */}

                <div className={styles.Coupons_description2}>
                  Скидка 20% в магазинах The
                  <br /> Body Shop
                  <br /> с 29 сентября по 31 октября
                  <br /> 2021 года включительно
                  <br /> для всех, кто сыграл один раз
                  <br /> и прошел регистрацию.
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSlide} style={{ width: "80%" }}>
            <div className="">
              <div className={styles.Coupons_item2}>
                <SecondPrize className={styles.secondPrize} />
                {/* <Mango className={styles.Mango} /> */}

                {/* <div className={styles.Coupons_img}></div>
                <BaseTitle type="coupons" style={{ marginBottom: 8 }}>
                  MANGO
                </BaseTitle>

                <BaseSubtitle style={{ marginBottom: 16 }}>
                  Промокод на скидку 30% <br /> с 29 сентября по 29 октября
                </BaseSubtitle> */}

                <div className={styles.Coupons_description2}>
                  Скидка 30% в магазинах The
                  <br /> Body Shop
                  <br /> с 29 сентября по 31 октября
                  <br /> 2021 года включительно
                  <br /> для зарегистрированных
                  <br /> пользователей,
                  <br /> набравших 500 и более
                  <br /> баллов за одну игру.
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.SwiperSlide} style={{ width: "80%" }}>
            <div className="">
              <div className={styles.Coupons_item2}>
                <ThirdPrize className={styles.thirdPrize} />
                {/* <Mango className={styles.Mango} /> */}

                {/* <div className={styles.Coupons_img}></div>
                <BaseTitle type="coupons" style={{ marginBottom: 8 }}>
                  MANGO
                </BaseTitle>

                <BaseSubtitle style={{ marginBottom: 16 }}>
                  Промокод на скидку 30% <br /> с 29 сентября по 29 октября
                </BaseSubtitle> */}

                <div className={styles.Coupons_description2}>
                  Каждую неделю проходит
                  <br /> розыгрыш 10 наборов из
                  <br /> масел для тела среди ТОП-100
                  <br /> участников за неделю
                  <br /> и сделавших репост Акции
                  <br /> в одной из социальных сетей.
                  <br />
                  <br /> Даты розыгрышей:
                  <br /> 06.10.2021; 13.10.2021;
                  <br /> 20.10.2021; 27.10.2021.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={styles.Coupons_social}></div>
        <Social color="#004236" />
      </div>
    </Layout>
  );
};

export default Coupons;
