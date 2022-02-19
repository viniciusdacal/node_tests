const compose = require("../compose");

test("should result in 8", () => {
  expect(compose()).toBe(18);
});
