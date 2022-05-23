/*
 * @lc app=leetcode.cn id=781 lang=javascript
 *
 * [781] 森林中的兔子
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let count = new Map();
  // 使用map存放每一个数字及其出现的次数
  for (let y of answers) {
    count.set(y, (count.get(y) || 0) + 1);
  }
  let ans = 0;
  // [3,3,3,3,3] (3,5) ceil(value/(key+1))向上取整 ceil(5/4)=2  2*(3+1)=8
  for (let [key, value] of count.entries()) {
    // ans += Math.floor((key + value) / (key + 1)) * (key + 1);
    ans += Math.ceil(value / (key + 1)) * (key + 1);
  }
  return ans;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = numRabbits;
// @after-stub-for-debug-end