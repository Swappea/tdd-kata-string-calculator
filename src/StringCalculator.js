const addString = (inputString) => {
  if (!inputString) {
    return 0;
  }

  if (String(inputString).length === 1) {
    return +inputString;
  }

  let defaultDelimiter = ',';
  const newLineDelimter = '\n';
  const newDelimitterPattern = '//';

  const negativeNumbers = [];

  const delimitedArray = inputString.split(newLineDelimter);
  let sum = 0;
  for (const line of delimitedArray) {
    if (line.startsWith(newDelimitterPattern)) {
      defaultDelimiter = line.substring(newDelimitterPattern.length);
      continue;
    }

    if (line.endsWith(defaultDelimiter)) {
      throw new Error('SyntaxError');
    }

    const delimitedValues = line.split(defaultDelimiter);

    for (const value of delimitedValues) {
      const num = Number(value);
      if (num < 0) {
        negativeNumbers.push(num);
        continue;
      }
      sum += num > 1000 ? 0 : num;
    }
  }
  if (negativeNumbers.length > 0) {
    return `negatives not allowed : ${negativeNumbers.join(',')}`;
  }

  return sum;
};

module.exports = {
  addString,
};
