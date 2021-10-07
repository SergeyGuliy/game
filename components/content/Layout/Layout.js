import React from "react";
import { Cookie, Navbar } from "../..";
import { background } from "../../../utils/global";
import setCookie from "../../../helper/createCockies";
import getCookie from "../../../helper/getCockies";
import styles from "./Layout.module.scss";

const Layout = ({ children, bg, fill }) => {
  const [isCookie, setIsCookie] = React.useState(false);

  const [bgcolor, setBgcolor] = React.useState(background.beige);

  const showCookie = () => {
    if (!getCookie("bodyshop")) {
      setTimeout(() => {
        setIsCookie(true);
      }, 3000);
    }
  };

  const hiddenCookie = () => {
    setCookie("bodyshop", "true", 30);
    setIsCookie(false);
  };

  React.useEffect(() => {
    showCookie();
  }, []);

  React.useEffect(() => {
    setBgcolor(bg);
  }, [bg]);

  return (
    <div className={styles.layout} style={{ background: `${bgcolor}` }}>
      <Navbar fill={fill} />
      <div>{children}</div>
      {isCookie && <Cookie handlerCookie={hiddenCookie} />}
    </div>
  );
};

export default Layout;
