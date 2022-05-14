const addString = (inputString) => {
  if (!inputString) {
    return 0;
  }

  if (String(inputString).length === 1) {
    return +inputString;
  }

  const delimitedArray = inputString.split('\n');
  let sum = 0;
  for (const line of delimitedArray) {
    const delimitedValues = line.split(',');

    for (const value of delimitedValues) {
      sum += Number(value);
    }
  }

  return sum;
};

module.exports = {
  addString,
};
