var MaxQueue = function () {
  // 存储队列数据
  this.queue = {}
  // 双端队列维护最大值（每个阶段的最大值）
  // 单调递减
  this.deque = {}
  // 准备队列相关的数据
  this.countQ = this.countD = this.headQ = this.headD = 0
}

/**
 * 获取队列最大值
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.isEmptyDeque()) {
    return -1
  }

  // 返回 deque 队首值即可
  return this.deque[this.headD]
}

/**
 * 队尾入队
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  // 数据在 queue 入队
  this.queue[this.countQ++] = value

  // 检测是否可以将数据添加到双端队列
  // - 队列不能为空
  // - value 大于队尾值
  while (!this.isEmptyDeque() && value > this.deque[this.countD - 1]) {
    // 删除当前队尾值
    delete this.deque[--this.countD]
  }

  // 将 value 入队
  this.deque[this.countD++] = value
}

/**
 * 队首出队
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.isEmptyQueue()) {
    return -1
  }

  // 比较 deque 与 queue 的队首值，如果相同，deque 出队，否则 deque 不操作
  if (this.queue[this.headQ] === this.deque[this.headD]) {
    delete this.deque[this.headD++]
  }

  // 给 queue 出队，并返回
  const frontData = this.queue[this.headQ]
  delete this.queue[this.headQ++]
  return frontData
}

/**
 * 检测队列 deque 是否为空
 */
MaxQueue.prototype.isEmptyDeque = function () {
  return this.countD - this.headD === 0
}
/**
 * 检测队列 queue 是否为空
 */
MaxQueue.prototype.isEmptyQueue = function () {
  return this.countQ - this.headQ === 0
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

const obj = new MaxQueue()

obj.push_back(7)
obj.push_back(5)
obj.push_back(3)
obj.push_back(6)

window.obj = obj
