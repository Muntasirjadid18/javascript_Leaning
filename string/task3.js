// Check whether a string contains all the vowels a, e, i, o, u.
let string = "Programming is fun";
if(string.includes('a') &&  //include(a) in the sentence a is present always return true 
string.includes('e') &&
string.includes('i') &&
string.includes('o') &&
string.includes('u')){
 console.log("Contains all vowels");
}
else{
  console.log("Does not contain all vowels");
}