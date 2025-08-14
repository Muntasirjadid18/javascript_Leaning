const price = 4000;
if(price>=5000){
    // 10 percent discount
    const discount = price*10/100;
    const total = price - discount;
    console.log(total);
}
else if(price>=2500){
    // 5 percent discount
    const discount = price*5/100;
    const total = price - discount;
    console.log(total);
}
else{
    console.log(price);
}