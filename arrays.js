//getting the number of items in an array.
let courses = ["Html","Css","Js","React"]

//push method add an element at the end of the array
courses.push("TypeScript");

//Unshift add element at the beginning of tghe array
courses.unshift("NodeJS");

//shift removes elementbat the beginning of the arra
courses.shift("NodeJS")

//Pop is used to remove elements at the end of an array
courses.pop("Typescript")

let total = courses.length;
console.log(`Elements inside array courses are ${courses}`);

///to show the elements inside in an array///
console.log(`Elements inside array courses are ${courses}`);

//using variables to convert object to sting.
//We create a list of strings with variable convertor
let convertor = courses.toString();
console.log(`This array becomes a List of strings ${convertor}`);

//converting using a function thatb only works in strings
let caps = convertor.toUpperCase();
console.log(`Testing if string can call uppercase ${caps}`);

//converting using a function that only works in strings

let smalls = convertor.toLowerCase();
console.log(`Testing if string can be smaller cases ${smalls}`);


//Using join method to separate elements with a "|" 
let separator =courses.join(`|`);
console.log(` separated elements ${separator}`);
// | -it is called a pipe

//2D arrays EXAMPLE
let student ={
    firstName:"Dineo",
    secondName:"Sibongile",
    stipend: 6000
}
console.log(delete student.stipend)
console.log(student.firstName,student.secondName);





//console.log(`Number of items in an array is ${total}`);
//console.log(`This array becomes a List of strings ${convertor}`); 
//console.log(`Testing if string can call uppercase ${caps}`);
