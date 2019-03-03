
var reg = /\d+?/g
var str = "yyccQQu2015huiwan2018"
console.log(reg.lastIndex)//0
var ary = reg.exec(str)
console.log(ary)//[ '2', index: 7, input: 'yyccQQu2015huiwan2018' ]
console.log(reg.lastIndex) // 8
ary = reg.exec(str)
console.log(ary)//[ '0', index: 8, input: 'yyccQQu2015huiwan2018' ]

var reg2 = /\d+?/g;
var str2 = "yyccQQu123yyccQQu45678"
var res2 = reg2.exec(str2), ary2 = []
while(res2){
    ary2.push(res2[0])
    res2 = reg2.exec(str2)
}
console.log(ary2, "ary2")//[ '1', '2', '3', '4', '5', '6', '7', '8' ] 'ary2'


var reg3 = /\d+?/g;
var str3 = "yyccQQu2018huiwan2019"
var ary3 = str3.match(reg3);
console.log(ary3, 'ary3')//[ '2', '0', '1', '8', '2', '0', '1', '9' ] 'ary3'

// match 简单实现 ，原型上的方法更复杂，更全
// String.prototype.match = function(reg){
//     //this -> str 我们想操作的哪个字符串--> 原型上的方法，里面的this都是我们要操作的当前实例
//     var ary =[],res=reg.exec(this);
//     while(res){
//         ary.push(res[0]);
//         res = reg.exec(this);
//     }
//     return ary;
// };
// str.match(reg)

// 分组捕获
    // 1
    var str4 = "my name is {0}, my age is {1}, i come from {2}, i love {3}~~";
    var ary4 = ["译文",28,"四川","js 正则"];
    var reg4 = /{(.)}/g
    str4 = str4.replace(reg4, function() {
        console.log(arguments, "arguments str4",RegExp.$1);
        //return 返回的是替换的内容
        // arguments[1]返回的是匹配的内容
        return ary4[arguments[1]];
    });
    console.log(str4,'str4')
    // 2
    var str5 = "yyccQQuhuixuexiyyccQQuhuiwan"
    console.log(str5.replace(/yyccQQu/g,"xyd"),"str5")

var str6 = "rencai01rencai02"
str6 = str6.replace(/(ren)(cai)/g,function(){
    console.dir(arguments,'str6')
    return "xyd"
})
// { '0': 'rencai',
//   '1': 'ren',
//   '2': 'cai',
//   '3': 8,
//   '4': 'rencai01rencai02' 
// }
console.log(str6)

// 将小写的数字替换成大写的中文数字
var str7 = "你们真的是日本人啊：688";
var ary7 = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];

str7 = str7.replace(/(\d+?)/g, function() {
    console.log(arguments, '1234', RegExp.$1, RegExp.$2, "regexp");//{ '0': '6', '1': '6', '2': 10, '3': '你们真的是日本人啊：688' } '1234' '8' '' 'regexp'
    return ary7[arguments[1]];
});
console.log(str7,'str7')

// 获取一个字符串中出现次数最多的字符，并且获取出现的次数
// 1)判断每一个字符出现的次数
var str8 = "yyccQQuyyccQQuzhendenengwan"
var obj = {}
str8.replace(/[a-z]/gi,function() { //全局忽略大小写匹配替换
    var val = arguments[0];
    obj[val] >= 1 ? obj[val] +=1 : obj[val] = 1;
})
// 2)获取最多出现的次数
var maxNum = 0;
for (var key in obj) {
    obj[key] > maxNum ? maxNum = obj[key]: null;
}
// 3）把所有符合出现maxNum次数的都获取到
var ary8 =[]
for(var key in obj) {
    obj[key] === maxNum ? ary.push(key) : null;
}





var str9 = "http://abc.sports.qq.com/kbsweb/game.htm?mid=10000&cid=1467086&app=1.0"

var reg9 = /([^?=&]+)=([^?=&]+)/g;
var obj9 = {}
str9.replace(reg9, function(){
    obj9[arguments[1]] = arguments[2];
})
console.log(str9, obj9, "obj9");// { mid: '10000', cid: '1467086', app: '1.0' } obj9


// 将"2015-9-22 13:10:0" ---> "2015年09月22日 13时10分00秒"
    // 1）
    var str10 = "2015-9-22 13:10:0 ";
    var ary10 = ["年", "月", "日", "时", "分", "秒"];
    var index10 = -1;

    str10 = str10.replace(/[-:\s]/g, function() {
    console.log(arguments[0], "str10");
    console.log(arguments,'args')
    index10++;
    return ary10[index10];
    });
    console.log(str10, "str10");
    //2）
    var resStr = "{0}年{1}月{2}日 {3}时{4}分{5}秒";
    var arr11 = [];
    str10.replace(/\d+/g,function(){
        console.log(arguments,'argument')
        // [0] 匹配值 [1]index [2]input
        arr11.push(arguments[0])
    })
    resStr = resStr.replace(/{(.)}/g, function() {
        console.log(arguments, 12345);
        //在这里 arguments[1] 为下标值
        //{ '0': '{2}', '1': '2', '2': 8, '3': '{0}年{1}月{2}日 {3}时{4}分{5}秒' } 12345
        return arr11[arguments[1]];
    });
    console.log(resStr, "resStr", arr11);
    //3)                                                     这里的空格+,指的是中间可以有多个空格
var strs = "2015-9-22 13:10:0", regs = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})$/;
var arys = [];
strs = strs.replace(regs,function(){
    console.log(arguments,"-----")
    arys = [].slice.call(arguments) //每次拷贝一份 arguments
    arys = arys.slice(1,7)
    console.log(arys,'arys')
})
console.log(strs,'strs')//[ '2015', '9', '22', '13', '10', '0' ] 'arys'

var resStr2 = "{0}年{1}月{2}日 {3}时{4}分{5}秒";
var arys2 = ['2015', '9', '22', '13', '10', '0']
var regs2 = /{(\d+)}/g
resStr2 = resStr2.replace(regs2, function(){
    var num = arguments[1], val = arys2[num];
    console.log(arguments, "---", val);
    val.length<2?val = "0"+val:void 0;
    return val;
})
console.log(resStr2, "resStr2");








// 把一个字符串中国呢所有的单词的首字母大写 
// "ni men zhen de shi yi ge ri ben ren" -> "Ni Men ...."













