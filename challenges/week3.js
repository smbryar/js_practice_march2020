const {
  capitalize
} = require("../challenges/week1");

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
    return words.splice(0,1)[0] + words.map(capitalize).join("");
}

function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(n => n *n);
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  for (let i = 0; i<people.length; i++) {
    count = count + people[i].subjects.length;
  }
  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i<menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {return true;}
  }
  return false;
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
