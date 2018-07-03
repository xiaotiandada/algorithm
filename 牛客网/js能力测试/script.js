function cl(log){
    return console.log(log)
  }
  
  // 找出元素在item在给定数组中的arr中的位置
  
  function indexOf(arr, item) {
    if(Array.prototype.indexOf) {
      return arr.indexOf(item)
    } else {
      for(var i = 0;i<arr.length;i++){
        if(arr[i] === item) {
          return i
        }
      }
    }
    return -1
  }
  
  // console.log(indexOf([1,2,3,4,5,6], 4))
  
  
  // 计算给定数组arr中所有元素的总和
  
  function sum(arr) {
    return eval(arr.join('+'))
  }
  
  // console.log(sum([1,2,3,4,5,6]))
  
  
  // 移除数组arr中的所有值雨item相等的元素。不要直接修改数组arr 结果返回新的数组
  
  function remove (arr, item) {
    return arr.filter(function(value){
      return value !== item
    })
  }
  
  // console.log(remove([1,2,3,4,5,6], 5))
  
  // 移除数组arr中的所有值与item相等的元素,直接在给定的arr数组上进行操作，并将结果返回
  
  function removeWithoutCopu(arr, item){
    for(var i = 0 ; i < arr.length; i++) {
      if(arr[i] == item) {
        arr.splice(i, 1)
        i--
      }
    }
    return arr
  }
  
  // console.log(removeWithoutCopu([1,2,3,4,5,5,6], 5))
  
  
  // 在数组arr末尾添加元素item。不要直接修改数组arr，结果返回新的数组
  
  function append (arr, item) {
    return arr.concat(item)
  }
  
  // console.log(append([1,2,3],4))
  
  
  
  // 删除数组arr最后一个元素 不要直接修改数组arr 结果返回新的数组
  
  function truncate(arr) {
    return arr.slice(0,-1)
  }
  
  // console.log(truncate([1,2,3,4,5]))
  
  
  // 在数组arr开头添加元素item 不要直接修改数组arr 结果返回新的数组
  
  function prepend(arr, item){
    var arr1 = []
    arr1.push(item)
    return arr1.concat(arr)
  }
  
  // console.log(prepend([1,2,3,4], 5))
  
  // 删除数组arr第一个元素 不要直接修改数组arr 结果返回新的数组
  
  function curtail(arr) {
    return arr.slice(1)
  }
  
  // console.log(curtail([1,2,3,4]))
  
  
  // 合并数组arr1 和 数组 arr2 不要直接修改数组arr 结果返回新的数组
  
  function concat(arr1, arr2){
    return arr1.concat(arr2)
  }
  
  // console.log(concat([1,2,3,4],[5,6,7]))
  
  // 在数组arr的index处添加元素item 不要直接修改数组arr 结果返回新的数组
  
  function insert(arr, item, index) {
    var arr_m = []
    for(var i = 0; i < arr.length; i++){
      arr_m[i] = arr[i]
    }
    arr_m.splice(index, 0, item)
    return arr_m
  }
  
  // cl(insert([1,2,3,4], 5, 3))
  
  
  
  // 统计数组arr中值等于item的元素出现的次数
  
  function count(arr, item){
    var count = 0
    arr.forEach(function(e){
      if(e === item){
        count++
      }
    })
    return count
  }
  
  
  // cl(count([1,2,3,4,4,4,5],4))
  
  
  // 找出数组arr中重复出现过的元素
  
  function duplicates(arr){
    var arrNew
    var arrCover = []
    for(var i = 0;i<arr.length;i++){
      arrNew = arr.slice(i+1)
      if(arrNew.indexOf(arr[i])!= -1 && arrCover.indexOf(arr[i]) == -1) {
        // 存在且尚未加入到arrcover中
        arrCover.push(arr[i])
      }
    }
    return arrCover
  }
  
  // cl(duplicates([1,2,3,4,5,6,5,4,3,2,1,1,1]))
  
  
  // 为数组arr中的每一个元素求二次方 不要直接修改数组arr 结果返回新数组
  
  function square(arr){
    return arr.map(function (item){
      return item * item
    })
  }
  
  
  // cl(square([1,2,3]))
  
  
  // 在数组arr中 查找值与item相等的元素出现的所有位置
  function findAllOccurrenes(arr, target) {
    var newarr = []
    for(var i = 0;i<arr.length;i++){
      if(arr[i] === target){
        newarr.push(i)
      }
    }
    return newarr
  }
  
  // cl(findAllOccurrenes([1,2,3,4],3))
  
  // 避免全局变量
  
  function globals(){
    var myObject = {
      name : 'Jory'
    }
    return myObject
  }
  
  
  
  
  // 请修复给定的 js 代码中，函数定义存在的问题
  
  function functions(flag) {
      if (flag) {
         return 'a'; 
      } else {
        return 'b'; 
      }
  
  }
  
  // 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
  
  function parse2Int(num) {
      return parseInt(num, 10);
  }
  
  // 判断 val1 和 val2 是否完全等同
  
  function identity(val1, val2) {
      if(val1 === val2){
          return true
      } else {
          return false
      }
  }
  
  
  // 实现一个打点计时器，要求
  // 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
  // 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
  // 3、第一个数需要立即输出
  
  
  function count(start, end) {
      console.log(start++)
      
      var tiemr = setInterval(function(){
          if(start <= end) {
              console.log(start++)
          } else {
              clearInterval(tiemr)
          }
  }, 100)
      
      return {
          cancel: function(){
              clearInterval(tiemr)
          }
      }
  }
  
  
  
  
  // 实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
  // 1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
  // 2、如果 num 能被 3 整除，返回字符串 fizz
  // 3、如果 num 能被 5 整除，返回字符串 buzz
  // 4、如果参数为空或者不是 Number 类型，返回 false
  // 5、其余情况，返回参数 num
  
  
  function fizzBuzz(num) {
      var a = num % 3
      var b = num % 5
      
      if(a == 0 && b == 0) {
          
          return 'fizzbuzz'
      } else if(a == 0 ) {
          return 'fizz'
      } else if(b == 0) {
          return 'buzz'
      } else if(num == 'null' || typeof(num) != 'number') {
          return false
      } else {
          return num
      }
  }
  
  // https://www.cnblogs.com/libin-1/p/6069031.html
  
  // 将数组 arr 中的元素作为调用函数 fn 的参数
  
  // function (greeting, name, punctuation) {
  //   return greeting + ', ' + name + (punctuation || '!');
  // }, ['Hello', 'Ellie', '!']
  
  
  function argsAsArray(fn, arr) {
      return fn.apply(this, arr)
  }
  
  // 将函数 fn 的执行上下文改为 obj 对象
  
  function speak(fn, obj) {
      return fn.call(obj)
  }
  
  // 实现函数 functionFunction，调用之后满足如下条件：
  // 1、返回值为一个函数 f
  // 2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
  // 3、所有函数的参数数量为 1，且均为 String 类型
  
  function functionFunction(str) {
      return function(str2) {
          return str + ', ' + str2
      }
  }
  
  // 实现函数 makeClosures，调用之后满足如下条件：
  // 1、返回一个函数数组 result，长度与 arr 相同
  // 2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
  
  
  function makeClosures(arr, fn) {
      var result =[ ]
      arr.forEach(function(item){
          result.push(fn.bind(this, item))
      })
      return result
  }
  
  
  // 已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
  // 1、返回一个函数 result，该函数接受一个参数
  // 2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
  function partial(fn, str1, str2) {
      return fn.bind(this, str1, str2)
  }
  
  
  // 函数 useArguments 可以接收 1 个及以上的参数。
  // 请实现函数 useArguments，返回所有调用参数相加后的结果。
  //本题的测试参数全部为 Number 类型，不需考虑参数转换。
  
  
  function useArguments() {
      var result = 0
      for(var i = 0;i<arguments.length;i++){
          result += arguments[i]
      }
      return result
  }
  
  
  
  // 实现函数 callIt，调用之后满足如下条件
  // 1、返回的结果为调用 fn 之后的结果
  // 2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
  
  function callIt(fn) {
      var params = Array.prototype.slice.apply(arguments, [1,arguments.length])
      return fn.apply(this, params)
  }
  
  // 实现函数 partialUsingArguments，调用之后满足如下条件：
  // 1、返回一个函数 result
  // 2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
  // 3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
  
  function partialUsingArguments(fn) {
      var params = Array.prototype.slice.call(arguments, 1, arguments.length)
      params.forEach(function(para){
          fn = fn.bind(this, para)
      })
      return fn
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  