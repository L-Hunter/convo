import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home convos={[]} />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
