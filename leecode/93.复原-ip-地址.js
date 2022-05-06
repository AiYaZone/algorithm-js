/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start

/**
 * @file 还原IP地址--算法：回溯？？
 * @param {string} s 
 * @return {string[]}
 * @description 涉及知识盲区：递归、枚举
 */

var restoreIpAddresses = function (s) {
  /* 我的思路--存档 2022.04.04 22:42
  // 要求数字都是整数，每个整数位于0-255之间组成，且不能含有前导0，整数之间用'.'分隔
  // Step1 先算一下字符串的长度，1<= s.length <=20,

  // s仅仅由数字组成（正则表达式识别非数字？）

  // 拆分字符串s

  // 拆分数字第一个是0，则只有0这一个组合

  // 暴力解法，拆分出所有数字组合，然后一一判断是否属于上述条件

  // 如何拆呢，双指针法？必须先计算字符串长度
  var sLen = s.toString().length;

  // 思绪：计算拆分的所有组合，比如123412112，长度为9，各拆分的值，只有1+2+3+3这几个长度组合（必须分成4份）
  // 1.那么要先计算下，平均数向上取整？ 如 Math.ceil(x)：返回大于x的最小整数
  var itemMax = Math.ceil(sLen / 4);
  console.info(itemMax);
  // 2.将拆分的数字进行【自由组合】，有多少种呢？如何用程序来实现【排列组合】
  // 怎么将其拆分呢？
  var arr = [];
  */

  // IP地址段数
  const SEG_COUNT = 4;
  const segments = new Array(SEG_COUNT);
  // 最终返回的数组
  const ans = [];

  /**
   * 递归方法
   * @param {string} s 字符串
   * @param {number} segId 第几段
   * @param {number} segStart 字符串下标计数
   */
  const dfs = (s, segId, segStart) => {
    // 如果找到了4段IP地址 并且 遍历完了字符串，那么就是一种答案
    if (segId === SEG_COUNT) {
      if (segStart === s.length) {
        ans.push(segments.join('.'));
      }
      return;
    }

    // 如果还没有找到 4段IP地址 就已经遍历完了字符串，那么提前 回溯
    if (segStart === s.length) {
      return;
    }

    // 由于不能有前导0，如果当前数字为0，那么这一段IP地址只能为0
    if (s.charAt(segStart) === '0') {
      segments[segId] = 0;
      dfs(s, segId + 1, segStart + 1);
    }

    // 一般情况，枚举每一种可能性并递归
    let addr = 0;
    for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
      // 硬是没看懂 为什么*10？？（addr * 10）
      // - '0'表示 字符转数字
      addr = addr * 10 + (s.charAt(segEnd) - '0');
      if (addr > 0 && addr <= 0xFF) {
        segments[segId] = addr;
        dfs(s, segId + 1, segEnd + 1);
      } else {
        break;
      }
    }

  };

  dfs(s, 0, 0);
  return ans;

};
// @lc code=end