/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 字符串拆分，去重，生成Set，按照字母顺序排序，最后对比

  let sArr = getSetArr(s);
  let wordSetArr = getSetArr(wordDict.join(''));
  console.info(sArr, wordSetArr);

  /* let flag = false;
  for (let item of sArr) {
    let hasS = wordSetArr.includes(item);
    // console.info(hasS);

    if (!hasS) {
      flag = false;
      break;
    }
    flag = true;
  }
  return flag; */
};
var getSetArr = function (str) {
  let sSet = new Set(str.split(''));
  let sArr = Array.from(sSet).sort();
  return sArr;
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = wordBreak;
// @after-stub-for-debug-end