const {
  roundDecPlace,
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

describe("roundDecPlace", () => {
  test("returns a number to a given number of decimal places", () => {
    expect(roundDecPlace(1.2894, 2)).toBe(1.29);
  });

  test("returns number to original precision if less than decimal places", () => {
    expect(roundDecPlace(134, 3)).toBe(134);
  });
});

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
    expect(addVAT(100, 20)).toBe(120);
  });

  test("adds a VAT of 17.5% to a price of 40", () => {
    expect(addVAT(40, 17.5)).toBe(47);
  });

  test("adds a VAT of 17.5% to a price of 33.50", () => {
    expect(addVAT(33.5, 17.5)).toBe(39.36);
  });

  test("adds a VAT of 0% to a price of 25", () => {
    expect(addVAT(25, 0)).toBe(25);
  });

  test("throw error if originalPrice not given as a number", () => {
    expect(() => addVAT(undefined, 20)).toThrowError("originalPrice is required as a number");
    expect(() => addVAT("100", 20)).toThrowError("originalPrice is required as a number");
  });

  test("throw error if vatRate not given", () => {
    expect(() => addVAT(100, undefined)).toThrowError("vatRate is required as a number");
    expect(() => addVAT(100, "20")).toThrowError("vatRate is required as a number");
  });
});

describe("getSalePrice", () => {
  test("reduces a price of 100 by 50%", () => {
    expect(getSalePrice(100, 50)).toBe(50);
  });

  test("reduces a price of 100 by 33.3%", () => {
    expect(getSalePrice(100, 33.3)).toBe(66.7);
  });

  test("reduces a price of 79.99 by 15%", () => {
    expect(getSalePrice(79.99, 15)).toBe(67.99);
  });

  test("reduces a price of 50 by 0%", () => {
    expect(getSalePrice(50, 0)).toBe(50);
  });

  test("reduces a price of 0 by 40%", () => {
    expect(getSalePrice(0, 40)).toBe(0);
  });

  test("throws error if original price not given as a number", () => {
    expect(() => getSalePrice(undefined, 50)).toThrowError("originalPrice is required as a number");
    expect(() => getSalePrice("100", 50)).toThrowError("originalPrice is required as a number");
  });

  test("throws error if reduction rate is not given as a number", () => {
    expect(() => getSalePrice(44, undefined)).toThrowError("reduction is required as a number");
    expect(() => getSalePrice(44, "40")).toThrowError("reduction is required as a number");
  });
});

describe("getMiddleCharacter", () => {
  test("returns the middle character from a string of odd length", () => {
    expect(getMiddleCharacter("bears!!!!")).toBe("s");
  });

  test("returns the middle 2 characters from a string of even length", () => {
    expect(getMiddleCharacter("help!!")).toBe("lp");
  });

  test("returns empty string when passed empty string", () => {
    expect(getMiddleCharacter("")).toBe("");
  });

  test("returns entire string when passed string of length one or two", () => {
    expect(getMiddleCharacter("a")).toBe("a");
    expect(getMiddleCharacter("ab")).toBe("ab");
  });

  test("returns error when not passed a string", () => {
    expect(() => getMiddleCharacter(356)).toThrowError("str is required");
    expect(() => getMiddleCharacter(true)).toThrowError("str is required");
    expect(() => getMiddleCharacter(undefined)).toThrowError("str is required");
    expect(() => getMiddleCharacter(null)).toThrowError("str is required");
  });
});

describe("reverseWord", () => {
  test("returns the provided word, reversed", () => {
    expect(reverseWord("foo")).toBe("oof");
  });

  test("returns a longer sentence, reversed", () => {
    expect(reverseWord("why would you even want to do this?")).toBe("?siht od ot tnaw neve uoy dluow yhw");
  });

  test("returns an empty string when passed an empty string", () => {
    expect(reverseWord("")).toBe("");
  });

  test("throws an error when not passed a string", () => {
    expect(() => reverseWord(123)).toThrowError("word is required as a string");
    expect(() => reverseWord(true)).toThrowError("word is required as a string");
    expect(() => reverseWord(undefined)).toThrowError("word is required as a string");
    expect(() => reverseWord(null)).toThrowError("word is required as a string");
  });
});

describe("reverseAllWords", () => {
  test("reverses a single word in an array", () => {
    expect(reverseAllWords(["jest"])).toEqual(["tsej"]);
  });

  test("reverses a multiple words in an array", () => {
    expect(
      reverseAllWords(["jest", "mocha", "rspec", "jasmine", "selenium"])
    ).toEqual(["tsej", "ahcom", "cepsr", "enimsaj", "muineles"]);
  });

  test("returns an empty array if passed an empty array", () => {
    expect(reverseAllWords([])).toEqual([]);
  })

  test("throws an error if not passed an array", () => {
    expect(() => reverseAllWords("string")).toThrowError("words is required as an array");
    expect(() => reverseAllWords({ name: "Bob", age: 25 })).toThrowError("words is required as an array");
  });

  test("throws an error if a member of the array is not a string", () => {
    expect(() => reverseAllWords([true, "string"])).toThrowError("word is required as a string");
  });
});

describe("countLinuxUsers", () => {
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

  test("throws an error if not passed an array", () => {
    expect(() => countLinuxUsers({ name: "Bob", age: 25 })).toThrowError("users is required as an array");
    expect(() => countLinuxUsers("linux")).toThrowError("users is required as an array");
  });
});

describe("getMeanScore", () => {
  test("returns the mean score from an array of scores", () => {
    expect(getMeanScore([8, 9, 7])).toBe(8);
    expect(getMeanScore([88, 86, 93])).toBe(89);
  });

  test("returns the mean to 2 decimal places", () => {
    expect(getMeanScore([24, 44, 56, 11, 12, 17, 34])).toBe(28.29);
  });

  test("throws an error if not passed an array", () => {
    expect(() => getMeanScore({ name: "Bob", age: 25 })).toThrowError("scores is required as an array");
    expect(() => getMeanScore("linux")).toThrowError("scores is required as an array");
  });

 test("throws an error if a member of the array is not a number", () => {
    expect(() => getMeanScore([1,2,"toby"])).toThrowError("all members of the array must be numbers");
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
