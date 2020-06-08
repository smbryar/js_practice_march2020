const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("throws error if not passed an argument", () => {
      expect(() => sumDigits()).toThrow("n is required");
    });
    test("throws error if not passed a number", () => {
      expect(() => sumDigits("string")).toThrow("n must have type number");
      expect(() => sumDigits(["arr"])).toThrow("n must have type number");
      expect(() => sumDigits({number:123})).toThrow("n must have type number");
      expect(() => sumDigits(true)).toThrow("n must have type number");
    });
    test("throws error if not passed a positive integer", () => {
      expect(() => sumDigits(-6)).toThrow("n must be a positive integer");
      expect(() => sumDigits(2.5)).toThrow("n must be a positive integer");
    });
    test("returns sum of digits when passed number", () => {
      expect(sumDigits(123)).toBe(6);
    });
    test("returns 0 when passed 0", () => {
      expect(sumDigits(0)).toBe(0);
    });
  });