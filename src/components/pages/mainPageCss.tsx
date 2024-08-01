import { css } from "@emotion/react";

export const mainCss = css`
  flex-direction: column;
  height: 100%;
  & > img {
    max-width: 500px;
  }
  @media screen and (max-width: 479px) {
    & > img {
      width: 100%;
    }
    align-items: flex-end;
  }
`;
