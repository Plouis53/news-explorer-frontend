import { render, screen } from "@testing-library/react";
// @ts-ignore
import App from "./App.test";
import React from "react";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
