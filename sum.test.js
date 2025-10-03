import sum from "./sum.js";

describe("test for sum fnx", () => {
  test("Adds 2 + 2 equal to 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("Adds -5 + -2 equal to -7", () => {
    expect(sum(-5, -2)).toBe(-7);
  });
});
