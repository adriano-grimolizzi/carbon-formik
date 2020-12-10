import React, { useState } from "react";
import "carbon-react/lib/utils/css";

import DateRange from "carbon-react/lib/__experimental__/components/date-range";

const App = () => {
  const [state, setState] = useState(["2016-10-01", "2016-10-30"]);

  const handleChange = ({ target }) => {
    const newValue = [target.value[0].rawValue, target.value[1].rawValue];
    setState(newValue);
  };

  return (
    <>
      <div>{state[0]}</div>
      <div>{state[1]}</div>

      <DateRange
        startLabel="Start"
        endLabel="End"
        onChange={handleChange}
        value={state}
      />
    </>
  );
};

export default App;
