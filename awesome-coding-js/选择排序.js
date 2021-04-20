let list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    [array[minIndex], array[i]] = [array[i], array[minIndex]]
  }
  return array
}

console.time()
console.log(selectionSort(list))
console.timeEnd()