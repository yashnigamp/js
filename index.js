// console.log("Hello world!");

// let myArray= [1,2,3,4,5,6];
// let obj = new Set(myArray);

// obj.delete(3);
// var obj1  = {name: "food"}

// obj.add(obj1);

// console.log(obj);

// let map = new Map();
// map.set('name', 'food');

// for( let [key,value] of map){
//     console.log(key,value);
// }
//console.log(map);

// let weakSet = new WeakSet();

// weakSet.add({name: 'food'});
// console.log(weakSet);
// console.log(weakSet.has("name"))

// let weakMap = new WeakMap();
// let ob2 = {n: "2"}
// weakMap.set(ob2,12);

// console.log(weakMap);

// var a = 5;
// getName();

// function getName() {
//     console.log("Yash");
// }

// var div1 = document.querySelector("#hint");
// var p = document.querySelector(".abc");
// var btn = document.querySelector("#btn");

// p.addEventListener("click",function(e){
//     console.log("Click p");
// },true)
// div1.addEventListener("click",function(e){
//     console.log("Click div");
// },true)
// btn.addEventListener("click",function(e){
//     console.log("Click Btn");
// })

// function add (a){
//     return function(b){
//         if(b) return add(a+b);
//         return a;
//     }
// }

// console.log(add(4)(5)());

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(add(4)(5)(6));

// function spreadAdd(a){
//     return function(b){
//         if(b) return spreadAdd(a+b);
//         return a;
//     }
// }

// console.log(spreadAdd(4)(5)(6));

// function add() {
//   console.log("add Called ");
// }

// function debounce(call, time) {
//   let timer;
//   return function(...args){
//     if(timer) clearTimeout(timer);
//     timer=setTimeout(() => {
//         call();
//     }, time);
// }
// }

// const betterFunction = debounce(add, 1000);

// function* simpleGenerator(){
//     let x=100;
//     yield "First Step";

//     yield x;

//     let y="Last Step";
//     yield y;

//     console.warn("Generator");
// }

// let sg = simpleGenerator();
// console.log("Generator",sg.next());
// console.log("Generator",sg.next());
// console.log("Generator",sg.next());
// console.log("Generator",sg.next());

// function* uniqueIdGenerator(){
//     yield Math.random();
// }

// let ug = uniqueIdGenerator();
// console.log(ug.next());
// console.log(ug.next());
// console.log(ug.next());
// console.log(ug.next());
// console.log(ug.next());
// console.log(ug.next());
// console.log(ug.next());

// const basicUseCases = {
//     getCurrentAge : function(){
//         return new Date().getFullYear() - this.birthDate
//     },
//     getFullName: function(){
//         return this.fn+ " " + this.ln;
//     }
// }

// const teacher = {
//     fn: "Vinod",
//     ln: "Srivastava",
//     birthDate: 1980
// }

// const student = {
//     fn: "Yash",
//     ln: "Nigam",
//     birthDate: 1998
// }
// teacher.__proto__ = basicUseCases;
// student.__proto__ = basicUseCases;

// console.log(teacher.getCurrentAge());
// console.log(student.getCurrentAge());

// String.prototype.myname = "Hello World ! ";

// String.prototype.yash = function(){
//     return "Yash is Champion";
// }

// class BankAccount {
//     name = "Yash ";
//     #pin = "12331241";

//     getPin = function(){
//         return this.#pin;
//     }
// }

// var a = new BankAccount();
// console.log(a.getPin());

// var arr = [1,2,3,5,6,21,432,341,123];

// console.log(arr);

// let x = 1;

// x = (x+=34,x);

// console.log(x)

let data = 10;

Number.prototype.customMul = function(x) {
    console.log("🚀 ~ file: index.js:186 ~ x:", x)
    return x(this)
}

let d = data.customMul(function(x){
    return x*10;
})
console.log(d);
