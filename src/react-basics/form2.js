import React, { useState } from "react"

export default function () {
  const [values, setValues] = useState({})

  function handleChange(event) {
    setValues(prevValues => ({
      ...prevValues,
      [event.target.name]: event.target.value
    }))
  }

  const onSubmit = (e) => {
    alert(`
    First Name: ${values.firstName}
    Last Name: ${values.lastName}`)
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
          />
        </div>
        <button type="submit" value="Submit">
          Sign Up
        </button>
      </form>
    </>
  )
}
