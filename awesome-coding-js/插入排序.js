let list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];


function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let target = i
    for (let j = i - 1; j >= 0; j--) {
      if (array[target] < array[j]) {
        [array[target], array[j]] = [array[j], array[target]]
        target = j
      } else {
        break
      }
    }
  }
  return array
}


console.time()
console.log(insertSort(list))
console.timeEnd()