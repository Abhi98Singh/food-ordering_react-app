import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
  //we are testing the sum() function
  const result = sum(5, 3);

  //it is Assertion
  expect(result).toBe(8);
});
