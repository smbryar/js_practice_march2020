function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("sandwich is required");
  if (sandwich.fillings === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === undefined) throw new Error ("city is required");
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  return Math.ceil(people/40);  
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  return arr.reduce((sheep,element) => element.toLowerCase() === "sheep" ? sheep + 1 : sheep,0);
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
