// Take a number if the number is odd multiply it by 2 and return the result. 
// If the number is even divide it by two and return the result.
function odd_num(x){
if(x%2 === 0){
    num = x/2;
}
else if(x%2===1){
     num = x*2;
}
return num;
}

const output = odd_num(25);
console.log(output)