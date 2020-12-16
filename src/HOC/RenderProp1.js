import React, { useState } from "react";

const Counter = (children) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return children.render(count, incrementCount);
};

const Click = ({ count, incrementCount }) => (
  <button onClick={incrementCount}>Clicked {count} times!</button>
);
const Hover = ({ count, incrementCount }) => (
  <h1 onMouseOver={incrementCount}>Hovered {count} times!</h1>
);

const App = () => (
  <>
    <h1>Render Props:</h1>
    <Counter
      render={(count, incrementCount) => (
        <Click count={count} incrementCount={incrementCount} />
      )}
    />
    <Counter
      render={(count, incrementCount) => (
        <Hover count={count} incrementCount={incrementCount} />
      )}
    />
  </>
);

export default App;
