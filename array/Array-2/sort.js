const persons = ['rakib','nakib','rokib','zaman','farhan','shihab'];
const sortedPerson = persons.sort();
console.log(sortedPerson);
// sort 
const num = [2,3,9,43,1,5,4,7,9,8];
// asscending order --> samller to larger 
// desscending order --> larger to samller 
// const number_asc = num.sort();   not working
// const number_asc = num.sort();   not working
 const number_asc = [...num].sort(function(a , b){return a - b});   
 const number_desc = [...num].sort(function(a , b){return b - a});   
console.log(number_asc);
console.log(number_desc);