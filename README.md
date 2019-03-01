
## 判断邮箱
- 第一部分：数字、字母、下划线、- 一到多位
- 第二部分：@
- 第三部分：数字、字母、 一到多位
- 第四部分：(.两到四位) .com   .cn   .net   ..      .com.cn
```
var reg =/^[0-9a-zA-Z_-]+@[0-9a-zA-Z-]+(\.[a-zA-Z]{2,4}){1,2}$/
判断年龄在18到65之间的
18-19/20-59/60-65
var  reg =/^((18|19)|([2-5]\d)|(6[0-5]))$/
真实有效的中华人民共和国姓名 2-4 位汉字
var reg = /^[\u4e00-\u9fa5]{2,4}$/;
```

## 身份证号码
- 前六位是省->市->县（区）
- 四位年 两位月 两位日
```
简单版
    var reg = /^\d{17}(\d|X)$/;
    13 0828 1990 1204 06 1 7
复杂版
    var reg = /^(\d{2})(\d{4})(\d{4})(\d{2})(\d{2})(?:\d{2})(\d)(?:\d|X)$/;
```

### 细节知识点(身份证号码)

- 里面出现的任何字符都是代表本身意义的，例如：[.]中的”.“就是代表一个小数点而不是除了\n以外的任意字符
- 里面出现18不是数字18而是1或者8，例如[18-65]是1或者8-6或者5中任选一个
> 1、exec正则的捕获方法--->先匹配，然后把匹配的内容捕获
>>如果字符串没有匹配这个正则，捕获的返结果是null
如果和正则匹配，返回的结果是一个数组
```    
    例子
    var str ="2018yyccQQu2019yyccQQu"
    var reg = /\d+/;
    第一项是我们捕获的内容

    index：捕获的内容在元字符串中开始的索引位置
    input：捕获的原始字符串
```

> 2、正则的捕获是懒惰的

>>正则的每一次捕获都从lastIndex值开始，第一次捕获的时候，lastIndex=0，从原始字符串索引为0的位置开始查找捕获，而默认的情况下，第一次捕获完成，lastIndex的值并没有发生改变，还是0，所以第二次捕获还是从原始字符串索引为0处开始查找，这样找到的还是第一次捕获的内容
- 解决办法：添加全局修饰符g--->加上g后，第一次捕获完成后，lastIndex的值发生了改变，变为第一次捕获内容后的第一个字符的开始索引，第二次捕获是继续向后查找的...
- 疑问：不用全局修饰符g每次捕获完成后手动修改lastIndex的值不可以么？
- 不可以，虽然手动修改了lastIndex，确实把lastIndex的值进行改变了，但是正则查找的时候还是从索引0开始的
```
    var str = "yyccQQu2019yyccQQu";
    var reg = /\d+/g;
```

>> 例子
    为了防止没有加全局修饰符g导致的死循环,我们在处理之前,对于没有添加g的手动给添加一个g

```
    RegExp.prototype.myExecAll = function myExecAll() {
        var _this = this, str = arguments[0], ary = [], res = null;
        !_this.global ? _this = eval(_this.toString() + "g") : null;
        res = _this.exec(str);
        while (res) {
        ary[ary.length] = res[0];
        res = _this.exec(str);
        }
        return ary;
    };
    var ary = reg.myExecAll(str);
        console.log(ary);
        console.log(reg.lastIndex);//->0
    var res = reg.exec(str);
        console.log(res);
        console.log(reg.lastIndex);//->11
    res = reg.exec(str);
        console.log(res);
        console.log(reg.lastIndex);//->21
    res = reg.exec(str);
        console.log(res);//->null
```
> 3、match:捕获字符串中存在一个叫做match的方法也可以实现捕获，而且只要我们取消了正则的懒惰性，执行一次match方法就可以捕获到所有内容了

```
    var str = "yyccQQu2018xiangmu2019";
    var reg = /\d+/g;
        console.log(str.match(reg));
    疑问:那我们都用match来替换exec多好啊?
```

> 4、正则的分组捕获

> 每一次捕获的时候，不仅仅可以把大正则匹配的内容捕获到，而且还可以把每一个小分组（子正则）匹配的内容单独的捕获到

