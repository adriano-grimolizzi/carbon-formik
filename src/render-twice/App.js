import React from "react";

const App = () => {
  const [click, setClick] = React.useState(0);

  console.log("I render 😡", click);
  
  setTimeout(() => setClick(true), 2000);


  return (
    <div>
      <p>ciao</p>
    </div>
  );
};

export default App;
