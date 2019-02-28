//正则
var reg = /\d/; //包含一个0-9之间的数字
// 正则的匹配
// console.log(reg.test("abc"))// false 
// console.log(reg.test("汉字"))// false 
// console.log(reg.test("汉字2019"))//  true
// console.log(reg.test("2019"))//  true

// 正则的捕获
// console.log(reg.exec("汉字2"));
// console.log(reg.exec("汉字"));
// console.log(reg.exec("1"))
// ---》 ['2', index: 2, input: '汉字2' ]
// null
// ['1', index: 0, input: '1' ]


// 如何创建正则？

// 1）字面量方式
// var reg = /\d/;



// 2)实例创建方式
// var reg = new RegExp("");


// 正则的两种创建方式是有区别的


// 3) 如何学习正则？
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
console.dir(RegExp.prototype);




