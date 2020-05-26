const {
  reverseWord
} = require("../challenges/week1");

const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const nIndex = nums.indexOf(n);
  return (nIndex === -1 || nIndex === nums.length-1) ? null : nums[nIndex+1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  return str.split("").reduce((obj,bit) => {
    bit === "0" ? obj[0] = obj[0] + 1 : obj[1] = obj[1] + 1;
    return obj;
  },{1:0,0:0})
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(reverseWord(n.toString()));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};