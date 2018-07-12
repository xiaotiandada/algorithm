# textarea 和 select 在设定宽高为50px的时候宽度是一样的吗？

> 是不是一样的 搞一搞就知道了～

```html
<textarea class="textarea" name="" id="" cols="" rows=""></textarea>

<select class="select" name="" id="">
  <option value="a">a</option>
  <option value="b">b</option>
  <option value="c">c</option>
  <option value="d">d</option>
</select>
```

```css
.textarea{
  width: 50px;
  margin: 0;
  padding: 0;
  border: 0;
}
.select {
  width: 50px;
  margin: 0;
  padding: 0;
  border: 0;
}
```

- 如果在重置border的情况下 设置textarea 和 select的宽度为50px 那么他的宽度是不一样的

- 在测试textarea中 发现textarea宽度为50px 的时候 总宽度为50加上默认的border 1px 就是52px

- 而select在宽度为50px的时候 总宽度为50px 内容减去border 1px 之和后还剩余48px

所以不知道的地方 搞一搞就知道了！hhhh