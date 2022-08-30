function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const Node1 = new TreeNode('1')
const Node3 = new TreeNode('3')
const Node4 = new TreeNode('4')
const Node5 = new TreeNode('5')
const Node6 = new TreeNode('6')

Node5.left = Node1
Node5.right = Node4

Node4.left = Node3
Node4.right = Node6

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const helper = (root, lower, upper) => {
  if (root === null) {
    return true
  }
  // console.log(root.val, lower, upper)
  // 5 -Infinity Infinity
  // 1 -Infinity 5
  // 4 5 Infinity

  // 检测当前节点值是否超出边界
  if (root.val <= lower || root.val >= upper) {
    return false
  }

  // 当前节点通过检测，再检测左右子节点
  return (
    helper(root.left, lower, root.val) && helper(root.right, root.val, upper)
  )
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return helper(root, -Infinity, +Infinity)
}

console.log('isValidBST', isValidBST(Node5))

let isValidBSTInorderTraversal = function (root) {
  let stack = []
  let inorder = -Infinity

  while (stack.length || root !== null) {
    while (root !== null) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()

    // 如果中序遍历得到的节点值小于等于前一个 inorder，说明不是二叉搜索树
    if (root.val <= inorder) {
      return false
    }
    inorder = root.val
    root = root.right
  }
  return true
}

console.log('isValidBSTInorderTraversal', isValidBSTInorderTraversal(Node5))
