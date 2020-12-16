import React, { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times!</button>
    </div>
  );
};

const HoverCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 onMouseOver={() => setCount(count + 1)}>Hover {count} times!</h1>
    </div>
  );
};

const Hoc1 = () => {
  return (
    <>
      <ClickCounter />
      <HoverCounter />
    </>
  );
};

export default Hoc1;
