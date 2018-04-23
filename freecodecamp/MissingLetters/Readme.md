### Missing letters

从传递进来的字母序列中找到缺失的字母并返回它。

如果所有字母都在序列中，返回 undefined。

如果你被卡住了，记得开大招 Read-Search-Ask。尝试与他人结伴编程、编写你自己的代码。

这是一些对你有帮助的资源:

String.charCodeAt()

String.fromCharCode()


#### 要求
fearNotLetter("abce") 应该返回 "d"。

fearNotLetter("abcdefghjklmno") 应该返回 "i"。

fearNotLetter("bcd") 应该返回 undefined。

fearNotLetter("yz") 应该返回 undefined。

```bash
function fearNotLetter(str) {
  for(var i = 0,len = str.length;i<len;i++){
    var strs = str.charCodeAt(i+1) - str.charCodeAt(i);
    if(strs>1){
      return String.fromCharCode(str.charCodeAt(i)+1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
```

遍历传进来的字符，变量strs 通过计算Unicode值是不是相邻的字母 如果大于1 则说明不是相邻的并且返回后面的一位字母，如果是相邻的则返回undefined

参考文档：https://blog.csdn.net/qq_37399074/article/details/68938315