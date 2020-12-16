import React from "react";

const App = () => {
  return <Toolbar theme="dark" />;
};

const Toolbar = ({ theme }) => {
  return (
    <div>
      <ThemedButton theme={theme} />
    </div>
  );
};

const ThemedButton = ({ theme }) => {
  return <p>My theme is {theme}</p>;
};

export default App;
