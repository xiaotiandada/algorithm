class Deque {
  constructor() {
    this.queue = {}
    this.count = 0
    this.head = 0
  }

  // 队首添加
  addFront(item) {
    this.queue[--this.head] = item
  }

  // 队尾添加
  addBack(item) {
    this.queue[this.count++] = item
  }

  // 队首删除
  removeFront() {
    const headData = this.queue[this.head]
    delete this.queue[this.head++]
    return headData
  }

  // 队尾删除
  removeBack() {
    const backData = this.queue[this.count - 1]
    delete this.queue[--this.count]
    // this.count - 1 与 上一步 this.count - 1 合并
    return backData
  }

  // 获取队首值
  frontTop() {
    if (this.isEmpty()) {
      return
    }
    return this.queue[this.head]
  }

  // 获取队尾值
  backTop() {
    if (this.isEmpty()) {
      return
    }
    return this.queue[this.count - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.count - this.head
  }
}

const deque = new Deque()

deque.addFront('a')
deque.addFront('b')
deque.addFront('c')

deque.addBack('x')
deque.addBack('y')
deque.addBack('z')

window.deque = deque
