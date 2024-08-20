import { css } from "@emotion/react";
import { flexCenter, flexCenterColumn } from "../../styles/globalStyle";
import { defaultColors } from "../../styles/defaultColors";

export const footerCss = css`
  background-color: white;
  text-align: center;
  ${flexCenterColumn}
  flex-wrap: wrap;
  font-size: 0.7rem;
  padding: 1rem;
  & > *:not(:last-child) {
    padding: 0.5rem;
  }
`;

export const footerBtnBox = css`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const footerLogoBox = css`
  ${flexCenter}
  width: 100%;
  & > img {
    max-width: 2rem;
    margin: 1rem;
  }
  &::before,
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: ${defaultColors.mainColor};
  }
`;
