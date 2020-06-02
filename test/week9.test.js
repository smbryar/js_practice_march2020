const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/week9");
  
  describe("sumMultiples", () => {
    test("throws error if not passed an argument", () => {
      expect(() => sumMultiples()).toThrow("arr is required");
    });
    test("throws error if passed a non-array argument", () => {
      expect(() => sumMultiples("string")).toThrow("input must be an array");
      expect(() => sumMultiples(true)).toThrow("input must be an array");
      expect(() => sumMultiples(9)).toThrow("input must be an array");
      expect(() => sumMultiples({1:1,2:2,3:3})).toThrow("input must be an array");
    });
    test("returns sum of numbers which are a multiple of 3 or 5", () => {
      expect(sumMultiples([1,2,3,4,5])).toBe(8);
    });
    test("returns zero if no numbers are multiples of 3 or 5", () => {
      expect(sumMultiples([1,2,4,7])).toBe(0);
    });
    test("returns zero if no numbers given", () => {
      expect(sumMultiples([])).toBe(0);
    });
    test("works when numbers are given as decimals", () => {
      expect(sumMultiples([0.1,2.0,3.0,0.5])).toBe(3);
    });
  });