const school ="Chittagong Government High School";
const subject = 'Chemistry'
const book ='chemistry'
if(subject.toLowerCase() === book.toLowerCase()){  //make all string into lowercase
    console.log("I am reading book");
}
else{
    console.log("hudai hudai prista ultai ar bath kawar jonno opekka kori");
}
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());
const drink = 'water';
const liquid = ' water';
if(drink.trim() === liquid.trim()){  //for remove string
    console.log("panier upor nam jibon");
}
else{
    console.log("salt water");
}