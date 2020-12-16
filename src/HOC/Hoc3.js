import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((previousState) => ({ count: previousState.count + 1 }));
    };

    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }

  return WithCounter;
};

const Click = ({ count, incrementCount }) => (
  <button onClick={incrementCount}>Clicked {count} times!</button>
);
const Hover = ({ count, incrementCount }) => (
  <h1 onMouseOver={incrementCount}>Hovered {count} times!</h1>
);

const ClickCounter = withCounter(Click);
const HoverCounter = withCounter(Hover);

const Hoc1 = () => {
  return (
    <>
      <ClickCounter />
      <HoverCounter />
    </>
  );
};

export default Hoc1;
