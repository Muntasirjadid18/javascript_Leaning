
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']
const fruit = ['orange', 'yellow', 'green', 'blue', 'red'];
const rev_fruit = [];
for(let str of fruit){
 rev_fruit.unshift(str);
}
console.log(rev_fruit);

