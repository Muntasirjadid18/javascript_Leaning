// Generate a random number between 10 to 20.

function getRandomnum(min,max){
    return Math.floor((Math.random()*(max-min+1))+min)
}
const output = getRandomnum(10,20)
console.log(output);