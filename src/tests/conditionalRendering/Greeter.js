import React from "react";

const Greeter = (props) => {
  if (props.name) {
    return <h1>Hello, {props.name}!</h1>;
  } else {
    return <p>Hey, stranger...</p>;
  }
};

export default Greeter;
