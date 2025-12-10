// year will be a leap year if the year is divisible by 4
// simple logic
// function isLeapYear (year){
//     if(year%4 === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

function isLeapYear (year){
     if(year%100 !== 0 && year%4===0){
        return true;
    }
    else if(year%100 ===0 && year%400 ===0){
          return true;
    }
    else {
         return false;
     }
}


const output1 = isLeapYear(2052) 
const output2 = isLeapYear(2000) 
const output3 = isLeapYear(1900) 
const output4 = isLeapYear(2001) 
console.log(output1,output2,output3,output4);