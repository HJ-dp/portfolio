import { css } from "@emotion/react";

export const globalCss = css`
  body {
    & * {
      box-sizing: border-box;
    }
    background-color: #a7e0c8;
  }

  /* 폰트 초기화 */
  body,
  input,
  textarea,
  select,
  button,
  table {
    font-family: "Pretendard-Regular";
  }

  /* 여백 초기화 */
  body,
  div,
  ul,
  li,
  dl,
  dd,
  dt,
  ol,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  fieldset,
  legend,
  p,
  select,
  table,
  th,
  td,
  tr,
  textarea,
  button,
  form,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }
`;

export const globalFont = css`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const fullCss = css`
  width: 100%;
  height: 100%;
`;
