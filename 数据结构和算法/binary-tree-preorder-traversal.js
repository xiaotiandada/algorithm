function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

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
 */
var preorderTraversal = function (root) {
  // 用于储存遍历的结果
  const res = []
  // 设置函数用于进行递归遍历
  const preorder = (root) => {
    // 当前节点为空时，无需进行递归
    if (!root) {
      return
    }

    // 记录根节点值
    res.push(root.val)
    // 前序遍历左子树
    preorder(root.left)
    // 前序遍历右子树
    preorder(root.right)
  }

  preorder(root)
  return res
}

const A = new TreeNode('A')
const B = new TreeNode('B')
const C = new TreeNode('C')
const D = new TreeNode('D')
const E = new TreeNode('E')
const F = new TreeNode('F')

A.left = B
A.right = C

B.right = D

C.left = E
C.right = F

const one = new TreeNode(1)
const two = new TreeNode(2)
const three = new TreeNode(3)

one.right = two

two.left = three

// console.log(preorderTraversal(one));

var preorderTraversal1 = function (root) {
  const res = []
  const stk = []

  while (root || stk.length) {
    while (root) {
      // 右子节点入栈
      stk.push(root.right)
      // 记录根节点
      res.push(root.val)

      // 下一步处理左子节点
      root = root.left
    }
    // 左子树处理完毕，将 stk 出栈，处理右子树
    root = stk.pop()
  }
  return res
}

console.log(preorderTraversal1(one))
