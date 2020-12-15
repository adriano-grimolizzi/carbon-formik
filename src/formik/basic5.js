import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// use <Formik>

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(5, "Must be 5 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        {...formik.getFieldProps('email')}
      />
      <br />
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        {...formik.getFieldProps('name')}
      />
      {formik.errors.name && formik.touched.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <br />
      <button type="submit">Submit</button>
      <br />
      {JSON.stringify(formik, null, 2)}
    </form>
  );
};

export default SignupForm;
