import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import User from "./User";

// Instead of calling real APIs in your test, you have to mock request with
// dummy data. Mocking data fetching with "fake" data prevents failed test
// due to unavailable backend, and makes them run faster.

// Note: you may want to run end-to-end tests to check whether the whole app
// is working together

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("render user data", async () => {
  const fakeUser = {
    name: "Pinco Pallino",
    email: "pinco.pallino@hotmail.it",
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser),
    })
  );

  await act(async () => {
    render(<User />, container);
  });

  console.log(container.textContent);
  expect(container.textContent).toContain(fakeUser.name);
  expect(container.textContent).toContain(fakeUser.email);
  global.fetch.mockRestore();
});
