// for a given string tell whether it has even number of characters or not

function evenSizedStirng(str){
const size = str.length;


    console.log(str,size);
    if(size%2===0){
    console.log('Even size');
}

else{
    console.log('Odd size');
}
}
evenSizedStirng("Dhaka");
evenSizedStirng("faka");

function doubleorTripple(number,doDouble){
    if(doDouble === true){
        const result = number*2; 
        return result;
    }
    else{
        const result = number*3;
        return result;
    }

}
console.log(doubleorTripple(5,false));
console.log(doubleorTripple(5,true));

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}
const output = numberOfElements([12,23,3,5,35,4,54,56,56]);
console.log(output);

function getage(person){
    const age = person.;
    return age;
}
 getage(40);
 console.log(getage());