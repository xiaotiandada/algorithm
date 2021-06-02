let list = [6,2,3,4,5,1,4,2,45,64,32,66,22,91,34,63,12,41,45,43,54,65,77,42,43,25]

function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let target = arr[0]
  let left = []
  let right = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < target) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([target], quickSort(right))
}

console.log(quickSort(list))