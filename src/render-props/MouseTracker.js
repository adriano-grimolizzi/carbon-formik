import React, { useState } from "react";

const Cat = (props) => {
  const { mousePosition } = props;
  return (
    <p>
      The current mouse position is ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

const Mouse = (props) => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {props.render(state)}
    </div>
  );
};

const MouseTracker = () => {
  return (
    <>
      <h1>Move the mouse around!</h1>
      <Mouse render={(mouse) => <Cat mousePosition={mouse} />} />
    </>
  );
};

export default MouseTracker;
