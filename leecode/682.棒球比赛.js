/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  var newArr = [];
  for (var i = 0; i < ops.length; i++) {
    let num;
    if (ops[i] === 'C') {
      // 删除前一次数值
      newArr.pop();
    } else if (ops[i] === 'D') {
      // 前一次*2
      num = newArr[newArr.length - 1] * 2;
      newArr.push(num);
    } else if (ops[i] === '+') {
      // 前两次相加
      num = newArr[newArr.length - 1] + newArr[newArr.length - 2];
      newArr.push(num);
    } else {
      // 添加到数组
      newArr.push(Number(ops[i]));
    }

  }
  var sum = 0;
  for (var j = 0; j < newArr.length; j++) {
    sum += newArr[j];
  }
  return sum;
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = calPoints;
// @after-stub-for-debug-end