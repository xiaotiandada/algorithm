let list = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];

// let lists = []
// for(let i = 0; i <=10; i++) {
//     lists.splice(Math.floor(Math.random() * lists.length + 1), 0, i)
// }

// console.log(lists)

// let ageLists = []
// for(let i = 0; i <=100; i++) {
//     let id = Math.floor(Math.random() * 100 + 1)
//     ageLists.push({
//         id: id,
//         age: Math.floor(Math.random() * 40 + 1),
//         name: `学号${i}`,
//         type: 'student'
//     })
// }

// console.log(ageLists)

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

// 复习
function quickSort1(array) {
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

    return quickSort1(left).concat([target], quickSort1(right))
}

// console.time('quickSort')
// console.log(quickSort1(lists))
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

// console.time('quickSortObj')
// console.log(quickSortObj(ageLists, 'id'))
// console.timeEnd('quickSortObj')

function quickSort2(array, start, end) {
    if (end - start < 1) {
        return
    }

    const target = array[start]
    let l = start // 记录一个索引l从数组最左侧开始
    let r = end // 记录一个索引r从数组右侧开始

    while(l < r) { // 在l<r的条件下
        while(l < r && array[r] >= target) { // 找到 右侧大于 target的 array[r] 值 并赋值到 array[l]
            r--
        }
        array[l] = array[r]
        while(l < r && array[l] < target) { // 找到左侧 小于 target 的 array[l] 值 并赋值到 array[r]
            l++
        }
        array[r] = array[l]
    }

    array[l] = target
    quickSort2(array, start, l - 1)
    quickSort2(array, l + 1, end)
    return array
}

console.log(quickSort2(list, 0, list.length))