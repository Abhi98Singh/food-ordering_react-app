import { fireEvent, render, screen } from "@testing-library/react";
import Bodyy from "../Bodyy";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";

import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render Bodyy Comp with Search button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Bodyy />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  // console.log(searchBtn);

  //we find/get through placeholdertext
  // const searchInput = screen.getByPlaceholderText("Search for Restaurants");

  //If we have no way to get/find on screen then use TestId
  const searchInput = screen.getByTestId("searchInput");
  console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  //screen should load 2 cards for pizza

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(4);

  // expect(cards.length).toBe(2);

  // expect(searchBtn).toBeInTheDocument();
  // expect(searchInput).toBeInTheDocument();
});
