class Stack {
  constructor() {
    // 存储栈的数据
    this.data = [] // {}
    // 记录栈的数据个数（相当于数组的 length）
    this.count = 0
  }

  // push() 出栈方法
  push(item) {
    // 1. 数组方法 push 添加
    // this.data.push(item);
    // 2. 利用数组长度
    // this.data[this.data.length] = item;
    // 3. 计数方式
    this.data[this.count] = item
    // 入栈后 count 自增
    this.count++
  }

  // pop() 出栈方法
  pop() {
    // 出栈的前提是栈中存在元素，应先行检测
    if (this.isEmpty()) {
      console.log('栈为空')
      return
    }
    // 移除栈顶数据
    // 1. 数组方法 pop 移除
    // this.data.pop();
    // 2. 计数方式
    const temp = this.data[this.count - 1]
    delete this.data[--this.count]
    return temp
  }

  // isEmpty() 检测栈是否为空
  isEmpty() {
    return this.count === 0
  }

  // top() 用于获取栈顶值
  top() {
    if (this.isEmpty()) {
      console.log('栈为空')
      return
    }
    return this.data[this.count - 1]
  }

  // size() 获取元素个数
  size() {
    return this.count
  }

  // clear() 清空栈
  clear() {
    this.data = []
    this.count = 0
  }
}

// const s = new Stack();
// s.push("x");
// s.push("y");
// s.push("z");

// // console.log(s.pop());

// console.log(s.top());
// console.log(s.size());

// // s.clear();

// console.log(s);

// 在存储数据的栈外，再新建一个栈，用于存储最小值
class MinStack {
  constructor() {
    // stackA 用于存储数据
    this.stackA = []
    this.countA = 0

    // stackB 用于将数据降序存储（栈顶值为最小值）
    this.stackB = []
    this.countB = 0
  }

  // 入栈
  push(item) {
    // stackA 正常入栈
    this.stackA[this.countA++] = item

    // stackB 如果没有数据 直接入栈
    // 如果 item 的值 <= stackB 的最小值，入栈
    if (this.countB === 0 || item <= this.min()) {
      this.stackB[this.countB++] = item
    }
  }
  // 出栈
  pop() {
    // 先进行 stackB 的检测
    if (this.top() === this.min()) {
      // 如果 stackA 的栈顶值 === stackB 的栈顶值，stackB 出栈
      delete this.stackB[--this.countB]
    }

    // stackA 出栈
    delete this.stackA[--this.countA]
  }
  // 获取栈顶值
  top() {
    return this.stackA[this.countA - 1]
  }
  // 最小值函数
  min() {
    return this.stackB[this.countB - 1]
  }
}

const minStack = new MinStack()
window.minStack = minStack

minStack.push(2)
minStack.push(1)
minStack.push(4)
minStack.push(5)
minStack.push(6)

class MinStack1 {
  constructor() {
    this.stack = []
  }

  push(item) {
    this.stack.push(item)
  }

  pop() {
    return this.stack.pop()
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  min() {
    return Math.min.apply(null, this.stack)
  }
}

const minStack1 = new MinStack1()
window.minStack1 = minStack1

// 在存储数据的栈外，再新建一个栈，用于存储最小值
class MinStack2 {
  constructor() {
    // stackA 用于存储数据
    this.stackA = []

    // stackB 用于将数据降序存储（栈顶值为最小值）
    this.stackB = []
  }

  // 入栈
  push(item) {
    // stackA 正常入栈
    this.stackA.push(item)

    // stackB 如果没有数据 直接入栈
    // 如果 item 的值 <= stackB 的最小值，入栈
    if (this.stackB.length === 0 || item <= this.min()) {
      this.stackB.push(item)
    }
  }
  // 出栈
  pop() {
    // 先进行 stackB 的检测
    if (this.top() === this.min()) {
      // 如果 stackA 的栈顶值 === stackB 的栈顶值，stackB 出栈
      this.stackB.splice(this.stackB.length - 1, 1)
    }

    // stackA 出栈
    this.stackA.splice(this.stackA.length - 1, 1)
  }
  // 获取栈顶值
  top() {
    return this.stackA[this.stackA.length - 1]
  }
  // 最小值函数
  min() {
    return this.stackB[this.stackB.length - 1]
  }
}

const minStack2 = new MinStack2()
window.minStack2 = minStack2

/**
 * @param {number[]} temperatures [73,74,75,71,69,72,76,73]
 * @return {number[]} [1,1,4,2,1,1,0,0]
 */
var dailyTemperatures = function (temperatures) {
  // 单调栈 递减
  // 默认第一个索引会入栈，for 直接从 1 开始
  const stack = [0]

  const len = temperatures.length
  const ans = new Array(temperatures.length).fill(0)

  for (let i = 1; i < len; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const previousIndex = stack[stack.length - 1]
      ans[previousIndex] = i - previousIndex
      stack.pop()
    }
    stack.push(i)
  }

  return ans
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
