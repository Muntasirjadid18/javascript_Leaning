/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
//bus_fare_calculator.js
let tk =800;
let age = 30;
if(age<10){
    console.log("free");
}
else if(age>10 && age<25){
    console.log(tk-(tk*(50/100)));
}
else if(age>=60){
    console.log(tk-(tk*(15/100)));
}
else{
    console.log(tk);
}