/** @jsxImportSource @emotion/react */
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import { Global } from "@emotion/react";
import { globalCss, globalFont } from "./styles/globalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <Global styles={[globalCss, globalFont]} />
      <Router />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
