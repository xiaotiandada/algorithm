let list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }

  let mid = Math.floor(array.length / 2)
  let front = array.slice(0, mid)
  let end = array.slice(mid)

  return merge(mergeSort(front), mergeSort(end))
}

function merge(front, end) {
  let temp = []

  while (front.length && end.length) {
    if (front[0] < end[0] ){
      temp.push(front.shift())
    } else {
      temp.push(end.shift())
    }
  }

  while(front.length) {
    temp.push(front.shift())
  }
  while(end.length) {
    temp.push(end.shift())
  }
  return temp
}

console.time()
console.log(mergeSort(list))
console.timeEnd()