/** @jsxImportSource @emotion/react */
import { Outlet } from "react-router";

import { articleLayoutCss } from "./defaultLayoutCss";
import { fullCss } from "../styles/globalStyle";

function NoLayout() {
  return (
    <main css={fullCss}>
      <article css={articleLayoutCss}>
        <Outlet />
      </article>
    </main>
  );
}

export default NoLayout;
