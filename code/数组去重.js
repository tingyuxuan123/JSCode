/**
 *
 * @param {Function} arr 要去重的数组
 * @returns
 */

function uniqueArr(arr) {
  return [...new Set(arr)]
}

// console.log(
//   uniqueArr([1, 2, 3, 4, 5, 6, 8, 5, 3, 69, 8, 4, 1, 2, 3, 4, 5, 6, 78, 9])
// )
