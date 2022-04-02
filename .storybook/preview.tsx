import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globals";
import Head from "next/head";
export const decorators = [
  (Story) => (
    <ThemeProvider theme={GlobalStyle}>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />
        <link rel="stylesheet" href="../styles/global.css" />
      </Head>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
