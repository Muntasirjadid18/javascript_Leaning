// char -> 3 cft
// table -> 10 cft
// bed -> 50 cft

function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
     const chairwood = 3;
     const tablewood = 10;
     const bedwood = 50;
    const  totalchairwood = chairwood*chairQuantity;
     const totaltablewood = tablewood*tableQuantity;
     const totalbedwood = bedwood*bedQuantity;
       
     const totalwood = totalchairwood+totaltablewood+totalbedwood;
     return totalwood;
}
const wood = woodQuantity(1,3,4)
console.log("Wood needed",wood)
