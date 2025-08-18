//odd numbers
for(let i =0; i<=20;i++){
    if(i%2!==0){
        console.log(i);
    }
}
//even number
for(let i =0 ;i<=20;i++){
    if(i%2===0){
        console.log(i);
    }
}
//divisor by 3 or 5 
for(let i=0; i<=50;i++){
    if(i%3===0 || i%5===0){
        console.log(i);
    }
}
//divisor by 3 and 5
for(let i=0; i<=50;i++){
    if(i%3===0 && i%5===0){
        console.log(i);
    }
}
//give me the sum of all numbers that sum of divisor by 3
let total = 0;
for(let i = 0;i<=40;i++){
  if(i%3===0){
    total = total+i;
  }
}
console.log('Total of sum : ', total);