// 12 inch 1 feet
function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}
const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);

function inchToFeet2(inch){
     const feet = inch/12;
     const feetFraction = parseInt(feet);
     const inchi = inch % 12;
     return feet + " feet " + inchi +" inch" ;
}
const shuvoHeight2 = inchToFeet2(75)
console.log(shuvoHeight2);
//

function mileTokm(y){
    const x = y * 1.60934;
    return x;
}
const result = mileTokm(4) ;
console.log(result);