/*{
    //大括号之间就是块级作用域
    //let num=1;//局部变量
}
//console.log(num);
//计算1---100之间所有的整数的和，使用let声明变量
var sum=0;
for(let i=1;i<=100;i++){
    sum+=i;

}
console.log(sum);
(1)块级作用域
使用let关键字声明变量，阻止变量提升，添加到块级作用域中，成为局部变量。
块级作用域：{}、if、else、while、for...
(2)参数增强
给参数设置默认值

(3)箭头函数
回调函数的另一种写法，但是不等价于匿名函数


var arr=[2,85,41,62,26,39];
console.log(arr.sort((a,b)=>a-b));
//打印：‘今天是2019年6月20日 星期四’.
var year=2019;
var month=6;
var date=20;
var day='星期四';
var hour=15;

console.log(`
   日期时间
   
   `);
console.log(`
    今天是${year}年${month+1}月${date}日
    ${day} ${(hour>12 && hour<18) ? '夕阳' : '傍晚'}
    `);
var person={
    name:'李宁',
    sex:1,
    age:'55'
}
console.log(`
    大家好，我是${person.name}，性别${person.sex===1 ? '男' : '女'}，年龄${person.age}岁了
    
    。
`)
var r=1;
//console.log(r);
console.log(global.r);
console.log(window.r);
function fn(){
    return 3;       //nodejs：交互模式下，
}
//console.log(fn());
console.log(global.fn());
console.log(1);
console.info(2);
console.warn(3);
console.error(4);*/

/*console.time('for');
for(i=1,s=0;i<1000000;i++){
    s+=i;
}
console.timeEnd('for');*/

console.time('while');
let i=0;
let sum=0;
while(i<=1000000){
    sum+=i;
    i++;
}
console.timeEnd('while');

console.time('dowhile');
i=1;
sum=0;
do{
    sum+=i;
    i++;
}while(i<=1000000);
console.timeEnd('dowhile');

var buf=Buffer.alloc(8,'fdgshgsh');
console.log(buf);
console.log(buf.toString());
console.log(String(buf));

var num = 16;
console.log(num.toString(2));












