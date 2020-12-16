import React from "react";

const FormikContext = React.createContext({});

const Formik = ({children, ...props }) => {
  const formik = 'I am Formik!';
  return (
    <FormikContext.provider value={formik}>
      {typeof children === 'function'
        ? children(formik)
        : children}
    </FormikContext.provider>
  )
}

const App = () => (
  <Formik>
    {formik => <p>{formik}</p>}
  </Formik>
);

export default App;
