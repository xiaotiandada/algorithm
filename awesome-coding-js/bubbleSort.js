let lists = []
for(let i = 0; i <1000; i++) {
    lists.splice(Math.floor(Math.random() * lists.length + 1), 0, i)
}

console.log('lists', lists)


function bubbleSort(array) {
  let len = array.length
  for (let i = 0; i < len; i++) {
    let complete = true
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
        complete = false
      }
    }
    if (complete) {
      return array
    }
  }

  return array
}


console.log('lists', bubbleSort(lists))