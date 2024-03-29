import React from "react"
import { useFormik } from "formik"

function SignupForm() {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default SignupForm

// Patterns and simmetry:
//
// 1. we reuse the same change handler for each input
//
// 2. we pass an 'id' and 'name' HTML attribute that
//    matches the property we defined in initialValues
//
// 3. we access the field's value using the same name
//    (email -> formik.values.email)
