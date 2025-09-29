const numbers=[1,2,3,4,5,6];
// // const double=[];
// // for (const i of numbers){
// //     const result = i*2;
// //     double.push(result)
// }

const doubleIt= x =>x*2
const double = numbers.map(doubleIt)
console.log(double)