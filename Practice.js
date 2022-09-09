


//          \\ MAP FUNCTION \\


// const arr = [5, 1, 3, 2, 6];

// const output = arr.map((elm) => elm.toString(3));
// console.log(output);


//                   OR


// const arr = [
//     { fName: "E", lName: "Ka", age: 24 },
//     { fName: "D", lName: "Ks", age: 23 },
//     { fName: "C", lName: "Kd", age: 22 },
//     { fName: "B", lName: "Kf", age: 21 },
// ];

// const fulName = arr.map((elm) => {
//     return elm.fName + " " + elm.age;
// });
// console.log(fulName);

//                  OR


// const studentData = [
//     { id: 1, name: "Sahil", degree: "BSC" },
//     { id: 2, name: "Arun", degree: "BA" },
//     { id: 3, name: "Priya", degree: "Null" }
// ]
// const result = studentData.map((elm) => {
//     return ` Hey my Name is ${elm.name}.My highest Degree is ${elm.degree}`
// // return elm.id > 2

// }).filter((elm)=>{
//     elm.id > 3
// })
// console.log(result);

//           \\ FILTER FUNCTION \\



// const arr = [5, 1, 3, 2, 6];

// const output = arr.filter(elm => elm > 5);
// console.log(output);


//                   OR

// const arr = [
//     { fName: "SAHIL", lName: "SAMBYAL", age: 24 },
//     { fName: "DINESH", lName: "GULERIA", age: 33 },
//     { fName: "RAPA", lName: "RAP", age: 55 },
//     { fName: "KAJAL", lName: "PATHANIA", age: 24 },
//     { fName: "PIPA", lName: "PATHA", age: 20 },
// ];

// const result = arr.filter((elm) => elm.age < 30).map((elm) => elm.lName);
// console.log(result);



//             \\ REDUCE Method \\





//                   OR


// const arr = [5, 1, 3, 2, 6];

// const output = arr.reduce((accu, elm) => {
//     if (elm > accu) {
//         accu = elm;
//     }
//     return accu;
// }, 0);

// console.log(output);


//                    OR


// const arr = [
//     { fName: "SAHIL", lName: "SAMBYAL", age: 24 },
//     { fName: "DINESH", lName: "GULERIA", age: 23 },
//     { fName: "RAPA", lName: "RAP", age: 22 },
//     { fName: "KAJAL", lName: "PATHANIA", age: 24 },
// ];

// let result = Object.entries(arr).forEach(([k, v]) => {
//   console.log(`key is ${k}  and value is ${v.fName} `);
// })


   //                   or



// const result = arr.reduce((accu, elm) => {
//   debugger
//     if (accu[elm.age]) {
//         accu[elm.age] = ++accu[elm.age];
//     } else {
//         accu[elm.age] = 1;
//     }
//     return accu;
// }, {});
// console.log(result);




//                      OR


// const arr = [
//     { fName: "SAHIL", lName: "SAMBYAL", age: 24 },
//     { fName: "DINESH", lName: "GULERIA", age: 33 },
//     { fName: "RAPA", lName: "RAP", age: 55 },
//     { fName: "KAJAL", lName: "PATHANIA", age: 24 },
//     { fName: "PIPA", lName: "PATHA", age: 20 },
// ];
// const result = arr.reduce((accu, elm) => {
//     if (elm.age < 30) {
//         accu.push(elm.fName,elm.lName);
//         // accu.push(elm.lName);
//     }
//     return accu;


// }, [])
// console.log(result);


//               FLATTEN ARRAY AND OBJECT

// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]]

// let result = arr.flat(3)

// console.log(result);


//             flat array


// const arr = [[1,2],[2],[3]]

// let result = []
// arr.forEach(function(elm){
//     result.push(...elm);
// });
// console.log(result);



//                      flat object   with JS Function
// const obj = {
//   name: "Sahil",
//   age: 24,
//   address: { flatNo: 32, city: "chennai" }
// }

// const newObj ={}
// const getFlatenObj = (obj) => {
  
//   Object.keys(obj).forEach(elm => {
//     if (typeof obj[elm] === "object") {
//           //obj ["name"] //Sahil
//             getFlatenObj(obj[elm])
//         } else {
//             newObj[elm] = obj[elm]
//         }
//     })
// }
// getFlatenObj(obj)
// console.log(newObj);

