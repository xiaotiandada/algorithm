// review

{
  function quickSort(array) {
    if (array.length < 2) {
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

  let list = []
  for (let i = 0; i <= 99; i++) {
    list.push(Math.floor(Math.random() * 99 + 1))
  }

  console.time()
  console.log(quickSort(list))
  console.timeEnd()

}