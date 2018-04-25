### Sorted Union

写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。

换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。

非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。


这是一些对你有帮助的资源:

[Arguments object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)

[Array.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

```bash
function unite(arr1, arr2, arr3) {
  var args = Array.from(arguments);
  var argsConcat = args.reduce(function(a, b){
    return a.concat(b);
  },[]);
 
  return argsConcat.filter(function(item, index){
     return argsConcat.indexOf(item) === index;
  });
}


unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```


参考文档：https://www.jianshu.com/p/51301859043c