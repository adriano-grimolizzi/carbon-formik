import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import mintTheme from "carbon-react/lib/style/themes/mint";
import "carbon-react/lib/utils/css";
import AppWrapper from "carbon-react/lib/components/app-wrapper";
// import SignupForm from "./formik/basic5";
import App from "./context/Context3";

const Index = () => {
  return (
    <ThemeProvider theme={mintTheme}>
      <AppWrapper>
        <App />
      </AppWrapper>
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
