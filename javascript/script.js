// var a=10;
// // let b=20;
// const c=30;

// var a;
// a=10;

// console.log(a);
// console.log(b);
// console.log(c);

// var num=34;
// var str="hello";
// var undefined;
// var Null=null;
// var boolean=true;
// console.log(typeof num);
// console.log(typeof str);
// console.log(typeof undefined);
// console.log(typeof Null);
// console.log(typeof boolean);

// var bigInt=123n;
// var symbol=Symbol("li");

// console.log(typeof bigInt);
// console.log(typeof symbol);

// //var arr=[10,20,30,40];
// console.log(typeof arr);
// var obj={
// name:"ramya",
// dept:["CT"]
// }
// //Arithmetic operators(+,-,*,/,%,**)
// var a=10;
// var b="ramya";

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// //logical operators(&&,||,!)
// var a=true;
// var b=false;


// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

// //logical operators(&&,||,!)
// //                &&    ||
// //true   true    true  true
// //true   false   false true
// //false  true    false true
// //false  false   false false

// var a=true;

// console.log(a&&b);
// console.log(a||b);
// console.log(!a);

// relational operators(>,<,>=,<=,==,===,!=,!==)

// a=10;
// b=20;

// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);

//assignment operators(=,+=,-=,*=,/=,%=,**=)

// a=10;
// b="20";

// a+=b;//30
// console.log(a);
// a-=b;
// console.log(a);

// //unary operators(++,--)

// var a=10;//11

// console.log(a--);
// console.log(--a);

// a=1;
// b=1;
// c=0;

// var result = a++ + --b + ++c - ++a + ++b + c++
//             +b++ +a;
// console.log(result);
//conditonal statements
// var a= 10;
// var b= 20;
// //if condition
// if(true){
//     //template literals
//     console.log('${a}+${b}=${a+b}')
// }

// if(true){
//     a=10;
//     console.log(a);
// }


// var a;//hoisting
// console.log(a);
// var a= 10;


// var a = 10;
// const b = 20;
// if (true) {
//     console.log(a);
// // let const b = 30;
//     console.log(b);
// }
// console.log(a);
// console.log(b);

// var a=10;
// if(a%2==0){
//     console.log('${a} is even');
// }
// else{
//     console.log('${a} is odd');
// }

// var mark=90;

// if(mark>=90){
//     console.log("O grade");
// }

// else if (mark>=70){
//     console.log("A grade");
// }
// else if(mark>=35)
// {
//     console.log("pass");
// }
// else {
//     console.log("fail");
// }

// var a=10;
// //condition ? true statement : false statement
// var result=a%2===0?"even": "odd";
// console.log(result)

// mark = 30;
// var result = (mark >= 90) ? "O grade" :
//     (mark >= 70) ? "A grade" :
//         (mark >= 35) ? "pass" :
//             "fail";
// console.log(result);

// var day = 2;
// switch (day) {
//     case 1: {
//         console.log("sunday");
//         break;
//     }
//     case 2:{
//         console.log("monday");
//         break;
//     }
//     case 3:{
//         console.log("tuesday");
//         break;
//     }
//     case 4:{
//         console.log("wednesday");
//         break;
//     }
//     case 5:{
//         console.log("thursday");
//         break;
//     }
//     case 6:{
//         console.log("friday");
//         break;
//     }
//     case 7:{
//         console.log("saturday");
//         break;
//     }
//     default:{
//         console.log("invalid input");
//     }

// }

// for(var i=1;i<=10;i++){
//     console.log(i);
// }

// var val=10246;
// var count=0;
// while(val>0){

//     count++;
//     val=Math.floor(val/10);
// }
// console.log(count);

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// function add(a=5,b=6){
//     console.log(a+b);
// }

// add();

// var demo= (a=5,b=6)=>{
//     console.log(a+b);
// }
// demo(10,20);
// demo();
// demo(10);

// var arr=[10,20,30];
// var arr2=[...arr,40,50];
// console.log(arr);
// console.log(arr2);

