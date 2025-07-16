let fruits=["banana","orange","apple","mango"];
fruits.splice(2,0,"lemon","kiwi")
console.log(fruits)//method adds new items to an array
//allows you to remove elements from anywhere in the array and replace them with other elements
//we use let because we can still change variables we declare

let veg= ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let all= veg.slice(1);
console.log(veg)//method slices out a piece of an array

let fruts= ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Extract elements from index 1 (inclusive) up to index 3 (exclusive)
const citrus = fruts.slice(1);
console.log(citrus);
