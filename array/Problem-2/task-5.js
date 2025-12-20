const prices = [2000,16000,50000,100000,1200,30000,35000]
function getMin(number){
    let min = number[0];
for(let num of number){
if(num < min){
    min = num;
}
}
return min

}
const cheap = getMin(prices)
console.log("The cheapest price is:",cheap);