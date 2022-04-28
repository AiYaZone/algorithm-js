/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 前序：中、左、右
 * 中序：左、中、右
 * 后序：左、右、中
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  preorder(root, res);
  return res;
};

var preorder = function (node, res) {
  if (!node) return;
  res.push(node.val);
  preorder(node.left, res);
  preorder(node.right, res);
};
// @lc code=end

