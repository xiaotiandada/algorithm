var lists = [];
for (var i = 0; i < 1000; i++) {
    lists.splice(Math.floor(Math.random() * lists.length + 1), 0, i);
}
console.log('lists', lists);
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var target = array[0];
    var left = [];
    var right = [];
    var len = array.length;
    for (var i = 1; i < len; i++) {
        if (array[i] < target) {
            left.push(array[i]);
        }
        else {
            right.push(array[i]);
        }
    }
    return quickSort(left).concat([target], quickSort(right));
}
console.time('quickSort');
console.log('quickSort', quickSort(lists));
console.timeEnd('quickSort');
