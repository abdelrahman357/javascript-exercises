const sumAll = function (start, end) {
  if (
    typeof start !== "number" ||
    typeof end !== "number" ||
    start < 0 ||
    end < 0
  ) {
    return "ERROR";
  }
  let sum = 0;
  if (start > end) {
    sumToNumber = start;
    sumFromNumbers = end;
  } else {
    sumToNumber = end;
    sumFromNumbers = start;
  }
  for (let i = sumFromNumbers; i <= sumToNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
