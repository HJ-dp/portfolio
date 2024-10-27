/** @jsxImportSource @emotion/react */
import { mainCss } from "./mainPageCss";

function MainPage() {

  const imageURL = `${__IMAGE_URL__}hojinlee.jpg`;


  return (
    <div id="mainImage" css={mainCss}>
      <img src={imageURL} alt="hojin" />
    </div>
  );
}

export default MainPage;
