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
  return arrs.reduce((tot,arr) => tot = tot + arr.reduce((tot,num) => tot + num,0),0);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) return arr;
  let temp = arr[arr.length-1];
  arr[arr.length-1] = arr[0];
  arr[0] = temp;
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  return Object.values(haystack).some(str => typeof str === "string" ? str.toLowerCase().includes(searchTerm.toLowerCase()) : null);
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const arr = str.replace(regex,"").split(" ");
  return arr.reduce((obj,word) => {
    word = word.toLowerCase();
    if (obj[word]) {obj[word] = obj[word] + 1}
    else {obj[word] = 1}
    return obj;
  },{})
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
