import React from 'react';
import styles from '../styles/Desktop.module.scss';

import { BaseSubtitle, BaseTitle } from '../components/index';
import LogoImg from '../assets/img/LogoImg';
import LogoText from '../assets/img/LogoText';
import DesktopTopLeft from '../assets/img/DesktopTopLeft';
import DesktopTopRight from '../assets/img/DesktopTopRight';
import DesktopBotLeft from '../assets/img/DesktopBotLeft';
import DesktopBotRight from '../assets/img/DesktopBotRight';
import QrCode from '../assets/img/QrCode';

const Desktop = () => {
  return (
    <div className={styles.Desktop}>
      <DesktopTopLeft className={styles.DesktopTopLeft} />
      <DesktopTopRight className={styles.DesktopTopRight} />
      <DesktopBotLeft className={styles.DesktopBotLeft} />
      <DesktopBotRight className={styles.DesktopBotRight} />

      <div className={styles.Desktop_content}>
        <LogoImg className={styles.Desktop_logoimg} />
        <LogoText className={styles.Desktop_logotext} />
        <QrCode className={styles.Desktop_qrcode} />

        <BaseTitle style={{ marginBottom: 16, lineHeight: '200%' }}>
          <span className={styles.mini}>Настроение</span>
          <br />
          <span className={styles.large}>мягкости</span>
        </BaseTitle>

        <BaseSubtitle>
          Помоги котику собрать ингредиенты из новой <br /> коллекции масел для
          тела «The Body Shop». <br />
          <br />
          Для участия в акции открой <br />
          мобильную версию.
        </BaseSubtitle>
      </div>
    </div>
  );
};

export default Desktop;
