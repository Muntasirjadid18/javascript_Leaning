// Capitalize Every first Letter of each word in a String
let str = "good morning everyone" // given string
let word = str.split(' ');//show all alphabet
for(let i = 0;i<word.length;i++){
    const first_letter = word[i][0].toUpperCase();
    const rest = word[i].slice(1);
    word[i] = first_letter+rest;
    result = word.join(' '); 
}
console.log(result);