import React, { useState } from "react";

// Let's put the state, handleChange... on a render props

const MiniFormik = (props) => {
  const [values, setValues] = useState(props.initialValues || {});

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    // validate
    event.preventDefault();
    props.onSubmit(values);
  };

  return props.children({
    values,
    handleChange: handleChange,
    handleSubmit: handleSubmit,
  });
};

const Intro = () => {
  return (
    <>
      <MiniFormik
        initialValues={{
          firstName: "Joe",
          lastName: "Black",
        }}
        onSubmit={(values) => alert(JSON.stringify(values))}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
            />
            <br />
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
            />
            <br />
            <button type="submit" value="Submit">
              Sign Up
            </button>
          </form>
        )}
      </MiniFormik>
    </>
  );
};

export default Intro;
