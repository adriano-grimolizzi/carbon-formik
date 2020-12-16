import { Field, Formik } from "formik";
import React from "react";

const Example1 = () => {
  return (
    <Formik
      initialValues={{
        name: "Adriano",
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <h1>Formik Example...</h1>
          <label htmlFor="name">Name</label>
          <br />
          <Field name="name" type="text" />
          <button type="submit">Submit</button>
          <br />
          <pre>{JSON.stringify(formik, null, 2)}</pre>
        </form>
      )}
    </Formik>
  );
};

export default Example1;