//                          RETURN MIN AND MAX VALUE IN ARRAY

// let sahil = [1, 325, 3, 45, 5, 7, 68, 64, 347, 79, 0];

//   const fun = (arr) => {
//   return{
//        Max:Math.max(...arr),
//        Min:Math.min(...arr)
//    }
//   }
// console.log(fun(sahil));

//                                    Other Solution

// let sahil = [1, 325, 3, 45, 5, 7, 68, 64, 347, 79, 0];
// function getMinMAx(arr) {
// debugger
//     const sortArr = arr.sort((a, b) => a - b)
//     return {
//         min: sortArr[0],
//         max: sortArr[sortArr.length - 1]
//     }
// }
// console.log(getMinMAx(sahil));


//                                   Another Solution



// let sahil = [1, 325, 3, 45, 5, 7, 68, 64, 347, 79, 0];

// function getMinMax(arr) {
//     let min = arr[0]
//     let max = arr[0]
//     for (let current of arr) {
//         if (current > max) {
//             max = current;
//         }
//         if (current < min) {
//             min = current
//         }
//     }
//     return {
//         max, min
//     }

// }
// console.log(getMinMax(sahil));


//                 OBJECT QUESTIONS

// const property = "firstName";
// const name = "Thakur";

// const user = {
//     [property]: name
// }

// console.log(user.firstName);

//  NEED VALUE

// const user = {
//     name: "Sahil Sambyal",
//     age: 22,
//     isTotallyAwesome: true
// };
// for (isko in user) {
//     console.log(user[isko]);
// }

//                    SIMPLE OBJECT


// const obj = {
//     a: "one",
//     b: "two",
//     a: "three"
// };

// console.log(obj);
//


//                    MULTIPLY NUMBER WITH 2

// const nums = {
//     a: 100,
//     b: 200,
//     title: "My nums"
// };

// function multiplyByTwo(obj) {
//     for (isko in obj) {
//         if (typeof obj[isko] === "number") {
//             obj[isko] = obj[isko] * 2;
//         }
//     }

//     console.log(obj);

// };
// multiplyByTwo(nums);

//


// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };
// debugger
// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// console.log(a);

//           What's JSON,stringify and JSON.parse?

//        CONVERT {OBJECT TO STRING} WITH "STRINGIFY" AND {STRING TO OBJECT} WITH "PARSE"


// const user = {
//     name: "sahil",
//     age: 23
// };
// //for Object to String
// const str = JSON.stringify(user)
// // //for convert string to Object
// // console.log(JSON.parse(str));


// //for show use of JSON
// localStorage.setItem("test", user)
// console.log(localStorage.getItem("test"));


//               SPREAD OPERATOR


// const user = {
//     name: "sahil",
//     age: 21
// }
// const admin = {
//     admin: true,
//     ...user
// }

// const result = user.age

// console.log(admin);

//

// const setting = {
//     name: "sahil",
//     age: 21,
//     height: 5.6,
//     level: 20
// }
// const data = JSON.stringify(setting,  ["level", "height"]);

// console.log(data);

//

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     parameter: () => 2 * Math.PI * this.radius,
// };
// console.log(shape.diameter());
// console.log(shape.parameter());

//arrow function = reference to window object

//normal function= when we call this function its gonna reference to this main question(shape)


//                 OBJECT DESTRUCTURINGS

// let user = {
//     name: 'syu',
//     age: 21,
//     fullname: {
//         first: "Sahil",
//         last: "Sambyal"
//     }
// };

// let { fullname: { first, last } } = user

// console.log(first, last);

//           Puzzling questions in Spread Operator

// function getItems(fL, favoriteFruit, ...args) {
//     return [...fL, ...args, favoriteFruit]
// }

// console.log(getItems(["banana", "apple"], "pear", "orange"));

//           OBJECT REFERENCING


// let c = {
//     greeting: "HEY"
// }
// let d;
// d = c;

// c.greeting ="Hello";

// console.log(d.greeting);

//        COMPARING SAME OBJECT

console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });

// //because both are independent both have different memory space

//

// let person = {
//     name: "sahil"
// }
// const members = [person]
// person = null;
// console.log(members);

