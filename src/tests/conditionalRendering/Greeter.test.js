import { act } from "@testing-library/react";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import Greeter from "./Greeter";

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove()
    container = null;
})

it("renders with or whithout a name", () => {
  act(() => {
    render(<Greeter />, container);
  });
  expect(container.textContent).toBe("Hey, stranger...");
  
  act(() => {
    render(<Greeter name="Cain"/>, container);
  });
  expect(container.textContent).toBe("Hello, Cain!");

  act(() => {
    render(<Greeter name="Abel"/>, container);
  });
  expect(container.textContent).toBe("Hello, Abel!");
});
