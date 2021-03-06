

// 1、有效数字的正则 (正数/负数/零/小数)

// 12.3// 12// -12// +12// 0.2

//1) "."可以出现也可以不出现，但是一旦出现，后面必须跟着一位或者多位数字
//2）最开始可以有+/-亦可以没有
//3）整数部分，一位数可以是0-9之间的一个，多位数不能以0开头

// 在【】中出现的所有字符都是代表本身意思的字符（没有特殊含义）
var reg = /^[+-]?$/; // 条件2)
var reg = /^[1-9]\d+$/ // 条件3)

// var reg3 = /^18|19$/
// var reg4 = /^(18|19)$/ 
// console.log(reg3.test(18)); //true
// console.log(reg3.test(19)); //true
// console.log(reg3.test(181)); //true
// console.log(reg3.test(1819)); //true

// (): 分组的作用
// 1）改变x|y的默认的优先级
var reg = /^(\d|([1-9]\d+))$/ // 条件3)
var reg = /^(\.\d+)?$/ // 条件1)

var reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;
// var reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?$/;

var arr = ["12","12,3","-12","+12.3","0.223","0999","900"]

for(k in arr){
    console.log(reg.test(arr[k]),k);
}



//https://www.jb51.net/article/74877.htm
//https://www.cnblogs.com/ly5201314/archive/2008/09/04/1284139.html