// const value = {
//     number: 10
// }

// const multiplyByTwo = (x = { ...value }) => {
//     debugger
//     console.log((x.number *= 2));
// }
// multiplyByTwo()
// multiplyByTwo()
// multiplyByTwo(value)
// multiplyByTwo(value)


// function changeAge(person) {
//     debugger
//     person.age = 25;
//     person = {
//         name: "john",
//         age: 20,
//     };
//     return person;
// }
// const personObj1 = {
//     name: "Sahil",
//     age: 21
// }
// const personObj2 = changeAge(personObj1)
// console.log(personObj1);
// console.log(personObj2);


//                WHAT IS SHALLOW COPY AND DEEP COPY


//                    CLONE ARRAY

// let user = {
//     name: "Sahil",
//     age: 22
// };

// const objClone = Object.assign({}, user)
// // objClone.name = "Thakur"
// console.log(user, objClone);


//CLONE ARRAY WITH STRINGIFY METHOD

// let user = {
//     name: "Sahil",
//     age: 22
// };

// const objClone = JSON.parse(JSON.stringify(user))
// console.log(user, objClone);


// CLONE ARRAY WITH DESTRUCTURE METHOD

// let user = {
//     name: "Sahil",
//     age: 22
// };

// const objClone = { ...user };
// console.log(user, objClone);


//           FIND ODD AND EVEN NUMBER IN GIVEN ARRAY

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 45, 67, 89, 45, 2, 54, 76, 89]

// for (var i = 1; i <= arr.length; i++)
//     if (i % 2 !== 0) {
//         let odd = []
//         odd.push(i)
//         console.log(odd);
//     }

//    Count the repeating Array Element

// let input = ['a', 'b', 'c', 'd', 'd', 'a', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a']
// function Count(arr) {

//     let counter = {};
//     arr.forEach(element => {
//         debugger
//         if (!counter[element]) {  // counter{a :"value"}
//             counter[element] = 1
//         } else {
//             counter[element] += 1
//         }
//     });
//     return counter
// }
// const result = Count(input)
// console.log(result);

//               ADD two Numbers

// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
// sum(1)(2)(3)

//              EQUALITY

console.log(400.4 === 200.2*2);
console.log(900.9 === 300.3*3);

// //because of 64-bit floating numbers this causes
// //precision err our computer is working in Base 2
// //but decimal is Base 10

//             SOLUTION

// console.log(900.9 === (300.3*10*3)/10);

//       Detect an Array

    // console.log(typeof {});

    // console.log(typeof []);

// // Method 1 to prove that [] is array

// console.log(Array.isArray([]));


//                  SETTIMEOUT

// function a() {
//     for (var i = 0; i < 3; i++) {
//       function inner(i) {
//         return setTimeout(function log() {
//           console.log(i);
//         }, i * 1000);
//       }
//       console.log(i);
//     }
// }
//   a();



//                    SORT MEthod

// let f = ['apples', 'watermelon', 'bannanas', 'cherries',]
// f.sort()

// console.log(f);



//              Table of nine


// for (let i = 1; i < 10; i++) {
//     var table = 9
//     console.log(`${table} * ${i} = ${table * i}`);
// }


  //                Reverse Array without changing original Value

// let arr = ['1','2','3']

// let result = arr.reverse()

// console.log(result);

// console.log(arr);




// let arr = ['1','2','3']

// let result = [...arr].reverse()


// console.log(result);

// console.log(arr);


// let arr = ['1', '2', '3']
// let resultArr = []
// for (let i = arr.length - 1; i >= 0; i--) {
//     resultArr.push(arr[i]);
// }
// console.log(resultArr);

// console.log(arr);



//                     FIND UNIQE DATA IN ARRAY

// let a = ['1', '1', '2', '3', '3', '1']


// let result = a.filter((elm, i, ar) => ar.indexOf(elm) === i)
// console.log(result);

//                  NOW EASY METHOD FIND UNIQE DATA IN ARRAY

// let a = new Set(['1', '1', '2', '3', '3', '1'])
// console.log(a);


//                     CLOUSERS

// function Hey() {

//     var myVariable = "Im Variable";

//     function You() {

//         console.log(myVariable);

//     }
//     return You()
// }
// Hey();


//         FIRST CLASS FUNCTION

