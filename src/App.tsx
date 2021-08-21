import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { Theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Home />
      <div>{process.env.REACT_APP_VARIABLE}</div>
    </ThemeProvider>
  );
};

export default App;
