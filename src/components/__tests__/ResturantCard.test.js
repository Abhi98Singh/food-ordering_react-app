import { render, screen } from "@testing-library/react";
import ResturantCard, { withVegLabel } from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

//test case for to check RestaurantCard Comp is rendered or not, we passes mockData and querying by resName
it("should render/load RestaurantCard comp with props Data", () => {
  //we are passing mockData
  render(<ResturantCard restListss={MOCK_DATA} />);

  //querying
  const resName = screen.getByText("Starbucks Coffee");

  expect(resName).toBeInTheDocument();
});

//test case for to withVegLabel(HOC) is rendred or not
it("should render RestaurantCard comp Veg Label", () => {
  //Test Higher order comp with Veg Label
});
