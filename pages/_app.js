import "../styles/reset.css";
import "../styles/swiper.scss";

import Head from "next/head";
import { Provider } from "react-redux";

import { makeStore } from "../redux/store";

// import { YMInitializer } from "react-yandex-metrika";

const store = makeStore();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>The Body Shop</title>

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="The Body Shop" />
        <meta
          name="twitter:description"
          content="ЗАМУР-Р-РЧАТЕЛЬНЫЕ БАТТЕРЫ! Помоги котику собрать ингредиенты из новой коллекции масел для тела «The Body Shop», получи промо-код на скидку и получи возможность участвовать в розыгрыше наборов из масел для тела"
        />
        <meta
          name="twitter:image"
          content="https://iskra-st.ru/img/IMG_2734.PNG"
        />

        <meta
          name="description"
          content="ЗАМУР-Р-РЧАТЕЛЬНЫЕ БАТТЕРЫ! Помоги котику собрать ингредиенты из новой коллекции масел для тела «The Body Shop», получи промо-код на скидку и получи возможность участвовать в розыгрыше наборов из масел для тела"
        />
        <meta property="og:url" content="https://www.game-bodybutters.ru/" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="ЗАМУР-Р-РЧАТЕЛЬНЫЕ БАТТЕРЫ! Помоги котику собрать ингредиенты из новой коллекции масел для тела «The Body Shop», получи промо-код на скидку и получи возможность участвовать в розыгрыше наборов из масел для тела"
        />
        <meta property="og:title" content="The Body Shop" />
        <meta
          property="og:comment"
          content="ЗАМУР-Р-РЧАТЕЛЬНЫЕ БАТТЕРЫ! Помоги котику собрать ингредиенты из новой коллекции масел для тела «The Body Shop», получи промо-код на скидку и получи возможность участвовать в розыгрыше наборов из масел для тела"
        />

        <meta
          property="og:image"
          content="https://iskra-st.ru/img/IMG_2734.PNG"
        />
        <meta
          property="vk:image"
          content="https://iskra-st.ru/img/IMG_2734.PNG"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1.0, user-scalable=no"
        />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7XBDSYBTZS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-7XBDSYBTZS');
              `,
          }}
        />
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        {/* <!-- Yandex.Metrika counter --> */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(85661848, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });`,
          }}
        />
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/8566184`}
              style={{ position: "absolute", left: `-9999px` }}
              alt=""
            />
          </div>
        </noscript>
        {/* <!-- /Yandex.Metrika counter --> */}

        {/* <!-- /Yandex.Metrika counter --> */}
      </Head>

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
