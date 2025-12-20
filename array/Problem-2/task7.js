const shopping = [
{name:"Shampo",price:100},
{name:"Soap",price:700},
{name:"Pant",price:1200},
{name:"Toy",price:1500},
]
function getMax(shopping){
let max = shopping[0];
for(let shop of shopping){
    if(max.price<shop.price){
    max = shop;
    }
    
}
return max;
}
const max_price = getMax(shopping)
console.log(max_price);