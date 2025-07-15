//The splice() method returns an array with the deleted items:

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1);
console.log(fruits)

let months = ["Jan", "Feb", "Mar", "Apr"];
let spliced = months.toSpliced(0, 1);
console.log(months)

//The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array,
//  keeping the original array unchanged, while the old method altered the original array.

    let originalArray = [1, 2, 3, 4, 5];
    let removedElements = originalArray.splice(2, 2, 6, 7); // Removes 2 elements starting from index 2, then adds 6 and 7
    console.log(removedElements); // Output: [3, 4] (the removed elements)
    console.log(originalArray); // Output: [1, 2, 6, 7, 5] (original array is modified)