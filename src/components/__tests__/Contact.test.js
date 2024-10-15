import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

beforeAll(() => {
  console.log("before all test cases");
});

beforeEach(() => {
  console.log("before each test cases");
});

afterAll(() => {
  console.log("after all test cases");
});

afterEach(() => {
  console.log("after each test cases");
});

//describe() is used to group multiple test cases in a single block
describe("Contact us Page Test Case", () => {
  //1st test case to test/check whether the Contact us comp is loaded or not we checked heading
  it("Should load Contact us Component", () => {
    //test = it
    //rendering in jsdom
    render(<Contact />);

    //Querying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  //2nd test case to test/check whether the button is loaded in inside Contact us comp
  it("Should load button inside Contact us Component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");

    //We can also used getByText()
    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  //3rd test case - testing by the placeholdertext of input
  test("Should load input name in Contact us Component", () => {
    render(<Contact />);

    //Querying
    const inputName = screen.getByPlaceholderText("Enter your Name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  //4th test case - should load 3 input boxes inside Contact us comp
  test("Should load 3 input boxes inside Contact us Component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);

    //Assertion
    expect(inputBoxes.length).toBe(4);
  });
});