// function main(num) {
//     return num * num;
// }
// function display(fn) {
//     console.log(fn(5));
// }
// display(main)

//                   IMMEDIATELY INVOKED FUNCTION


// (function main(num) {
//     console.log(num * num);
// })(5)

//      ANOTHER clouser example

// (function (x) {
//     return (function (y) {
//         console.log(x);
//     })(5)
// })(1)


// const arr = [
//     { fName: "SAHIL", lName: "SAMBYAL", age: 24 },
//     { fName: "DINESH", lName: "GULERIA", age: 33 },
//     { fName: "RAPA", lName: "RAP", age: 55 },
//     { fName: "KAJAL", lName: "PATHANIA", age: 24 },
//     { fName: "PIPA", lName: "PATHA", age: 20 },
// ];

// const result1 = arr.filter((elm) => elm.age < 30).map((elm) => elm.fName);
// console.log(result1);

// let arr = [1,2,3]
// function simpleArraySum(ar) {
//     debugger
//     // Write your code here
//     let result = ar.reduce((accu, elm) => accu + elm)

//     return result
// }
// console.log(simpleArraySum(arr));

   //        FOREACH

// const arr = ['1', '2', '22', '222', '99'];

// let result = arr.forEach((elm, ind, arr) => {
//        let x = arr[ind] + 100
//        console.log(x);
// })



// const groceryList = [
//     { item: "Apples", price: 25, category: "fruits" },
//     { item: "Mangoes", price: 35, category: "fruits" },
//     { item: "Tomatoes", price: 15, category: "vege" },
//     { item: "Milk", price: 20, category: "misc" },
//     { item: "Bread", price: 12, category: "misc" },
//     { item: "Eggs", price: 18, category: "misc" },
// ];

// let result = groceryList.filter((elm)=>elm.price > 30)
// console.log(result);



// const company = {
//     name: ["Google","FaceBook"],
//     locations: ["Singapore", "India", "Germany"],
// };


// const {name :[hlo] , locations: [,hi] } = company;


// console.log(hi ,hlo);


// const users = [
//     ["Dipesh", "Malvia",50],
//     ["Nikesh", "Gadekar",50],
//     ["Daniel", "Mether",50],
// ];


// const userObj = users.map(([firstName, lastName,age]) => {
//     return { firstName, lastName,age }
// })
// console.log(userObj);



//                  MULTIPLY IN OBJECT

// const num = {
//     a: 121,
//     b: 243,
//     title: "My nums",
//      c : 50
// };

// function multiply(obj){

//     for(sahil in obj){
// if(typeof obj[sahil] === "number"){
//     obj[sahil]*=obj[sahil]
// }

// }
// }

// multiply(num)
// console.log(num);






// function multiply(obj) {
//     for (key in obj){
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// }

// multiply(num)
// console.log(num);







//      SOlve


// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);




//      solve

// var c = ['s', 'e', 'h', 'g', 'f']
// delete c[2]
// console.log(c.length);
// console.log(c);

//  solve

// const c = ['k', 'f']

// let x = c.length = 0
// console.log(x);
// console.log(c);
// console.log(c[0]);


// for (var i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 100);
// }

// console.log("hey");

// setTimeout(() => {
    
//     console.log("how r u ");
// },0)
// Promise.resolve().then(() => {
//     console.log("Bye");
// })
// console.log("see you");

// const str = "sahil"
// str[0] = "h"

// console.log(str.length);


// function x() {
//     for (var i = 0; i <= 10; i++) {
//         function hi(x) {
//             setTimeout(() => {
//                 console.log(x);
//             }, i * 1000);
//         }
//         hi(i)
//     }
//     console.log("Shuru hoja");
// }
// x();


//        SETTIMEOUT WITH LET

// for (var i = 0; i <= 10; i++) {
//     function hi(elm) {

//         setTimeout(() => {

//             console.log(elm);

//         }, elm * 1000);

//     }

//     hi(i);
// }

// HOISTING

// console.log(a)
// var a = 20
// console.log(a)



             



// const a = [1, 9, 2, 3, 8];
 
// console.log(a.sort().reverse());





//                  INTERVIEW QUESTION



// let result = Object.assign({}, "Sahil Thakur")


// console.log(result);








