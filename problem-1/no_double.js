const biranyKhur = ['abul','kabul','babul','cabul','fabul','abul','babul','cabul']
const number = [1,2,3,4,5,6,7,8,9 ,1,1,2,2,3,4,5,6]
function no_Duplicate(biranyKhur){
   const double = [];
  for(let str of biranyKhur){
   if(double.includes(str)===false){
    double.push(str);
   }
  }
  return double
}
const result = no_Duplicate(number);
console.log(result);
