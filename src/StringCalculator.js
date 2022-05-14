const addString = (inputString) => {
  if (!inputString) {
    return 0;
  }

  if (String(inputString).length === 1) {
    return +inputString;
  }

  const delimiter = ',';
  const newLineDelimter = '\n';

  const delimitedArray = inputString.split(newLineDelimter);
  let sum = 0;
  for (const line of delimitedArray) {
    if (line.endsWith(delimiter)) {
      throw new Error('SyntaxError');
    }

    const delimitedValues = line.split(delimiter);

    for (const value of delimitedValues) {
      sum += Number(value);
    }
  }

  return sum;
};

module.exports = {
  addString,
};
