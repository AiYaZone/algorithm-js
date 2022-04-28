/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let left, right, nowMax, len = s.length, maxLength = 0, maxStart;
  for (let i = 0; i < len; i++) {
    left = i - 1;
    right = i + 1;
    nowMax = 1; // 当前区间最大长度重置为 1
    // 从中心 i 出发，往左找到第一个不同的，即开始找可能会不满足题意的回文子串，并准备判断
    while (left >= 0 && s[left] === s[i]) {
      left--;
      nowMax++;
    }
    // 从中心 i 出发，往右找到第一个不同的，即开始找可能会不满足题意的回文子串，并准备判断
    while (right < len && s[right] === s[i]) {
      right++;
      nowMax++;
    }
    // 开始左右指针各往外遍历，寻找到第一个不符合回文串的位置
    while (left >= 0 && right < len && s[left] === s[right]) {
      left--;
      right++;
      nowMax += 2;
    }
    // 遍历结束，看看此时子串是否最大
    if (nowMax > maxLength) {
      maxLength = nowMax;
      maxStart = left;
    }
  }

  return s.substring(maxStart + 1, maxStart + 1 + maxLength);
};
// @lc code=end

