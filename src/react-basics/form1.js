import React, { useState } from "react";

const Form1 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const onSubmit = (e) => {
    alert(`
    First Name: ${firstName}
    Last Name: ${lastName}`);
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
            onChange={handleFirstNameChange}
            value={firstName}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleLastNameChange}
            value={lastName}
          />
        </div>
        <button type="submit" value="Submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Form1;
