
var str = "yyccQQu12345yyccQQu76543"
str = str.replace("yyccQQu","xyd").replace('yyccQQu','xyd')
var str2 = "yyccQQu2018 yyccQQu2019";
str2 = str2.replace("yyccQQu", "机构").replace("yyccQQu", "机构");
console.log(str, 'str')//xyd12345xyd76543 str
console.log(str2,'str2')


var str3 = "yyccQQu2015yyccQQu2016";
// str3 = str3.replace("yyccQQu", "yyccQQupx").replace("yyccQQu", "yyccQQupx")
// console.log(str3, 'str3') //yyccQQupxpx2015yyccQQu2016

console.log(str3.replace(/yyccQQu/g, "yyccQQupx"), "reg");


var str4 = "yyccQQu2017yyccQQu2018yyccQQu123456";
str4 = str4.replace(/yyccQQu/g, function() {
    console.log(arguments,'arguments');
    return "yyccQQupx"
})
console.log(str4, 'str4') //yyccQQupx2017yyccQQupx2018yyccQQupx123456 str4
// { '0': 'yyccQQu',
//   '1': 0,
//   '2': 'yyccQQu2017yyccQQu2018yyccQQu123456' } 'arguments'
// { '0': 'yyccQQu',
//   '1': 11,
//   '2': 'yyccQQu2017yyccQQu2018yyccQQu123456' } 'arguments'
// { '0': 'yyccQQu',
//   '1': 22,
//   '2': 'yyccQQu2017yyccQQu2018yyccQQu123456' } 'arguments'

var str5 = "yyccQQu2017yyccQQu2018";
str5 = str5.replace(/\d+/g,function(){
    return 1
}) //yyccQQu1yyccQQu1

var str6 = "yyccQQu2017yyccQQu2018";

str6 = str6.replace(/(\d+)/g,function(){
    console.log(arguments,'arguments str6')
    console.log(arguments[1]) //2017 2018 获取第一次执行匿名函数我们正则捕获到的第一个内容
    console.log(RegExp.$1) //2018 2018获取第一个分组捕获的内容
})
// { '0': '2017',
//   '1': '2017',
//   '2': 7,
//   '3': 'yyccQQu2017yyccQQu2018' } 'arguments str6'


var str7 = "20190303"
var ary = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];

str7 = str7.replace(/\d/g,function(){
    // console.log(arguments,'arguments str7')
    // var num = arguments[0]
    // var str = ary[num]
    // return str
    return ary[arguments[0]]
})
console.log(str7,'str7')
// { '0': '2', '1': 0, '2': '20190303' } 'arguments str7'
// { '0': '0', '1': 1, '2': '20190303' } 'arguments str7'
// { '0': '1', '1': 2, '2': '20190303' } 'arguments str7'
// { '0': '9', '1': 3, '2': '20190303' } 'arguments str7'
// { '0': '0', '1': 4, '2': '20190303' } 'arguments str7'
// { '0': '3', '1': 5, '2': '20190303' } 'arguments str7'
// { '0': '0', '1': 6, '2': '20190303' } 'arguments str7'
// { '0': '3', '1': 7, '2': '20190303' } 'arguments str7'
// 贰零壹玖零叁零叁 str7










