// function takes an array as a parameter
function odd_avg(numbers){
    const odds=[];
for(const number of numbers ){
  if(number%2===1){
    odds.push(number);  //push odd number
  }
}
let sum =0;
let count = 0;
for(number of odds){
  sum = sum + number;
}
count = odds.length;
const avg = sum/count;
 console.log(sum,count);
return avg;

}
const numbers = [20,12,21,23,11,9,7,3,2,1,15,3,3,31,1,11,13];
const avg = odd_avg(numbers);
console.log("The average of the number is :",avg);
