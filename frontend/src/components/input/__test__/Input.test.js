import React from "react";
import ReactDOM from "react-dom";

import Input from "../Input";
import { AiFillAlert } from "react-icons/ai";
import { cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Input
      icon={<AiFillAlert />}
      placeholder="Test Input Field"
      onChange={() => {}}
      label="Test Label"
      required
    />,
    div
  );
});

it("matches snapshot", () => {
  const inputTree = renderer
    .create(
      <Input
        icon={<AiFillAlert />}
        placeholder="Test Input Field"
        onChange={() => {}}
        label="Test Label"
        required
      />
    )
    .toJSON();

  expect(inputTree).toMatchSnapshot();
});
