const numbers =[1,2,13,14,25,6,7]

const greterThan10 = numbers.filter(x => x>10)
const lessthan10 = numbers.filter(x=> x<10)
const evenNumbers = numbers.filter(x=> x%2==0)
console.log(evenNumbers)
console.log(lessthan10)
console.log(greterThan10)