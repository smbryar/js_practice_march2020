function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (words.length === 1) {return words[0]}
  else {
    const firstWord = words.splice(0,1)[0];
    const laterWords = words.map(w => w[0].toUpperCase() + w.substring(1)).join("");
    return firstWord + laterWords;
  }
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
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
