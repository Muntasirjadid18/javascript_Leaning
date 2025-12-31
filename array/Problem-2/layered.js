function layeredDiscount(quantity){
   const first100Price = 100;
   const second100Price = 90;
   const above200Price = 70;

    if(quantity <= 100){
    const total = quantity*100;
    return total;
  }
  else if(quantity <= 200){
     const first100price = 100 * first100Price;
     const remainingQuantity = quantity-100;
     const remainingprice = remainingQuantity*second100Price;
     const total = first100price+remainingprice;
     return total;
    }
else{
 const first100price = 100 * first100Price;
     const second100price = 100*second100Price;
     const remainingQuantity = quantity-200;
     const remainingprice2 = remainingQuantity*above200Price;
     const total = first100price+second100price+remainingprice2;
     return total;
}
}

const result = layeredDiscount(200);
console.log(result);