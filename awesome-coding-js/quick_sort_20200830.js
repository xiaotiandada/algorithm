let lists = []
for(let i = 0; i <1000; i++) {
    lists.splice(Math.floor(Math.random() * lists.length + 1), 0, i)
}

console.log('lists', lists)


function quickSort(array) {
  if (array.length <= 1) {
    return array
  }

  let target = array[0]
  let left = []
  let right = []

  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return quickSort(left).concat([target], quickSort(right))
}

console.time('quickSort')
console.log('lists', quickSort(lists))
console.timeEnd('quickSort')