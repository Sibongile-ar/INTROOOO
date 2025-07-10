let globalVar = "This is a global variable";

function myVars() {
  let localVar = "This is a local variable";
  console.log(localVar + ", is only accessible inside a method or a function");
}

console.log(globalVar + ", it is accessible everywhere");

myVars(); 

// return statement//

function myVars() {
  let localVar = "This is a local variable";
  return localVar;
}
console.log(globalVar + ", it is accessible everywhere");
    console.log(myVars() + ", is only accessible inside a method or a function");

 




