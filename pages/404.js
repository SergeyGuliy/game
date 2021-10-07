import React from 'react';
import Link from 'next/link';
import { BaseButton, Layout } from '../components';
import styles from '../styles/Error.module.scss';
import Cat404 from '../assets/img/404cat';
import Leftimg404 from '../assets/img/404leftimg';
import Rightimg404 from '../assets/img/404rightimg';
import { background } from '../utils/global';

const Error = () => {
  return (
    <Layout bg={background.green} fill='#ffffff'>
      <div className={styles.Cat404}>
        <Cat404 />
      </div>

      <div className={styles.Leftimg404}>
        <Leftimg404 />
      </div>

      <div className={styles.Rightimg404}>
        <Rightimg404 />
      </div>

      <div className={styles.Error}>
        <h1 className={styles.Error_title}>404</h1>

        <h2 className={styles.Error_subtitle}>
          такой страницы <br /> не существует
        </h2>

        <BaseButton type='empty'>
          <Link href='/'>
            <a className={styles.Error_link}>На главную</a>
          </Link>
        </BaseButton>
      </div>
    </Layout>
  );
};

export default Error;
