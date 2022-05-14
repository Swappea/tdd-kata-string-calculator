const addString = (inputString) => {
  if (!inputString) {
    return 0;
  }

  if (String(inputString).length === 1) {
    return +inputString;
  }

  const inputArr = inputString.split(',');
  let sum = 0;
  for (let i = 0; i < inputArr.length; i++) {
      sum += Number(inputArr[i]);
  }

  return sum;
};

module.exports = {
  addString,
};
