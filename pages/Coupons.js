import React from "react";
import styles from "../styles/Coupons.module.scss";
import { BaseSubtitle, BaseTitle, Layout, Social } from "../components";
import CouponsBot from "../assets/img/CouponsBot";
import CouponsTop from "../assets/img/CouponsTop";
import Avocado from "../assets/img/Avocado";
import Mango from "../assets/img/Mango";

import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";

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
        {!view ? (
          <div
            className={` ${styles.Coupons_item} ${styles.Coupons_item_default}`}
          >
            <Avocado className={styles.Avocado} />

            <div className={styles.Coupons_img}></div>
            <BaseTitle type="coupons" style={{ marginBottom: 8 }}>
              avocado
            </BaseTitle>

            <BaseSubtitle style={{ marginBottom: 16 }}>
              Скидка 20% от The Body Shop
            </BaseSubtitle>

            <div className={styles.Coupons_description}>
              Для получения скидки 20%
              <br /> назови промокод AVOCADO
              <br /> в магазине при оплате
              <br /> покупки на кассе или введи
              <br /> его в специальное поле
              <br /> при оформлении заказа
              <br /> в интернет-магазине
              <br />
              <a className={styles.link} href="https://thebodyshop.ru">
                thebodyshop.ru
              </a>{" "}
              до 31.10.2021
              <br /> включительно
            </div>
          </div>
        ) : (
          <Swiper
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1.1,
                spaceBetween: 8,
                slidesOffsetBefore: 15,
                slidesOffsetAfter: 15,
              },
              375: {
                slidesPerView: 1.2,
                spaceBetween: 20,
                slidesOffsetBefore: 30,
              },
              640: {
                width: 620,
                slidesPerView: 2,
                spaceBetween: 20,
                slidesOffsetBefore: 15,
                slidesOffsetAfter: 15,
                allowTouchMove: false,
              },
              768: {
                width: 640,
                slidesPerView: 2,
                spaceBetween: 20,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
                allowTouchMove: false,
              },
            }}
          >
            <SwiperSlide>
              <div className="">
                <div className={styles.Coupons_item}>
                  <Avocado className={styles.Avocado} />

                  <div className={styles.Coupons_img}></div>
                  <BaseTitle type="coupons" style={{ marginBottom: 8 }}>
                    avocado
                  </BaseTitle>

                  <BaseSubtitle style={{ marginBottom: 16 }}>
                    Скидка 20% от The Body Shop
                  </BaseSubtitle>

                  <div className={styles.Coupons_description}>
                    Для получения скидки 20%
                    <br /> назови промокод AVOCADO
                    <br /> в магазине при оплате
                    <br /> покупки на кассе или введи
                    <br /> его в специальное поле
                    <br /> при оформлении заказа
                    <br /> в интернет-магазине
                    <br />
                    <a className={styles.link} href="https://thebodyshop.ru">
                      thebodyshop.ru
                    </a>{" "}
                    до 31.10.2021
                    <br /> включительно
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <div className={styles.Coupons_item}>
                  <Mango className={styles.Mango} />

                  <div className={styles.Coupons_img}></div>
                  <BaseTitle type="coupons" style={{ marginBottom: 8 }}>
                    MANGO
                  </BaseTitle>

                  <BaseSubtitle style={{ marginBottom: 16 }}>
                    Скидка 30% от The Body Shop
                  </BaseSubtitle>

                  <div className={styles.Coupons_description}>
                    Для получения скидки 20%
                    <br /> назови промокод AVOCADO
                    <br /> в магазине при оплате
                    <br /> покупки на кассе или введи
                    <br /> его в специальное поле
                    <br /> при оформлении заказа
                    <br /> в интернет-магазине
                    <br />
                    <a className={styles.link} href="https://thebodyshop.ru">
                      thebodyshop.ru
                    </a>{" "}
                    до 31.10.2021
                    <br /> включительно
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        <div className={styles.Coupons_social}></div>
        <Social color="#004236" />
      </div>
    </Layout>
  );
};

export default Coupons;
