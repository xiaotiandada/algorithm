let list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];


function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let complate = true
    for (let j = 0; j < array.length - 1 - i; j++) {
      console.log(1, array.length - 1 - i)
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        complate = false
      }
    }
    if (complate) {
      break
    }
  }
  return array
}

console.time()
console.log(bubbleSort(list))
console.timeEnd()