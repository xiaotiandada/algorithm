function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const Node3 = new TreeNode('3')
const Node9 = new TreeNode('9')
const Node20 = new TreeNode('20')
const Node15 = new TreeNode('15')
const Node7 = new TreeNode('7')

Node3.left = Node9
Node3.right = Node20

Node20.left = Node15
Node20.right = Node7

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const ret = []
  if (!root) {
    return ret
  }

  // 存储队列数据
  const q = []
  q.push(root)

  // 遍历队列
  while (q.length !== 0) {
    const currentLevelSize = q.length
    // 针对本轮操作，创建一个新的二维数组
    ret.push([])
    for (let i = 0; i < currentLevelSize; i++) {
      // 将本次操作的结点出队
      const node = q.shift()
      ret[ret.length - 1].push(node.val)
      // 检测是否存在左右子结点，如果有入队即可
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }
  }

  return ret
}

console.log('levelOrder', levelOrder(Node3))
