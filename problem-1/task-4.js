// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming
function longestOutput(string){
    let words = string.split(" ");
    let longestWord = "";

for(let word of words){
if(word.length>longestWord.length){
    longestWord  = word;
}
}
return longestWord;

}

const string = "I am learning Programming to become a programmer";
const output = longestOutput(string);
console.log(output);