// Count how many times a string has the letter a or A
let string = 'Apple is a fruits aaaa AAAAA' ;
let count1 = 0;
let count2 = 0;
for(i=0;i<string.length;i++){
if(string[i] ==='a'){
count1++;
}
if(string[i] === "A"){
    count2++;
}

}
console.log(`The letter 'A' appears ${count2}`);
 console.log(`The letter 'a' appears ${count1}`);