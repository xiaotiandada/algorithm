let lists = []
for(let i = 0; i <=10000; i++) {
    lists.splice(Math.floor(Math.random() * lists.length + 1), 0, i)
}

// console.log('lists', lists)

const quick = array => {
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

  return quick(left).concat(target, quick(right))

}

console.log(quick(lists))