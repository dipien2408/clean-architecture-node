function isValidDate(d) {
  const date = new Date(d);
  return date instanceof Date && !isNaN(date);
}

module.exports = {
  isValidDate,
};
