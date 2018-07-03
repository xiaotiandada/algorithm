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


// 已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
// 1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
// 2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
// 3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
// 4、调用 c 之后，返回的结果与调用 fn 的返回值一致
// 5、fn 的参数依次为函数 a, b, c 的调用参数

function curryIt(fn) {
    return a = function (d) {
        var b1 = arguments[0]
        return b = function(e) {
            var c1 = arguments[0]
            return c = function( f ){
                var a1 = arguments[0]
                return fn.call(this, d, e, f)
            }
        }
    }
}


// 返回参数 a 和 b 的逻辑或运算结果

function or(a, b) {
    return a || b
}




// 返回参数 a 和 b 的逻辑且运算结果
function and(a, b) {
    return a && b
}

// 目描述
// 完成函数 createModule，调用之后满足如下要求：
// 1、返回一个对象
// 2、对象的 greeting 属性值等于 str1， name 属性值等于 str2
// 3、对象存在一个 sayIt 方法，该方法返回的字符串为 greeting属性值 + ', ' + name属性值

function createModule(str1, str2) {
    return obj = {
        greeting : str1,
        name : str2,
        sayIt: function(){
            return this.greeting+ ', ' + this.name
        }
    }
}

// 获取数字 num 二进制形式第 bit 位的值。注意：
// 1、bit 从 1 开始
// 2、返回 0 或 1
// 3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1

function valueAtBit(num, bit) {
    var str = num.toString(2)
    return str[str.length-bit]
}

// 给定二进制字符串，将其换算成对应的十进制数字
function base10(str) {
    var num = parseInt(str, 2)
    return num
}

// 将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。

function convertToBinary(num) {
    var str = num.toString(2)
    
    while(str.length < 8){
        str = '0' + str
    }
    return str
}

// 求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题

function multiply(a, b) {
    return a*b
}

// 将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
function alterContext(fn, obj) {
    return fn.call(obj)
}

// 给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。

function alterObjects(constructor, greeting) {
    constructor.prototype.greeting = greeting
}

// 找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
// 1、返回数组，格式为 key: value
// 2、结果数组不要求顺序

function iterate(obj) {
    const outCome = []
    for(var item in obj) {
        if(obj.hasOwnProperty(item)){
            outCome.push(item + ': ' + obj[item])
        }
    }
    return outCome
}

// 给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false
function containsNumber(str) {
    var reg = /\d/g
    return reg.test(str)

}

// 给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false

function containsRepeatingLetter(str) {
    return /([a-zA-Z])\1/.test(str)
}


// 给定字符串 str，检查其是否以元音字母结尾
// 1、元音字母包括 a，e，i，o，u，以及对应的大写
// 2、包含返回 true，否则返回 false

function endsWithVowel(str) {
    return (/[a,e,i,o,u]$/i.test(str))
}

function endsWithVowel(str) {
    var m = str.substr(str.length-1, 1).toLowerCase()
    
    if(m == 'a' || m=='e' || m == 'i' || m == 'o' || m == 'u'){
        return true
    } else {
        return false
    }
}

// 给定字符串 str，检查其是否包含 连续3个数字 
// 1、如果包含，返回最新出现的 3 个数字的字符串
// 2、如果不包含，返回 false

function captureThreeNumbers(str) {
    var reg
    if(reg = str.match(/(\d{3})/)){
        return reg[0]
    }
    return false
}

// 给定字符串 str，检查其是否符合如下格式
// 1、XXX-XXX-XXXX
// 2、其中 X 为 Number 类型

function matchesPattern(str) {
    return /^\d{3}\-\d{3}\-\d{4}$/.test(str)
}

// 给定字符串 str，检查其是否符合美元书写格式
// 1、以 $ 开始
// 2、整数部分，从个位起，满 3 个数字用 , 分隔
// 3、如果为小数，则小数部分长度为 2
// 4、正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3

function isUSD(str) {
    return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str)
}
