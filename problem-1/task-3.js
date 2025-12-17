// Write a function to count the number of vowels in a string.
 
function checkVowel(str){
    let count =0;
    let vowel = "aeiouAEIOU"
    for(let char of str){
        if(vowel.includes(char)){
     count++;
        }
        }
        return count;
    }
const str = "Programming Hero";
const output = checkVowel(str);
console.log("number of Vowels: "+output);