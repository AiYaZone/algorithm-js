/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let myMap = new Map();
  for (let item of arr) {
    myMap.set(item, (myMap.get(item) || 0) + 1);
  }
  let myArr = [];
  for (let [key, value] of myMap.entries()) {
    if (key == value) {
      myArr.push(key);
    }
  }
  if (myArr.length == 0) {
    return -1;
  } else {
    return Math.max(...myArr);
  }
};
// @lc code=end

