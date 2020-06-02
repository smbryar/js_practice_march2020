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
    expect(() => sumMultiples({ 1: 1, 2: 2, 3: 3 })).toThrow("input must be an array");
  });
  test("returns sum of numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 2, 3, 4, 5])).toBe(8);
  });
  test("returns zero if no numbers are multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 4, 7])).toBe(0);
  });
  test("returns zero if no numbers given", () => {
    expect(sumMultiples([])).toBe(0);
  });
  test("works when numbers are given as decimals", () => {
    expect(sumMultiples([0.1, 2.0, 3.0, 0.5])).toBe(3);
  });
});

describe("isValidDNA", () => {
  test("throws error if not passed an argument", () => {
    expect(() => isValidDNA()).toThrow("str is required");
  });
  test("throws error if not passed a string", () => {
    expect(() => isValidDNA(123)).toThrow("input must be a string");
    expect(() => isValidDNA(["A"])).toThrow("input must be a string");
  });
  test("returns true if passed valid DNA", () => {
    expect(isValidDNA("ACCGTAT")).toBe(true);
  });
  test("returns false if passed invalid DNA", () => {
    expect(isValidDNA("ACCBHTAT")).toBe(false);
  });
  test("is not case sensitive", () => {
    expect(isValidDNA("AcCbhTaT")).toBe(false);
    expect(isValidDNA("AcCgT")).toBe(true);
  });
});

describe("getComplementaryDNA", () => {
  test("throws error if not passed an argument", () => {
    expect(() => getComplementaryDNA()).toThrow("str is required");
  });
  test("throws error if not passed a string", () => {
    expect(() => getComplementaryDNA(123)).toThrow("input must be a string");
    expect(() => getComplementaryDNA(["A"])).toThrow("input must be a string");
  });
  test("throws error if not passed valid DNA", () => {
    expect(() => getComplementaryDNA("AcCbhTaT")).toThrow("input must be valid DNA string");
  });
  test("returns complementary pairs for DNA", () => {
    expect(getComplementaryDNA("ATCG")).toBe("TAGC");
  });
  test("is not case sensitive", () => {
    expect(getComplementaryDNA("aTcG")).toBe("TAGC");
  });
});

describe("isItPrime", () => {
  test("throws error if not passed an argument", () => {
    expect(() => isItPrime()).toThrow("n is required");
  });
  test("throws error if not passed a number", () => {
    expect(() => isItPrime("hello")).toThrow("input must be a number");
    expect(() => isItPrime(["A"])).toThrow("input must be a number");
  });
  test("returns true for low prime numbers", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(13)).toBe(true);
  });
  test("returns true for large prime numbers", () => {
    expect(isItPrime(3691)).toBe(true);
    expect(isItPrime(7919)).toBe(true);
  });
  test("returns false for negative values", () => {
    expect(isItPrime(-1)).toBe(false);
    expect(isItPrime(-3)).toBe(false);
    expect(isItPrime(-300)).toBe(false);
  });
  test("returns false for non-primes", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(8)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("throws error if not passed a size value", () => {
    expect(() => createMatrix(undefined, "foo")).toThrow("n is required");
  });
  test("throws error if not passed a fill value", () => {
    expect(() => createMatrix(5)).toThrow("fill is required");
  });
  test("throws error if size is not a number", () => {
    expect(() => createMatrix("foo", "foo")).toThrow("input n must be a number");
  });
  test("throws error if size is not a positive integer", () => {
    expect(() => createMatrix(-3, "foo")).toThrow("input n must be a positive integer");
    expect(() => createMatrix(0.4, "foo")).toThrow("input n must be a positive integer");
  });
  test("throws error if fill is not a string", () => {
    expect(() => createMatrix(5, 5)).toThrow("input fill must be a string");
  });
  test("returns an empty array when n=0", () => {
    expect(createMatrix(0, "foo")).toEqual([]);
  });
  test("returns a single nested array when n=1", () => {
    expect(createMatrix(1, "foo")).toEqual([["foo"]]);
  });
  test("returns an array when n>1", () => {
    const result = [
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ];
    expect(createMatrix(3, "foo")).toEqual(result);
  });
  test("returns an array of empty strings when fill is an empty string", () => {
    const result = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ];
    expect(createMatrix(3, "")).toEqual(result);
  });
});