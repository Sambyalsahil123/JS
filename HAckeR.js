//                      1
  //     Compare the Triplets ALICE AND BOB


// let a = [1, 2, 3]
// let b = [3, 2, 1]

// function compareTriplets(x, y) {
//     // Write your code here
// debugger
//     let len = x.length;

//     let scores = [0, 0]

//     for (let i = 0; i < len; i++) {

//         if (x[i] > y[i]) {
//             scores[0] = scores[0] + 1
//         }

//         else if (y[i] > x[i]) {
//             scores[1] = scores[1] + 1
//         }
//     }
//     return scores





// }
// console.log(compareTriplets(a, b));


//                   2
          //  ANOTHER SOLUTION


// x = [1, 2, 3]
// y = [3, 2, 1]

// function compareTriplets(a, b) {
//     debugger
//     // Write your code here
//     var alice = (a[0] > b[0]) + (a[1] > b[1]) + (a[2] > b[2]);
//     var bob = (a[0] < b[0]) + (a[1] < b[1]) + (a[2] < b[2]);
//     return [alice, bob];
// }


// console.log(compareTriplets(x, y));

//                           3
//                      VERY BIG SUM


// let ar = [1000000001, 1000000002, 1000000003 ,1000000004 ,1000000005]

// function aVeyBigSum(ar){
// let result = 0
// for(let i = 0; i<ar.length; i++){
//     result += ar[i]
// }
// return result
// }
// console.log(aVeyBigSum(ar));





//                                4  
//                       DIAGONAL DIFFERENCE

// const a = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
// function diagonalDifference(arr) {
//  debugger
//     let firstDiagonal = 0;
//     let secondDiagonal = 0;
//     for (let i = 0; i < arr.len; i++) {
//         firstDiagonal += arr[i][i];
//         secondDiagonal += a[i][arr.len - 1 - i]
//     }
//     const finalResult = Math.abs(firstDiagonal - secondDiagonal);
//     console.log(finalResult);
// }
// diagonalDifference(a);

//                                    5
//                   //         STAIR WITH CODE

// let f = 4;
// function staircase(n) {
//   debugger

//   for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(n - i) + "#".repeat(i))
//   }
// }
// staircase(f)

//                                    6
//                               MAX  MIN SUM


// //OUR LOGIC:

// //Given arr = [1, 2, 3, 4, 5]
// //Then maxSum = 2 + 3 + 4 + 5 = 14
// //minSum = 1 + 2 + 3 + 4 = 10
// //MIN ELEMENT = 1
// //MAX ELEMENT = 5
// //MAIN SUM = 1 + 2 + 3 + 4 + 5  = 15
// //MaxSum = 15 - 1 = 14
// //MinSum = 15 - 5 = 10

//      SOLVE

// let arr = [1, 2, 3, 4, 5]

// function minMAxSum(arr) {
//     debugger
//     const maxNum = Math.max(...arr);
//     const minNum = Math.min(...arr);

//     const mainSum = arr.reduce((accu, elm) => accu + elm)
//     const maxSum = mainSum - minNum;
//     const minSum = mainSum - maxNum;
//     console.log(maxSum, minSum);
// }
// minMAxSum(arr);

//                              7            
                       //  OTHER SOLUTION


// let arr = [1, 2, 3, 4, 5]
// function miniMaxSum(arr) {
// debugger
//     var arrClone1 = arr.slice()
//     var arrClone2 = arr.slice()

//     var arrMinor = arrClone1.sort(function(a, b){return a - b;})
//     arrMinor.pop()

//     var arrMajor = arrClone2.sort(function(a, b){return b - a;})
//     arrMajor.pop()

//     function getSum(a, b) {
//       return a + b;
//     }

//     var result1 = arrMinor.reduce(getSum)
//     var result2 = arrMajor.reduce(getSum)

//     console.log(`${result1} ${result2}`)
//   }
//   miniMaxSum(arr)

//                              8

//                        BIRTHDAY CAKE

// let arr = [4, 4, 1, 3]

// function birthdayCakeCandles(arr) {
//   debugger
//   let maxH = 0;
//   let candles = 0;

//   for (let i = 0; i < arr.len; i++) {
//     if (maxH < arr[i]) {
//       maxH = arr[i];
//     }
//   }


//   for (let i = 0; i < arr.len; i++) {
//     if (maxH == arr[i]) {
//       candles++;
//     }
//   }
//   return candles;

