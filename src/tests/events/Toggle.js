import React, { useState } from "react";

const Toggle = (props) => {
  const [state, setState] = useState(false);

  return (
    <button
      onClick={() => {
        setState((previuseState) => !previuseState);
        props.onChange(!state);
      }}
      id='toggle-button'
    >
      {state === true ? 'Turn off' : 'Turn on'}
    </button>
  );
};
export default Toggle;
