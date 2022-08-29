/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) {
    return null
  }

  // 声明快慢指针
  let slow = head
  let fast = head

  while (fast !== null) {
    // 慢指针每次移动一位
    slow = slow.next

    // 如果不满足条件，说明 fast 为尾部节点，不存在环
    if (fast.next !== null) {
      // 快指针每次移动两位
      fast = fast.next.next
    } else {
      return null
    }

    // 检测是否有环
    if (fast === slow) {
      // 找到环的起点
      let ptr = head
      while (ptr !== slow) {
        ptr = ptr.next
        slow = slow.next
      }

      // ptr 和 slow 的交点就是环的起始节点
      return ptr
    }
  }

  // while 结束，说明 fast 为 null，说明链表没有环
  return null
}

const vala = {
  val: 'a',
  next: null,
}
const valb = {
  val: 'b',
  next: null,
}
const valc = {
  val: 'c',
  next: null,
}

vala.next = valb
valb.next = valc
valc.next = valb

console.log('detectCycle1', vala)
console.log('detectCycle', detectCycle(vala))
