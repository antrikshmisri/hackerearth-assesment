import React from "react";
import ReactDOM from "react-dom";

import Button from "../Button";
import { AiFillAlert } from "react-icons/ai";
import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Button
      text="Test Button"
      color="#333"
      icon={<AiFillAlert />}
      onClick={() => {}}
      style={{ color: "#fff" }}
    />,
    div
  );
});

it("renders button correctly", () => {
  const { getByText, getByTestId } = render(
    <Button
      text="Test Button"
      color="#333"
      icon={<AiFillAlert data-testid="icon" />}
      onClick={() => {}}
      style={{ color: "#fff" }}
    />
  );
  expect(getByText("Test Button")).toBeInTheDocument();
  expect(getByTestId("button")).toHaveStyle(
    "background-color: rgb(51, 51, 51)"
  );
  expect(getByTestId("button")).toHaveStyle("color: rgb(255, 255, 255)");
  expect(getByTestId("icon")).toBeInTheDocument();
});

it("matches snapshot", () => {
  const buttonTree = renderer
    .create(
      <Button
        text="Test Button"
        color="#333"
        icon={<AiFillAlert />}
        onClick={() => {}}
        style={{ color: "#fff" }}
      />
    )
    .toJSON();

  expect(buttonTree).toMatchSnapshot();
});

it("Is onClick called", () => {
  const testOnClick = jest.fn();
  const { getByTestId } = render(
    <Button
      text="Test Button"
      color="#333"
      icon={<AiFillAlert />}
      onClick={testOnClick}
      style={{ color: "#fff" }}
    />
  );

  const button = getByTestId("button");
  button.click();
  expect(testOnClick).toBeCalledTimes(1);
});
