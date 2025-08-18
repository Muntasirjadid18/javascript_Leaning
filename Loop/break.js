for(let i = 0;i<=100;i++){
    console.log(i);
    if(i>=10){
        break; //end the code
    }
}
//use while loop
let n=55;
while(n>50){
    console.log(n);
    n--;
}
//use continue ; continue is basically use for skip value which is true
for (let i =0;i<50;i++){
    if(i%2===1){
        continue;
    }
    console.log(i);
    
}
// while
let num = 0;
while(num<60){
     num++;
    if(num%5!== 0){
     continue;
    }
 console.log(num);

}