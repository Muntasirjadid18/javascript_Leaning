// 3*3 --> 9
// 3+3 --> 6
// 3-3 --> 0
// 3/3 --> 1
//how to square in a function
function square(number){
    console.log("Value of the number parameter", number)
     s = number*number;
 console.log("Square of the given parameter is",s);
}
square(4);
console.log("----------------")
square(5);
console.log("----------------")
square(6);
console.log("----------------")
square(7);
console.log("----------------")
square(8);
console.log("----------------")
square(9);
console.log("----------------")
square(10);
//add function
console.log("----------------")
function sum(num1,num2){
    add = num1+num2;
    console.log("The sum of the numbers is", add); 
}
sum(4,5);
sum(1,1);

function addAll(a,b,c,d,e){
    add = a+b+c+d+e;
    console.log("Total",add)
}
addAll(2,1,3,4,5);