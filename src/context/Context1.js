import React from "react";

const ThemeContext = React.createContext();

const App = () => (
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
);

const Toolbar = () => (
  <div>
    <ThemedButton />
  </div>
);

const ThemedButton = () => (
  <ThemeContext.Consumer>
    {(value) => <p>My theme is {value}</p>}
  </ThemeContext.Consumer>
);

export default App;
