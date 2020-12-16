import React, { useState } from "react";

const HigherOrder = (OriginalComponent) => {
  return () => <OriginalComponent name="ABC" />;
};

const Greeter = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
};

const EnhancedGreeter = HigherOrder(Greeter);

const Hoc2 = () => {
  return <EnhancedGreeter />;
};

export default Hoc2;
