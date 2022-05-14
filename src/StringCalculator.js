const addString = (inputString) => {
  if (!inputString) {
    return 0;
  }

  if (String(inputString).length === 1) {
    return +inputString;
  }

  let defaultDelimiter = ',';
  const newLineDelimter = '\n';

  const delimitedArray = inputString.split(newLineDelimter);
  let sum = 0;
  for (const line of delimitedArray) {
    if (line.startsWith('//')) {
      defaultDelimiter = line.substring(2);
      continue;
    }

    if (line.endsWith(defaultDelimiter)) {
      throw new Error('SyntaxError');
    }

    const delimitedValues = line.split(defaultDelimiter);

    for (const value of delimitedValues) {
      sum += Number(value);
    }
  }

  return sum;
};

module.exports = {
  addString,
};
