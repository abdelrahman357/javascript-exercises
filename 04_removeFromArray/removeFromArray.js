const removeFromArray = function (values, ...removeValues) {
  for (let i = 0; i < removeValues.length; i++) {
    if (values.includes(removeValues[i])) {
      values.splice(values.indexOf(removeValues[i]), 1);
    }
  }
  return values;
};

// Do not edit below this line
module.exports = removeFromArray;
