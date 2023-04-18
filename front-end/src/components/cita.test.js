import React from "react";
import { render } from "@testing-library/react";
import Cita from "./Cita";

describe("<Cita />", () => {
  test("renders component", () => {
    const { container } = render(<Cita />);
    expect(container).toMatchSnapshot();
  });
});
