const addString = (inputString) => {
  if (!inputString) {
    return 0;
  }

  if (String(inputString).length === 1) {
    return +inputString;
  }
};

module.exports = {
  addString,
};
