let lists: number[] = []
for(let i = 0; i <1000; i++) {
    lists.splice(Math.floor(Math.random() * lists.length + 1), 0, i)
}

console.log('lists', lists)


function quickSort(array: number[]): number[] {

  if (array.length <= 1) {
    return array
  }

  let target: number = array[0]
  let left: number[] = []
  let right: number[] = []
  let len: number = array.length

  for (let i = 1; i < len; i++) {
    if (array[i] < target) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return quickSort(left).concat([target], quickSort(right))
}
console.time('quickSort')
console.log('quickSort', quickSort(lists))
console.timeEnd('quickSort')
