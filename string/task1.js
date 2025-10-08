// Count how many times a string has the letter a
let str = "javascript is amazing!";
let count = 0;
for(let i=0;i<str.length;i++){
    if(str[i].toLowerCase() === 'a'){
        count++;
    }
}
console.log(`The letter 'a' appears ${count} times.`);