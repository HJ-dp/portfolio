import { Outlet } from "react-router";

import styles from "./DefaultLayout.module.scss";

import GNB from "../components/common/GNB";
import Footer from "../components/common/Footer";

function DefaultLayout() {
  return (
    <main>
      <GNB />
      <article className={styles.articleLayout}>
        <Outlet />
      </article>
      <Footer />
    </main>
  );
}

export default DefaultLayout;
