function capitalize(word) {
  if (typeof word !== "string") throw new Error("word is required");
  if (word === "") return word; //returns empty string if passed one rather than throwing an error
  return word[0].toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (typeof firstName !== "string") throw new Error("firstName must be a string");
  if (typeof lastName !== "string") throw new Error("lastName must be a string");
  if (firstName === "") throw new Error("firstName must be provided");
  if (lastName === "") throw new Error("lastName must be provided");
  return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
}

function addVAT(originalPrice, vatRate) {
  if (typeof originalPrice !== "number") throw new Error("originalPrice is required as a number");
  if (typeof vatRate !== "number") throw new Error("vatRate is required as a number");
  return originalPrice + originalPrice * vatRate / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (typeof originalPrice !== "number") throw new Error("originalPrice is required as a number");
  if (typeof reduction !== "number") throw new Error("reduction is required as a number");
  return originalPrice - originalPrice * reduction / 100;
}

function getMiddleCharacter(str) {
  if (typeof str !== "string") throw new Error("str is required");
  if (str === "") return "";
  let midChar = Math.floor(str.length / 2);
  return (str.length % 2 === 0) ? str.substr(midChar - 1, 2) : str[midChar];
}

function reverseWord(word) {
  if (typeof word !== "string") throw new Error("word is required as a string");
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
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
};
