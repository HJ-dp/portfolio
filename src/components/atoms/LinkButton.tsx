/** @jsxImportSource @emotion/react */
import { linkButtonCss } from "./linkButtonCss";

interface Props {
  link: string;
  name: string;
  children?: any;
}

function LinkButton({ link, name, children }: Props) {
  return (
    <a css={linkButtonCss} href={link} target="_blank" title={name}>
      {children}
      <h1>{name}</h1>
    </a>
  );
}

export default LinkButton;
