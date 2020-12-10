import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import mintTheme from "carbon-react/lib/style/themes/mint";
import "carbon-react/lib/utils/css";
import AppWrapper from "carbon-react/lib/components/app-wrapper";
import Button from "carbon-react/lib/components/button";
import App from './App'

const Index = (props) => {
  return (
    <ThemeProvider theme={mintTheme}>
      <AppWrapper>
        {/* <Button>Hello Carbon</Button> */}
        <App />
      </AppWrapper>
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
