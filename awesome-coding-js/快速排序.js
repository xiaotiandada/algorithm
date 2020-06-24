let list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

// let lists = []
// for(let i = 0; i <=10; i++) {
//     lists.splice(Math.floor(Math.random() * lists.length + 1), 0, i)
// }

// console.log(lists)

let ageLists = []
for(let i = 0; i <=100; i++) {
    let id = Math.floor(Math.random() * 100 + 1)
    ageLists.push({
        id: id,
        age: Math.floor(Math.random() * 40 + 1),
        name: `学号${i}`,
        type: 'student'
    })
}

console.log(ageLists)

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

// console.log(quickSort(list))


function quickSort1(array, start, end) {
    if (end - start < 1) {
        return
    }

    const target = array[start]
    let l = start
    let r = end

    while(l < r) {
        while(l < r && array[r] >= target) {
            r--
        }
        array[l] = array[r]
        while(l < r && array[l] < target) {
            l++
        }
        array[r] = array[l]
    }

    array[l] = target
    quickSort1(array, start, l - 1)
    quickSort1(array, l + 1, end)
    return array
}

// console.log(quickSort1(list, 0, list.length))

// 复习
function quickSort2(array) {
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

    return quickSort2(left).concat([target], quickSort2(right))
}

// console.time('quickSort')
// console.log(quickSort2(lists))
// console.timeEnd('quickSort')


function quickSortObj(array, key) {
    if (array.length <= 1) {
        return array
    }

    let target = array[0]
    let left = []
    let right = []

    for (let i = 1; i < array.length; i++) {
        if (array[i][key] < target[key]) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    return quickSortObj(left, key).concat([target], quickSortObj(right, key))
}

console.time('quickSortObj')
console.log(quickSortObj(ageLists, 'id'))
console.timeEnd('quickSortObj')