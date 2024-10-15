import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";

test("renders product item correctly", () => {
  const product = { name: "Sample Product", price: "$10", image: "sample.jpg" };
  render(<ProductItem product={product} />);
  expect(screen.getByText("Sample Product")).toBeInTheDocument();
  expect(screen.getByText("$10")).toBeInTheDocument();
});
