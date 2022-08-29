class Queue {
  constructor() {
    // 用于储存队列数据
    this.queue = []
    this.count = 0
  }

  // 入队方法
  enQueue(item) {
    this.queue[this.count++] = item
  }

  // 出队方法
  deQueue() {
    if (this.isEmpty()) {
      return
    }
    this.count--
    return this.queue.shift()
  }

  // 空判断
  isEmpty() {
    return this.count === 0
  }

  // size 大小
  size() {
    return this.count
  }

  // 获取队首元素
  top() {
    if (this.isEmpty()) {
      return
    }
    return this.queue[0]
  }

  // 清空
  clear() {
    this.queue = []
    this.count = 0
  }
}

window.queue = new Queue()

class QueueObj {
  constructor() {
    // 用于储存队列数据
    this.queue = {}
    this.count = 0
    // 用于记录队首的键
    this.head = 0
  }

  // 入队方法
  enQueue(item) {
    this.queue[this.count++] = item
  }

  // 出队方法
  deQueue() {
    if (this.isEmpty()) {
      return
    }

    const headData = this.queue[this.head]
    delete this.queue[this.head]

    this.head++
    this.count--
    return headData
  }

  // 空判断
  isEmpty() {
    return this.count === 0
  }

  // size 大小
  size() {
    return this.count
  }

  // 获取队首元素
  top() {
    if (this.isEmpty()) {
      return
    }
    return this.queue[this.head]
  }

  // 清空
  clear() {
    this.queue = {}
    this.count = 0
    this.head = 0
  }
}

window.queueObj = new QueueObj()
