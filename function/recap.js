function add(price1,price2){
    const total = price1+price2;
    return total;
}
function add2(price1,price2){
    return price1+price2;
}
const bill = add(10,20)
const bill2 =  add2(50,40)
console.log("Bill",bill);
console.log("Bill",bill2);


function doMath(num1,num2){
    const sum = num1+num2;
    const diff = num1-num2;
    const multi = sum*diff;
    const result = multi/2;
    return result;
}
const result = doMath(20,10)
console.log(result);
