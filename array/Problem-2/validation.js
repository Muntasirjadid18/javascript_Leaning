function multiply(num1,num2){
if(typeof num1 !== 'number' || num2 !== 'number'){
    return 'Please provide a number';
}
const mult = num1*num2;
return mult;

}

const result = multiply(5,'seven');
console.log(result);


function fullName(first,second){
    if(typeof first !== 'string'){
     return "First name should be a string";
    }
       else if(typeof second !== 'string'){
     return "Second name should be a string";
    }
        const full = first + ' '+ second;
    return full;
}

const full = fullName('Ajmal')
console.log(full);

function getPrice(Product){
const price = Product.price
return price;
}
const price = getPrice({name:'Muntasir',price:35,color:'black'})
console.log(price);

function getSecond(numbers){
 console.log(typeof numbers);
  if(Array.isArray(numbers) === false){
 return "Please provide an array";
 }
// console.log(Array.isArray(numbers));
 const second = numbers[1];
 return second;
}
const second = getSecond(25)
console.log(second);