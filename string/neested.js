const computer = {
    brand : 'lenovo',
    price : 35000,
    processor : 'Intel',
    hdd : '512gb'
}
const keys = Object.keys(computer);
console.log(keys) //for keys
const values = Object.values(computer);
console.log(values)
const college = {
    name : 'vnc' ,
    class : ['11','12'],
    events : ['Science Fair','Bijoy Dibos','21 Feb'],
    unique :{
        color: 'blue',
        result :{
            gpa : 5,
            merit :'top'
        }
    }
}
delete college.class
console.log(college)
console.log(college.unique.color)
console.log(college.unique.result.merit)
college.events[1] = 'Martyr days'
console.log(college.events[1])