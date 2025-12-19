const height = [65,55,72,190,55,65,71,100,90,60]
let max = height[0];
for(let i = 0; i<height.length;i++){
    if(height[i]>max){
        max = height[i];
    }
    
}
console.log(max)


// -------------------using function
const height2 = [1,12,3,13,14,5,6,7,8,90,100,102,99,101,100,100,100,105,105,145]
function large(number){
     let max2 = number[0];
for(let num of number){
        if(num > max2){
   max2 = num;
  }
   
    }
     return max2;
  
}
const result = large(height2)
console.log("Maximum number is",result)