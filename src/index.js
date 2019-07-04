/** @jsx jsx **/
import React from "react";
import { jsx, css, Global } from "@emotion/core";
import ReactDOM from "react-dom";

import App from "./app.js";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme.js";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          body,
          html {
            padding: 0;
            margin: 0;
          }
          html {
            font-family: sans-serif;
          }
        `}
      />
      <App />
    </>
  </ThemeProvider>,
  document.querySelector("#body")
);
