// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0


function countArray(array,num){
    let count = 0;
    for(let i =0;i<array.length;i++){
        if(array[i] === num){

        
        count++;
        }
    }
    return count;
}
let arr = [5,6,11,12,98, 5];
const num = 25;
const output = countArray(arr,num);
console.log(output);