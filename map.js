const numbers=[1,2,3,4,5,6];
// // const double=[];
// // for (const i of numbers){
// //     const result = i*2;
// //     double.push(result)
// }

// const doubleIt= x =>x*2
// const double = numbers.map(doubleIt)

const double = numbers.map(x=>x*2)
console.log(double)

// 5 times

const num = numbers.map(x=> x*5 )
console.log(num)

// squre 

const squre = numbers.map(x=>x*x)
console.log(squre)


// string mapping

const friends =['jubu', 'mustaq', 'tasfiq', 'liam']

const lenght = friends.map(x=> x.length)

const firstletters = friends.map(x=> x[0])
console.log(firstletters)
console.log(lenght)

