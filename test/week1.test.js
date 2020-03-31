const {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
} = require("../challenges/week1");

describe("capitalize", () => {
  test("returns a capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("the quick fox")).toBe("The quick fox");
    expect(capitalize("oh no, bears!!!")).toBe("Oh no, bears!!!");
  });

  test("does nothing if the string is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("does nothing if string starts with a number", () => {
    expect(capitalize("2001 A Space Odyssey")).toBe("2001 A Space Odyssey");
  });

  test("returns error \"word is required\" if the input is not a string", () => {
    expect(capitalize).toThrowError("word is required");
    expect(() => capitalize(283)).toThrowError("word is required");
    expect(() => capitalize(true)).toThrowError("word is required");
    expect(() => capitalize(null)).toThrowError("word is required");
  });

  test("returns empty string if passed empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("generateInitials", () => {
  test("returns the initials of a firstname and surname", () => {
    expect(generateInitials("Frederic", "Bonneville")).toBe("F.B");
  });

  test("returns initials even when one is a numerical digit within a string", () => {
    expect(generateInitials("2001", "Jones")).toBe("2.J");
  });

  test("returns capitalised initials when names are lower case", () => {
    expect(generateInitials("fred", "bonneville")).toBe("F.B");
  });

  test("throws error when either name is not a string", () => {
    expect(() => generateInitials(23, "the best")).toThrowError("firstName must be a string");
    expect(() => generateInitials("hello", false)).toThrowError("lastName must be a string");
  });

  test("throws an error when either name is not provided", () => {
    expect(() => generateInitials("", "Jones")).toThrowError("firstName must be provided");
    expect(() => generateInitials("Steve", "")).toThrowError("lastName must be provided");
  });
});

describe("addVAT", () => {
  test("adds a VAT of 20% to a price of 100", () => {
    expect(addVAT(100, 20)).toBeCloseTo(120);
  });

  test("adds a VAT of 17.5% to a price of 40", () => {
    expect(addVAT(40, 17.5)).toBeCloseTo(47);
  });

  test("adds a VAT of 17.5% to a price of 33.50", () => {
    expect(addVAT(33.5, 17.5)).toBeCloseTo(39.36); //using "toBeCloseTo" because of rounding errors in javascript
  });

  test("adds a VAT of 0% to a price of 25", () => {
    expect(addVAT(25, 0)).toBeCloseTo(25);
  });

  test("throw error if originalPrice not given", () => {
    expect(() => addVAT(undefined, 20)).toThrowError("originalPrice is required");
  });

  test("throw error if vatRate not given", () => {
    expect(() => addVAT(100, undefined)).toThrowError("vatRate is required");
  });
});

describe("getSalePrice", () => {
  test("reduces a price of 100 by 50%", () => {
    expect(getSalePrice(100, 50)).toBeCloseTo(50);
  });

  test("reduces a price of 100 by 33.3%", () => {
    expect(getSalePrice(100, 33.3)).toBeCloseTo(66.7);
  });

  test("reduces a price of 79.99 by 15%", () => {
    expect(getSalePrice(79.99, 15)).toBeCloseTo(67.99);
  });

  test("reduces a price of 50 by 0%", () => {
    expect(getSalePrice(50, 0)).toBeCloseTo(50);
  });

  test("reduces a price of 0 by 40%", () => {
    expect(getSalePrice(0, 40)).toBeCloseTo(0);
  });

  test("throws error if original price not given", () => {
    expect(() => getSalePrice(undefined,50)).toThrowError("originalPrice is required");
  });

  test("throws error if reduction rate is not given", () => {
    expect(() => getSalePrice(44,undefined)).toThrowError("reduction is required");
  });
});

//Add edge case tests here
describe("getMiddleCharacter", () => {
  test("returns the middle character from a string of odd length", () => {
    expect(getMiddleCharacter("bears!!!!")).toBe("s");
  });

  test("returns the middle 2 characters from a string of even length", () => {
    expect(getMiddleCharacter("help!!")).toBe("lp");
  });
});

xdescribe("reverseWord", () => {
  test("returns the provided word, reversed", () => {
    expect(reverseWord("foo")).toBe("oof");
  });

  test("returns a longer sentence, reversed", () => {
    expect(reverseWord("why would you even want to do this?")).toBe(
      "?siht od ot tnaw neve uoy dluow yhw"
    );
  });
});

xdescribe("reverseAllWords", () => {
  test("reverses a single word in an array", () => {
    expect(reverseAllWords(["jest"])).toEqual(["tsej"]);
  });

  test("reverses a multiple words in an array", () => {
    expect(
      reverseAllWords(["jest", "mocha", "rspec", "jasmine", "selenium"])
    ).toEqual(["tsej", "ahcom", "cepsr", "enimsaj", "muineles"]);
  });
});

xdescribe("countLinuxUsers", () => {
  test("returns 0 if no Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Windows 8", type: "Windows" },
      { name: "Paul", OS: "Firefox OS", type: "Unknown" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(0);
  });

  test("returns the correct number of Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Ubuntu 18.04", type: "Linux" },
      { name: "Paul", OS: "Ubuntu 16.04", type: "Linux" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Jane", OS: "Mint 19.1", type: "Linux" },
      { name: "Jen", OS: "CentOS 7", type: "Linux" },
      { name: "David", OS: "Fedora 28", type: "Linux" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(5);
  });
});

xdescribe("getMeanScore", () => {
  test("returns the mean score from an array of scores", () => {
    expect(getMeanScore([8, 9, 7])).toBe(8);
    expect(getMeanScore([88, 86, 93])).toBe(89);
  });

  test("returns the mean to 2 decimal places", () => {
    expect(getMeanScore([24, 44, 56, 11, 12, 17, 34])).toBe(28.29);
  });
});

xdescribe("simpleFizzBuzz", () => {
  test("returns 'fizz' if the number is divisible by 3", () => {
    expect(simpleFizzBuzz(3)).toBe("fizz");
  });

  test("returns 'buzz' if the number is divisible by 5", () => {
    expect(simpleFizzBuzz(5)).toBe("buzz");
  });

  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(simpleFizzBuzz(4)).toBe(4);
  });

  test("returns 'fizzbuzz' if the number is divisible by 3 and 5", () => {
    expect(simpleFizzBuzz(15)).toBe("fizzbuzz");
  });
});
