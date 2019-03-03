
var reg = /\d+/;
var str = "yyccQQu2018px2019"
var res = reg.exec(str)
console.log(reg.lastIndex,"lastIndex1");
console.log(res, "reg");

// 第一项是我们捕获的内容
// index：捕获的内容在元字符串中开始的索引位置
// input：捕获的原始字符串
// ['2018', index: 7, input: 'yyccQQu2018px2019' ]'res'

// 正则的捕获是懒惰的 每一次执行exec只捕获第一个匹配的内容。
// 只有添加全局修饰符g后，lastIndex的值发生了改变，变为第一次捕获内容后的第一个字符的开始索引，第二次捕获是继续向后查找的...
var reg2 = /\d+/g;
console.log(reg2.lastIndex,"lastIndex2");
console.log(reg2.exec(str),"reg2") //2018
console.log(reg2.lastIndex,"lastIndex2");
console.log(reg2.exec(str), "reg2")//2019
console.log(reg2.lastIndex, "lastIndex2");
console.log(reg2.exec(str), "reg2") //null

//修饰符 g,i,m
// global(g):全局匹配
// ignoreCase(i):忽略大小写匹配
// multiline(m):多行匹配

var ary = []
var ress = reg2.exec(str)
while (ress){
    ary.push(ress[0]);
    ress = reg2.exec(str)
}
console.log(ary, 'ary')//[ '2018', '2019' ] 'ary'

//为了防止没有加全局修饰符g导致的死循环,我们在处理之前,对于没有添加g的手动给添加一个g
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
var arry = reg.myExecAll(str);
var arry2 = reg2.myExecAll(str);
console.log(arry, 'arry', arry2);//[ '2018', '2019' ] 'arry' [ '2018', '2019' ]


//正则的贪婪性：在每一次的捕获的时候，总是按照正则匹配的最长结果捕获
//贪婪性的解决
var reg3 = /\d+?/g; //var reg = /\d+/;
console.log(reg3.myExecAll(str));//[ '2', '0', '1', '8', '2', '0', '1', '9' ]


// ？在正则中的作用：
// 1）放在一个普通的元字符后面代表出现0-1次 /\d?/ -> 数字可能出现也可能不出现
// 2）放在一个量词的元字符后面是取消捕获时候的贪婪性


// match:捕获字符串中存在一个叫做match的方法也可以实现捕获，
//  而且只要我们取消了正则的懒惰性，执行一次match方法就可以捕获到所有内容了
//  虽然match比exec更简洁一些，但是在分组捕获的情况下，match只能捕获到大正则匹配的内容，
//  不能捕获小正则匹配的内容
var reg4 = /\d+?/g;
var str2 = "yyccQQu2019ajkda2008afjkaf2020";
var ary3 = str2.match(reg4); //[ '2', '0', '1', '8', '2', '0', '1', '9' ]
console.log(ary3,'ary3')
// reg4 = /\d+/g; str2.match(reg4); [ '2019', '2008', '2020' ] 'ary3'

//（）
// 正则分组：
// 1、改变优先级，
// 2、分组引用 
// \2代表和第二个分组出现一模一样的内容；\1和第一个分组出现一模一样的内容
// 3、分组捕获 -> 正则在捕获的时候，不仅仅把大正则匹配的内容捕获到，还能捕获到小分组匹配的内容
//   (?:) 在分组中?:的意思是只匹配不捕获

var reg5 = /^(\w)\1(\w)\2$/;
console.log(reg5.test("zzff"))


var reg6 = /^(\d{2})(\d{4})(\d{4})(\d{2})(\d{2})(?:\d{2})(\d)(?:\d|X)$/;

var str3 = "142726199009181211";
console.log(reg6.exec(str3),"reg6 exec")
// ['142726199009181211',
// '14',
// '2726',
// '1990',
// '09',
// '18',
// '1',
// index: 0,
//     input: '142726199009181211' ]'reg6 exec'

// 数组中的第一项 -> 大正则匹配的内容 
// ary[1] -> 第一个分组捕获的内容
// 以此类推。。。
// console.log(str3.match(reg6),'match6') // -> 和exec获取的结果是一样的


var reg7 = /yyccQQu(\d+)/g
var str4 = "yyccQQu1234yyccQQu3456yyccQQu5678"
console.log(reg7.exec(str4), "reg7 exec1");
console.log(reg7.exec(str4), "reg7 exec2");
console.log(reg7.exec(str4),"reg7 exec3");
// ['yyccQQu5678',
//     '5678',
//     index: 22,
//     input: 'yyccQQu1234yyccQQu3456yyccQQu5678'] 'reg7 exec3'
// exec执行三次，每一次都能把大正则匹配的获取到，而且还可以获取第一个分组匹配的内容

//match 方法只能捕获大正则匹配的内容
console.log(str4.match(reg7), "match reg7") //[ 'yyccQQu1234', 'yyccQQu3456', 'yyccQQu5678' ] 'match reg7'











