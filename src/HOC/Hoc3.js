import React, { useState } from "react";

const WithCounter = (OriginalComponent) => {
  class UpdatedComponent extends React.Component {
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
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }

  return UpdatedComponent;
};

const Click = ({ count, incrementCount }) => (
  <button onClick={incrementCount}>Clicked {count} times!</button>
);
const Hover = ({ count, incrementCount }) => (
  <h1 onMouseOver={incrementCount}>Hovered {count} times!</h1>
);

const ClickCounter = WithCounter(Click);
const HoverCounter = WithCounter(Hover);

const Hoc1 = () => {
  return (
    <>
      <ClickCounter />
      <HoverCounter />
    </>
  );
};

export default Hoc1;
