import { css } from "@emotion/react";
import { flexCenter } from "../styles/globalStyle";

export const headerHeight = "0px";
export const footerHeight = "100px";

export const articleLayoutCss = css`
  min-height: calc(100vh - ${headerHeight});
  ${flexCenter}
  /* 데스크탑 */

  @media screen and (max-width: 767px) {
    /* 타블렛 */
  }

  @media screen and (max-width: 479px) {
    /* 모바일 */
  }
`;
