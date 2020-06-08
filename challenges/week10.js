// To improve: generalise hexToRGB for modern shortenings

/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("n must have type number");
  if (n < 0 || n % 1 !== 0) throw new Error("n must be a positive integer");
  return n.toString().split("").reduce((tot, num) => tot + +num, 0)
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. 
 * Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: 
 * [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (step !== undefined && (start - end) % step !== 0) throw new Error("cannot reach end value from start value");
  let range = [];
  for (let i = start; i <= end; step ? i = i + step : i++) {
    range.push(i)
  }
  return range;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. 
 * The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */

const validateDate = (dateString) => {
  try {
    let regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regEx)) return false;
    let date = new Date(dateString);
    return date.toISOString().slice(0, 10) === dateString;
  }
  catch (err) { return false }
}

const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (!Array.isArray(users)) throw new Error("input users must be an array");
  if (users.some(obj => !Object.keys(obj).includes("username") || !Object.keys(obj).includes("name") || !Object.keys(obj).includes("screenTime") || !Object.keys(obj).length === 3)) throw new Error("each user object must be of the form {username: , name: , screenTime: }");
  if (users.some(obj => obj.screenTime.some(usageObj => !Object.keys(usageObj).includes("date") || !Object.keys(usageObj).includes("usage") || !Object.keys(usageObj).length === 2))) throw new Error("each user object value of screentime must be of form {date: , usage: }");

  if (date === undefined) throw new Error("date is required");
  if (typeof date !== "string") throw new Error("input date must be a string");
  if (!validateDate(date)) throw new Error("input date must a valid date in format yyyy-mm-dd");

  return users.reduce((usernameArr,user) => {
    let usageCheck = user.screenTime.some(day => day.date === date && Object.values(day.usage).reduce((a,b) => a + b) > 100);
    if (usageCheck) usernameArr.push(user.username);
    return usernameArr;
  },[])
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. 
 * If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, 
 * and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (typeof hexStr !== "string") throw new Error("hexStr must be a string");
  if (!hexStr.match(/^#[\da-fA-F]{6}$/)) throw new Error("hexStr must be a valid hex colour code");
  let hexArr = hexStr.match(/[\d\w]{2}/g);
  let rgbArr = hexArr.map(colour => parseInt(colour, 16).toString());
  return `rgb(${rgbArr.join(",")})`
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (!Array.isArray(board)) throw new Error("board must be an array");
  if (board.length !== 3 || board.some(row => row.length !== 3)) throw new Error("board must be a 3 by 3 array");
  const validElements = ["0", "X", null]
  if (board.some(row => row.some(element => !validElements.includes(element)))) throw new Error("board must only contain the values \"0\", \"X\" and null");
  
  // Map board to numbers to aid processing
  const numBoard = board.map(row => row.map(element => {
    if (element === "0") element = 0;
    else if (element === "X") element = 1;
    else if (element === null) element = "blank";
    return element;
  }))  

  // Check rows
  let rows = numBoard.map(row => row.reduce((a,b) => a+b,0));  
  if (rows.some(rowTotal => rowTotal === 0)) return "0";
  else if (rows.some(rowTotal => rowTotal === 3)) return "X";

  // Check diagonals
  let diagonals = [0,0];
  diagonals[0] = numBoard[0][0] + numBoard[1][1] + numBoard[2][2];
  diagonals[1] = numBoard[0][2] + numBoard[1][1] + numBoard[2][0];
  if (diagonals.some(diagonalTotal => diagonalTotal === 0)) return "0";
  else if (diagonals.some(diagonalTotal => diagonalTotal === 3)) return "X";

  // Check columns
  let columns = [0,0,0];
  
  for (let i=0; i<numBoard.length; i++) { 
    for (let j=0; j<numBoard[i].length; j++) {
      columns[j] = columns[j]+numBoard[i][j];
    }     
  }
  if (columns.some(columnTotal => columnTotal === 0)) return "0";
  else if (columns.some(columnTotal => columnTotal === 3)) return "X";
  
  else return null;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
