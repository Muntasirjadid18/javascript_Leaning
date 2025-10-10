//Looping technique
// 1. for loop  
// 2. while loop  
// 3. do while loop  
// 4. for of --> array loop korar jonno
// 5. for in --> object korar jonno  

const friends = ['Milton','kabir','Faruk','Shihab'];
for (const friend of friends)
{
    // console.log(friend);
}
for(let i = 1 ; i<friends.length;i++){
    console.log(i);
    console.log(friends[i]);
}   
//while loop
let i = 0 ;
while(i <friends.length){
    console.log(friends[i])
    i++;
}
let numbers =[10,20,30,40,506,70];
let n = 0;
while(n <numbers.length){
    console.log(numbers[n])
    n++;
}