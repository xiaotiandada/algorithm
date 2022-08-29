/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 保存 prev cur
  let prev = null
  let cur = head

  // 当 cur 是节点时进行迭代
  while (cur) {
    // 保存当前节点的下一个节点
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}

const ans = reverseList({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
})

// console.log("ans", ans);

var reverseList1 = function (head) {
  if (head === null || head.next === null) {
    return head
  }

  const newHead = reverseList1(head.next)
  // 能够第一次执行到这里的节点为倒数第二个节点
  head.next.next = head
  // head 的 next 需要在下一次递归时设置。当前设置为 null 不影响
  // - 可以让最好一次（1） 的时候设置为 null
  head.next = null

  return newHead
}

const ans1 = reverseList1({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
})

console.log('ans1', ans1)
