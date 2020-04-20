const {
  capitalize
} = require("../challenges/week1");

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
    return words.splice(0,1) + words.map(capitalize).join("");
}

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(n => n * n);
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  return people.reduce((total,person) => total + person.subjects.length,0)
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.some(item => item.ingredients.includes(ingredient));
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let hasDuplicates = arr1.filter(i => arr2.includes(i)).sort((a,b) => a - b);
  return [...new Set(hasDuplicates)];
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
