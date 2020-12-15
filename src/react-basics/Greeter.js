import React from 'react'
import PropTypes from "prop-type";

class Greeter extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeter.propTypes = {
  name: PropTypes.string,
};

export default Greeter;
