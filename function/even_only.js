function evenOnly(numbs){
   const evens = [];
   for(number of numbs){
   if(number%2 == 0){
      console.log(number);
     evens.push(number);
   }

   }
   return evens;
}
const numbs = [1,3,4,5,6,7,8,88,6,6,7];
 const result = evenOnly(numbs);
 console.log(result);
 
 function sumOfeven(numb){
   let sum = 0;
   for(number of numb){
     if(number % 2 === 0){
      sum = number + sum;
     }
   }
   return sum;
 }
 const numb = [1,3,4,5,6,7,8,88,6,6,7];
 const result2 = sumOfeven(numb);
 console.log("Sum of all even numbers",result2);