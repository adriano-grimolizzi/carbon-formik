import React from "react";

// Let's put the state, handleChange... on a render props

class MiniFormik extends React.Component {
  state = {
    values: this.props.initialValues || {},
  };
  handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    this.setState((prevState) => ({
      values: {
        ...prevState.values,
        [name]: value,
      },
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    // validate
    this.props.onSubmit(this.state.values);
  };
  render() {
    return this.props.children({
      ...this.state,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    });
  }
}

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
