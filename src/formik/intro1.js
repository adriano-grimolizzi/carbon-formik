import React, { useState } from "react";

const Intro = () => {
  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (e) => {
    alert(`
    First Name: ${state.firstName}
    Last Name: ${state.lastName}`);
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={state.firstName}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={state.lastName}
          />
        </div>
        <button type="submit" value="Submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Intro;
