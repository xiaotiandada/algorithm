let list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

function heapSort(array) {
  createHeap(array)
  console.log('array', array)
  // 交换第一个和最后一个元素，然后重新调整大顶堆
  for (let i = array.length - 1; i > 0; i--) {
    [array[i], array[0]] = [array[0], array[i]]
    adJust(array, 0, i)
  }
  return array
}

// 构建大顶堆，从第一个非叶子节点开始，进行下沉操作
function createHeap(array) {
  const len = array.length
  const start = parseInt(len / 2) - 1
  for (let i = start; i >= 0; i--) {
    adJust(array, i, len)
  }
}
// 将第target个元素进行下沉，孩子节点有比他大的就下沉
function adJust(array, target, len) {
  for (let i = 2 * target + 1; i < len; i= 2 * i + 1) {
    // 找到孩子节点中最大的
    if (i + 1 < len && array[i + 1] > array[i]) {
      i = i + 1
    }
    // 下沉
    if (array[i] > array[target]) {
      [array[i] ,array[target]] = [array[target], array[i]]
      target = i
    } else {
      break
    }
  }
}

console.time()
console.log(heapSort(list))
console.timeEnd()