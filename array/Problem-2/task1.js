const disha = 95;
const salma = 56;
if(disha>salma){
    console.log("Disha will get the strawberry.");
}
else{
    console.log("Salma will get the strawberry.");
}

function getmax (num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{ 
        return num2;
    }
}
const max1 = getmax(96,79)
const max2 = getmax(98,85)
const ultimate_max = getmax(max1,max2)
console.log("max of two is: ",ultimate_max)