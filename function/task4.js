// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) 
// as parameter and count how many 0’s are there in that string.
function count_zero(binarystring){
    let ch ;
    let count = 0;
    for(let ch of binarystring){
   if(ch === '0'){
    count++;
   }
    }
    return count;
}
const num = "0101001010101010101";
const result = count_zero(num);
console.log(result);

