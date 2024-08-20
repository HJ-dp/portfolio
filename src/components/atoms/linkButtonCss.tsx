import { css } from "@emotion/react";
import { flexCenterColumn } from "../../styles/globalStyle";

export const linkButtonCss = css`
  ${flexCenterColumn}
  padding: 0.1rem;
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 1rem;
  white-space: nowrap;
  font-size: 0.5rem;
  text-decoration: none;
  & > img {
    max-width: 1.5rem;
  }
`;