// }
// console.log(birthdayCakeCandles(arr));


//                                  9

//                   CONVERT TIME FORMAT  12 TO 24 HOURS

// let result = "07:05:45PM";
// function timeConversion(s) {
// debugger
//     let late = s.includes("PM");
//     if (!late) {
//         s = s.split("AM")
//         s = s[0].split(":")
//         if (s[0] == "12") s[0] = "00"
//         return s.join(":")
//     } else {
//         s = s.split("PM")
//         s = s[0].split(":")
//         if (s[0] != "12") s[0] = (parseInt(s[0]) + 12).toString()
//         return s.join(":")
//     }

// }
// console.log(timeConversion(result));


//                                  10
//                           Grading Students


// let g = [ 73, 67, 38, 33 ]
// function gradingStudents(grades) {
//     debugger
//     let result = []
//     for (let i = 0; i < grades.len; i++) {
//         if (grades[i] < 38) {
//             result.push(grades[i])
//         } else {
//             if ((grades[i] + 1) % 5 == 0) {
//                 result.push(grades[i] + 1)
//             } else if ((grades[i] + 2) % 5 == 0) {
//                 result.push(grades[i] + 2)
//             } else {
//                 result.push(grades[i])
//             }
//         }
//     } return result;

// }
// console.log(gradingStudents(g));

//                                   11

//                            Apple and Orange
// let s = 7
// let t = 11
// let a = 5
// let b = 15
// let apples = [-2, 2, 1]
// let oranges = [5, -6]


// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//     debugger
//     const appleRes = apples.map(elm => elm + a).filter(elm => elm >= s && elm <= t).len
//     const orangeRes = oranges.map(elm => elm + b).filter(elm => elm >= s && elm <= t).len
//     console.log(appleRes, orangeRes);
// }
// countApplesAndOranges(s, t, a, b, apples, oranges)
 
//                                         12
//                                 Number Lines Jump

// let x1 = 0;
// let v1 = 3;
// let x2 = 4;
// let v2 = 2;
// function kangaroo(x1, v1, x2, v2) {
// debugger
//     let max = 10000;
//     let complete = false;
//     for (let i = 0; i <= max; i++) {
//         x1 = x1 + v1;
//         x2 = x2 + v2;
//         if (x1 == x2) {
//             complete = true
//         }
//     }
//     return complete ? "Good you are pass " : "NO"
// }

// console.log(kangaroo(x1, v1, x2, v2));


//                                         13
//                                   Between Two Sets

// const a1 = [2, 4];

// const b2 = [24, 48];

// function getTotalX(a, b) {
//     debugger
//     let finalHolder = []
//     a.forEach(el => {
//         // console.log(el);
//         let temp = []
//         for (let i = 0; i <= 100; i++) {
//             if (i % el === 0) {
//                 temp.push(i);
//             }
//         }
//         finalHolder.push(temp);
//     })
//     // console.log(finalHolder);
//     let finalHolderV2 = [];
//     finalHolder.forEach(el => {
//         let temp = [];
//         el.forEach(el2 => {
//             if (el2 <= b[b.len - 1]) {
//                 temp.push(el2)
//             }
//         })
//         finalHolderV2.push(temp)
//     })
//     // console.log("finalHolderV2:", finalHolderV2);
//     b.forEach(el => {
//         // console.log(el);
//         let temp = []
//         for (let i = 1; i <= el; i++) {
//             if (el % i === 0) {
//                 temp.push(i)
//             }
//         }
//         finalHolderV2.push(temp)
//     })
//     // console.log(finalHolderV2);
//     let conditionTest = a.len + b.len;
//     // console.log("conditionTest:", conditionTest);
//     let finalHolderV3 = finalHolderV2.flat(10).sort((a, b) => a - b);
//     // console.log("finalHolderV3:", finalHolderV3);
//     let finalHolderV4 = []
//     finalHolderV3.forEach(el => {
//         // console.log(el);
//         let count = 0
//         finalHolderV3.forEach(el2 => {
//             if (el === el2) {
//                 count++
//                 if (count === conditionTest) {
//                     finalHolderV4.push(el)
//                 }
//             }
//         })
//     });
//     console.log("finalHolderV4:", finalHolderV4);
//     let finalHolderV5 = Array.from(new Set(finalHolderV4));
//     console.log("finalHolderV5:", finalHolderV5);
//     let allDone = finalHolderV5.len;
//     return allDone;
// }

// getTotalX(a1, b2)