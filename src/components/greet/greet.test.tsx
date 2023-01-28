import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("renders with a name", () => {
    render(<Greet name="Vishwas" />);
    const textElement = screen.getByText("Hello Vishwas");
    expect(textElement).toBeInTheDocument();
  });
});
