// module.js
function avg(scoreArray) {
  if (!Array.isArray(scoreArray) || scoreArray.length === 0) return 0;
  const sum = scoreArray.reduce((acc, val) => acc + val, 0);
  return sum / scoreArray.length;
}

module.exports = { avg };