// Write a function called make_avg() which will take an array of integers and 
// the size of that array and return the average of those values.
function make_avg(numbs){
    let number ;
    let sum = 0;
    for(number of numbs){
        console.log(number);
         sum = sum + number;
         
    }
    const avg = sum/numbs.length;
   return avg;
}
const numbs = [10,20,30,40,50,60]
const output =  make_avg(numbs);
console.log(output);
