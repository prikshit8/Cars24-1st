// function closure(){
//   let count = 0;
//   return function test(){
//     count++;
//     return count;
//   }
// }

// const closuredTest = closure();

// console.log(closuredTest());
// console.log(closuredTest());
// console.log(closuredTest());

// function sum(a, b, c){
//   return a + b + c;
// }

// function curry(fn){
//   return function curriedFn(...params){
//     if(params.length >= fn.length){
//       return fn(...params);
//     }
//     else{
//       return function(...next){
//         return curriedFn(...params,...next);
//       }
//     }
//   }
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1, 2, 3));   // 6, still callable normally
// console.log(curriedSum(1)(2,3));    // 6, currying of 1st arg
// console.log(curriedSum(1)(2)(3));   // 6, full currying

// console.log('start');

// setTimeout(()=>{
//   console.log('mid');
// },0);

// for(let i=0;i<100000;i++){
//   console.log('thread blocking code');
// }
// console.log('end');

// async function async1() {
//   console.log("async1 start");
//   const data = await async2();
//   console.log(data);
//   console.log("async1 end");
// }

// async function async2() {
//   console.log("async2");
//   return "async2 completed";
// }

// console.log("script start");

// setTimeout(function () {
//   console.log("setTimeout");
// }, 0);

// async1();

// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });

// console.log("script end");

// 1 function is inside microtask queue -> promise2
// there is 1 function waiting in call back queue -> setTimeout
// 1 async function popped off from callstack -> async2 "async1 end"

// script start
// async1 start
// promise1
// script end
// async2
// async1 end
// promise2
// setTimeout

// function test(){
//   console.log(this);
// }

// let obj = {
//   name: 'prikshit',
//   myName(city,birthPlace){
//     console.log(this.name + ' i live in ' + city + ' my birthplace is '+ birthPlace);
//   }
// }

// let obj2 = {
//   name:'sohail',
// }

// // obj.myName.call(obj2,'blr');
// // obj.myName.apply(obj2,['blr']);

// const bindedFn = obj.myName.bind(obj2);

// bindedFn('blr','delhi');

// obj.myName(); // this keyword here is obj
