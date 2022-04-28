/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * 中序：左、中、右
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  const res = [];
  preorder(root, res);
  return res;
};

var preorder = function (node, res) {
  if (!node) return;
  preorder(node.left, res);
  res.push(node.val);
  preorder(node.right, res);
};
// @lc code=end

