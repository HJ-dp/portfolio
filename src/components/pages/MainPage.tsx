/** @jsxImportSource @emotion/react */
import { mainCss } from "./mainPageCss";
function MainPage() {
  return (
    <div id="mainImage" css={mainCss}>
      <img src="uploadsImgs/hojinlee.jpg" alt="hojin" />
      {/* <img src="../src/assets/hojinlee.jpg" alt="hojin" /> */}
    </div>
  );
}

export default MainPage;
