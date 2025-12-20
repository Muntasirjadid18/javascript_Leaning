const phones = [
{name:"Samsung",price:20000,camera:"12mp",color:"black"},
{name:"Xoami",price:18000,camera:"12mp",color:"black"},
{name:"Oppo",price:25000,camera:"12mp",color:"black"},
{name:"Iphone",price:100000,camera:"12mp",color:"black"},    
{name:"Walton",price:16000,camera:"12mp",color:"black"},    
{name:"HTTC",price:30000,camera:"12mp",color:"black"},    
]
function getMax(phones){
  let max = phones[0]
for(let num of phones){
if(num.price>max.price){
    max = num;
}
}
return max
}
const max_price = getMax(phones)
console.log(max_price)