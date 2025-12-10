// Count how many times a string has the letter a or A
let string = "An amazing Apple always attracts attention."
let count1 = 0;
let count2 = 0;
for(let i=0;i<string.length;i++){
    if(string[i] === 'a'){
       count1++;
    }
if(string[i] === 'A'){
       count2++;
    }
  
}
console.log(`The letter 'a' appears ${count1}`);
console.log(`The letter 'A' appears ${count2}`);