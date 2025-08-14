const age = 80;
const price = 500;
if(age <= 12){
    console.log("You can eat food");
}
else if(age<=60){
    //10% discount
    const discount = price*10/100;
    const total = price - discount
    console.log(total);
}
else{
    console.log(price);
}