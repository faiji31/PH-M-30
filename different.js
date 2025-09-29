const students=[
    {id:1, name: 'liam' , cgpa:3.06},
    {id:2, name: 'mustaq' , cgpa:3.66},{id:3, name: 'tasfiq' , cgpa:3.69},{id:4, name: 'juba' , cgpa:3.33},
]

const studentName = students.map(student=> student.name)
const cgpa = students.map(x=> x.cgpa)
const goodstudents1 = students.find(x=>x.cgpa>3.30)

console.log(goodstudents1)

const goodstudents = students.filter(x=> x.cgpa>3.50)
console.log(goodstudents)
console.log(cgpa)

console.log(studentName)