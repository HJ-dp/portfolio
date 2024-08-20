/** @jsxImportSource @emotion/react */
import LinkButton from "../atoms/LinkButton";
import { footerCss, footerBtnBox, footerLogoBox } from "./footerCss";

function Footer() {
  return (
    <nav css={footerCss}>
      <nav css={footerBtnBox}>
        <LinkButton link={"https://github.com/HJ-dp"} name={"Github"}>
          <img src="uploadsImgs/icon/github.png" alt="Github Link" />
          {/* <img src="src/assets/icon/github.png" alt="Github Link" /> */}
        </LinkButton>
        <LinkButton
          link={
            "https://dynamic-cosmonaut-59e.notion.site/f744ddba8b744caeaa0465174af1f279?pvs=4"
          }
          name={"Notion"}
        >
          <img src="uploadsImgs/icon/notion.png" alt="Notion Link" />
          {/* <img src="src/assets/icon/notion.png" alt="Notion Link" /> */}
        </LinkButton>
      </nav>
      <p>Hojin's Portfolio Site</p>
      <p>Copyrights © HJ All Rights Reserved.</p>
      <div css={footerLogoBox}>
        <img src="uploadsImgs/icon/HJ.png" alt="Notion Link" />
        {/* <img src="src/assets/icon/HJ.png" alt="Notion Link" /> */}
      </div>
    </nav>
  );
}

export default Footer;