```
    var str = "yyccQQu[2018]xiangmu[2019]";
    var reg = /\[(\d)(\d+)\]/g;
    var res = reg.exec(str);
    console.log(res);
    ["[2018]", "2", "015", index: 7, input: "yyccQQu[2018]xiangmu[2019]"]

    第一项是大正则捕获的内容 res[0]
    第二项是第一个分组捕获的内容 res[1]
    第三项是第二个分组捕获的内容 rex[2]
    。。。。。

    分组的只匹配不捕获:我们如果执行把分组内容进行匹配但是不进行捕获的话,只需要在分组的前面加上?:即可

    var str = "yyccQQu[2018]xiangmu[2019]";
    var reg = /\[(?:\d)(\d+)\]/g;
    var res = reg.exec(str);
        console.log(res);
        ["[2018]", "015"...]

    数组中的第一项是大正则捕获的内容 res[0]
    数组中的第二项是第二个分组捕获的内容 res[1]
    第一个分组添加了?:,所以只匹配不捕获
```

 
>5、exec和match的区别

>match只能捕获大正则匹配的内容，对于分组捕获中，是无法获取分组匹配的内容的，所以如果捕获的时候不需要捕获分组的内容，我们直接用match更方便，如果需要捕获分组的内容，我们只能使用exec来一个个捕获

```
  var str = "yyccQQu[2018]xiangmu[2019]";
  var reg = /\[(\d+)\]/g;
    //console.log(str.match(reg));//->["[2018]", "[2019]"]
  var ary = [];
  var res = reg.exec(str);
  while (res) {
    //ary.push(res[1]);
    ary.push(RegExp.$1);//RegExp.$1获取当前正则第一个分组捕获的内容，（可能在部分IE浏览器下捕获不到值）
    res = reg.exec(str);
  }
    console.log(ary);
```
> 6、正则的贪婪性：在每一次的捕获的时候，总是按照正则匹配的最长结果捕获

```
    var str = "yyccQQu2018xiangmu2019";
    var reg = /\d+/g;
        console.log(reg.myExecAll(str));//-->["2018","2019"]
    var str = "yyccQQu2018xiangmu2019";
    var reg = /\d+?/g;
        console.log(reg.myExecAll(str));//-->["2", "0", "1", "5", "2", "0", "1", "6"]
```
> 7、分组引用

>> \2代表出现和第二个分组一模一样的内容

>> \1代表出现和第一个分组一模一样的内容

```
    var reg=/^(\w)(\w)\2\1$/;
    "woow"、"1221"...
```

> 8、字符串方法---->replace：把一个字符串中的某个字符替换成新的内容

>> 1)在不使用正则的情况下

>>>执行一次replace只能替换字符串中的一个，需要替换多个同样需要执行多次

```
    var str = "yyccQQu2018 yyccQQu2019";
    "yyccQQu" -> "机构"
    str = str.replace("yyccQQu", "机构").replace("yyccQQu", "机构");
```
>>>有些时候即使执行多次,也实现不了替换

```
    "yyccQQu" -> "yyccQQuxiangmu"
    str = str.replace("yyccQQu", "yyccQQuxiangmu").replace("yyccQQu", "yyccQQuxiangmu");
```

>>>[第一个参数可以是一个正则] 把所有和正则匹配的内容进行替换(但是和捕获一样默认是懒惰的,只有加上全局修饰符g才可以)

```
    var str = "yyccQQu2018 yyccQQu2019";
    str = str.replace(/yyccQQu/g, "yyccQQuxiangmu");
    console.log(str);<br>
```
>>>>1)执行和执行次数问题

    其实和exec捕获的原理是一模一样的

例如：我们第二个参数如果传递的是一个函数,每当正则在字符串中捕获一次当前的这个函数就执行一次 ->本题中一共捕获了两次,所以函数执行了两次

    var str = "yyccQQu2018 yyccQQu2019";
    str = str.replace(/yyccQQu/g, function () {
>>>>2)参数问题

      console.dir(arguments);

>>>>不仅仅是执行function,而且还给我们的函数传递了参数,并且传递的参数和每一次exec捕获的内容是一模一样的

>>>>如果是第一次exec捕获->["yyccQQu",index:0,input:"原始字符串"]
第一次执行函数里面的参数

      arguments[0] -> "yyccQQu"/**/
      arguments[1] -> 0  相当于exec中的index 开始捕获的索引位置
      arguments[2] -> "原始字符串" 相当于exec中的input
>>>>3)返回值问题
>>>>return返回的是什么,就相当于把当前捕获的内容替换成什么

        return "yyccQQuxiangmu";
    });
        console.log(str);






