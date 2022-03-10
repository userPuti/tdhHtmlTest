// function test1() {
//     alert("hello");
// }

// function input() {
//     let x = document.getElementById("inputText").value;
//     let y = document.getElementsByName("inputText").values;
//     alert(x);
//     alert(y);
// }

// let user = {
//     name : "Jonn"
// };


// let admin = user;

// admin.name = 'Pete';

// alert(user.name);

// let a = {};
// let b = a;

// alert(a == b);
// alert(a === b);


// let a = {}
// let b=  {}
// alert(a == b);


// let user = {
//     name :"John",
//     age:"30"
// };

// let clone = {};

// for(let key in user){
//     clone[key] = user[key];
// }

// clone.name="Pete";

// alert(user.name);

// for(let key in clone) {
//     alert(key);
//     alert(clone[key]);
// }

// let user = {
//     name: "John"
// };

// let per1 = {
//     canView: true
// };
// let per2 = {
//     canEdit: true
// };

// Object.assign(user, per1, per2);

// for (let key in user) {
//     alert(key);
// }

// 如果被拷贝的属性的属性名已经存在，那么它会被覆盖：
// let user = {
//     name: "John"
// };

// Object.assign(user, {
//     name: "Pete"
// });

// alert(user.name);

// let user = {
//     name: "John",
//     age: "30",
// };

// let clone = Object.assign({}, user);

// let user = {
//     name: "John",
//     sizes: {
//         height: 182,
//         width: 50
//     }
// };

// let clone = Object.assign({},user);

// alert(user.sizes == clone.sizes);

// user.sizes.height++;
// alert(user.sizes.height);
// alert(clone.sizes.height);

// let user = {
//     name: "John",
//     age: 30,
// };

// // user.sayHi = function() {
// //     alert("Hello!");
// // };

// function sayHi() {
//     alert("Hello!");
// }

// user.sayHi = sayHi;

// user.sayHi();

// let user = {
//     name : "John",
//     age : 30,

//     sayHi() {
//         alert(this.name);
//     }
// };

// user.sayHi();

// let user = {
//     name: "John",
//     age: 30,
// };

// alert(user['name']);
// alert(user.age);
// user.name = 'Pete';
// alert(user["name"]);

// let user = {
//     firstName: "Ilya",
//     syaHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };

// user.syaHi();

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
// }

// let user = new User("Jack");
// alert(user.name);
// alert(user.isAdmin);

// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert(id1);
// alert(id1 == id2);

// let user = {
//     name: "John"
// };

// let id = Symbol("id");

// user[id] = 1;
// alert(user[id]);

// let id = Symbol("id");

// let user = {
//     name: "John",
//     [id]: 1234
// };

// for (let key in user) alert(key);

// alert("direct: " + user[id]);

// let range = {
//     from: 1,
//     to: 5,
// };

// range[Symbol.iterator] = function () {
//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return {
//                     done: false,
//                     value: this.current++
//                 };
//             } else {
//                 return {
//                     done: true
//                 };
//             }
//         }
//     };
// };

// for (let num of range) {
//     alert(num);
// }

// let str = "Hello";

// let iterator = str[Symbol.iterator]();

// while (true) {
//     let result = iterator.next();
//     if (result.done) break;
//     alert(result.value);
// }

// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };

// // for (let item of arrayLike) {}
// let arr = Array.from(arrayLike);
// alert(arr.pop());

// for (let item of arrayLike) {
//     alert(item);
// }

// let timer = document.getElementById('time');
// console.log(timer);
// console.log(typeof timer);
// console.dir(timer);

// let box = document.querySelector('.box');
// console.log(box);

// let boxs = document.querySelectorAll('.box');
// console.log(boxs);

// let bodyEle = document.body;
// console.log(bodyEle);

// let htmlEle = document.documentElement;
// console.log(htmlEle);

// let btn = document.getElementById('btn');

// btn.onclick = function () {
//     alert('dmji');
// }

// let div = document.getElementById('div');

// div.onclick = () => {
//     console.log('我被选中了');
// }

// let div = document.querySelector('#div');

// div.onclick = () => {
//     div.innerText = getDate();
// }

// function getDate() {
//     let date = new Date();
//     date.getFullYear();
//     date.getMonth();
//     console.log(date.getDay());
//     return date;
// }

// let img = document.querySelector('img');
// let btn1 = document.getElementById('img1');
// let btn2 = document.getElementById('img2');

// btn1.onclick = () => {
//     img.src = "images/1.jpg";
//     img.title = 'image1';
// }

// btn2.onclick = () => {
//     img.src = "images/2.jpg";
//     img.title = 'image2';
// }

// let btn = document.getElementById('btn');

// btn.onclick = function() {
//     let ipt = document.querySelector('input');
//     ipt.value = '被点击了';
//     // btn.disabled = true;
//     this.disabled = true;
// }

$(function () {
    alert(11);
    $('div').hide();
})

