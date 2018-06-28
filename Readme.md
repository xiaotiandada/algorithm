## 算法学习
### Freecodecamp社区的算法学习 

> [点我进去](https://github.com/xiaotiandada/algorithm/tree/master/freecodecamp)

[MissingLetters](https://github.com/xiaotiandada/algorithm/tree/master/freecodecamp/MissingLetters)

[Boowho](https://github.com/xiaotiandada/algorithm/tree/master/freecodecamp/Boowho)

### leetcode

> https://leetcode-cn.com/

- 两数之和

``` js

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

var nums = [2, 7, 11, 15]
var target = 9
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
console.log(twoSum(nums, target));
```