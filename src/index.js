import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import mintTheme from "carbon-react/lib/style/themes/mint";
import "carbon-react/lib/utils/css";
import AppWrapper from "carbon-react/lib/components/app-wrapper";
import FormikDateRange from "./FormikDateRange";
import DialogExample from "./DialogExample";
import FormikTest1 from "./formik/FormikTest1";

const Index = () => {
  return (
    <ThemeProvider theme={mintTheme}>
      <AppWrapper>
        <FormikDateRange />
        <p>---</p>
        <DialogExample />
        <p>---</p>
        <FormikTest1 />
      </AppWrapper>
    </ThemeProvider>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));
