const reverseString = function (word) {
  let splittedWord = word.split("");
  splittedWord.reverse();
  word = splittedWord.join("");
  return word;
};

// Do not edit below this line
module.exports = reverseString;
