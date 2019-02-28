var reg = /\d/;
var reg2 = /^\d$/;

console.log(reg2.test("9")) //true
console.log(reg2.test("123456")); //false

// 元字符：
// 每一个正则表达式都是由原字符和修饰符组成的

//[元字符] -> 在//之间具有意义的一些字符
// 1、具有特殊意义的元字符
// \ : 转义字符，转义后面字符所代表的意义
// ^: 以某一个元字符开始
// $: 以某一个元字符结束
// \n: 匹配一个换行符
// .: (小数点)匹配除换行符之外的任何单个字符。

// 2、代表出现次数的量词元字符
// *: 匹配前一个表达式0次或多次。等价于 {0,}。
// +: 匹配前面一个表达式1次或者多次。等价于 {1,}。
// ?: 匹配前面一个表达式0次或者1次。等价于 {0,1}。
// {n}: n是一个正整数，匹配了前面一个字符刚好发生了n次。
// {n,}: n是一个正整数，出现n次到多次
// {n,m}: n 和 m 都是整数。匹配前面的字符至少n次，最多m次。如果 n 或者 m 的值是0， 这个值被忽略。

var reg3 = /\d+/
console.log("reg3",reg3.test("1234567")) //true
//简单的验证手机号码 11位数字
var reg4 = /^1\d{10}$/

console.log("reg4",reg4.test("11111111111")) //true

var reg5 = /^0.2$/; //->以0开头，以2结尾，中间是出了\n以为的任意字符(只有一个占位符)
console.log("reg5",reg5.test("0.2")) //true
console.log("reg5",reg5.test("0-2")) //true

var reg6 = /^0\.2$/
console.log("reg6",reg6.test("0.2")) //true

// ():分组
var reg7 = /^(\d)+yyccQQu(\d)+/ // /^\d+yyccQQu\d+/
console.log("reg7", reg7.test("123yyccQQu123")); //true

// x|y : 匹配‘x’或者‘y’
// [xyz]: x,y,z中的任意一个，取并集,对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义。他们不必进行转义，不过转义也是起作用的。
// [^xyz]: 一个反向字符集。也就是说， 它匹配任何没有包含在方括号中的字符。你可以使用破折号（-）来指定一个字符范围。任何普通字符在这里都是起作用的。
// \d: 0-9之间的数字
// \D: 取反\d
var reg8 = /[^a-zA-Z]$/;
console.log("reg8", reg8.test("12345"))// true
console.log("reg8", reg8.test("12345a"))// false
console.log("reg8", reg8.test("12345Z"))// false


// \b: 匹配一个边界符
// \w: 匹配一个单字字符（字母、数字或者下划线）。等价于[A-Za-z0-9_]
// \s: 匹配一个空白字符，包括空格、制表符、换页符和换行符。等价于[ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]。

// 列子：
// /\bm/匹配“moon”中的‘m’；
// /oo\b/并不匹配"moon"中的'oo'，因为'oo'被一个“字”字符'n'紧跟着。
// /oon\b/匹配"moon"中的'oon'，因为'oon'是这个字符串的结束部分。这样他没有被一个“字”字符紧跟着。
// /\w\b\w/将不能匹配任何字符串，因为在一个单词中间的字符永远也不可能同时满足没有“字”字符跟随和有“字”字符跟随两种情况。
var reg9 = /\bm/;
console.log("reg9", reg9.test("moon"))// true
var reg10 = /oo\b/;
console.log("reg10", reg10.test("moon"))// false
var reg11 = /oon\b/;
console.log("reg11", reg11.test("moon"))// true
