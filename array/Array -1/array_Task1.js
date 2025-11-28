//node array_Task1.js
// Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
const fruits =["Mango","Banana","Orange","Lichi","Apple"];
console.log(fruits[3]);//find fruits
console.log(fruits.indexOf("Lichi"));//find index
console.log(fruits.splice(2,1,'jambura'))
console.log(fruits);
console.log(fruits.splice(1,1,'Guava'));
console.log(fruits)