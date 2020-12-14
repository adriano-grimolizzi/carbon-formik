import React, { useState } from "react";

const MouseTracker = (props) => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      <h1>Move the mouse around!</h1>
      <p>
        The current mouse position is ({state.x}, {state.y})
      </p>
    </div>
  );
};

export default MouseTracker;
