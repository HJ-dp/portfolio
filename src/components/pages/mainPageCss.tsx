import { css } from "@emotion/react";
import { defaultColors } from "../../styles/defaultColors";
export const mainCss = css`
  flex-direction: column;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${defaultColors.mainColor};
  & > img {
    max-width: 500px;
  }
  @media screen and (min-width: 480px) {
    & > img {
      border-radius: 25px;
    }
    justify-content: center;
  }

  @media screen and (max-width: 479px) {
    & > img {
      width: 100%;
    }
    justify-content: flex-end;
  }
`;
