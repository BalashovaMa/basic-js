const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let newArr = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr = []) return arr;

  return arr.map((item, i) => item === "--double-next" && i < arr.length - 1 ? arr[i + 1] : item)
    .map((item, i) => item === "--double-prev" && i > 0 ? arr[i - 1] : item)
    .filter((item, i) => arr[i + 1] !== "--discard-prev")
    .filter((item, i) => arr[i - 1] !== "--discard-next")
    .filter(item => item !== '--double-next' && item !== '--double-prev'
      && item !== '--discard-prev' && item !== '--discard-next');
}
module.exports = {
  transform
};
