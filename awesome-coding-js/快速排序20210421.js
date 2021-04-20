let list = [6,2,3,4,5,1,4,2,45,64,32,66,22,91,34,63,12,41,45,43,54,65,77,42,43,25]

function quickSort(array) {
  if (array.length < 2) {
    return array
  }

  let target = array[0]
  let left = []
  let right = []

  for(let i = 1; i <array.length; i++) {
    if (array[i] < target) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return quickSort(left).concat([target], quickSort(right))
}

console.log(quickSort(list))