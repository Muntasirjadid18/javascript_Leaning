// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];
const heights2 = [167,190,120,165,157];
let m = heights2[0];
for(let i=0;i<heights2.length;i++){
    console.log(heights2[i]);
  if(heights2[i]<m){
    m = heights2[i];
}
}
console.log("The lowest heigt is:",m); 

