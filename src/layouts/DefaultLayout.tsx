/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router";

import GNB from "../components/common/GNB";
import Footer from "../components/common/Footer";
import { articleLayoutCss } from "./defaultLayoutCss";
import { fullCss } from "../styles/globalStyle";

function DefaultLayout() {
  return (
    <main css={fullCss}>
      <GNB />
      <article css={articleLayoutCss}>
        <Outlet />
      </article>
      <Footer />
    </main>
  );
}

export default DefaultLayout;
