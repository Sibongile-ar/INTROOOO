//String example//
let petName = "Teddy"; // Global variable

myFunction();
function myFunction() {
  fruit = "apple"; // Considered global
  console.log(typeof petName + "" + "My pet name is " + petName);
}
console.log(
  typeof petName + "-" + "My pet name is " + petName + "Fruit name is " + fruit
);

///////

//////INTEGER EXAMPLE///////
// Integer example
let numberOfApples = 10; // Integer value
fruits();
function fruits() {
  console.log(
    typeof numberOfApples + "- " + "Number of apples is: " + numberOfApples
  );
}

/////FLOAT/DOUBLE EXAMPLE///
let price = 10.99;
money();
function money() {
  console.log(typeof price + "-" + "total money is: " + price);
}

/////BOOLEAN EXAMPLE///////////
//Used for true/false values.//
let isAvailable = true;
let isExpired = false;

coffee();

function coffee() {
  console.log(typeof isExpired + " - coffee is expired: " + isExpired);
  console.log(typeof isAvailable + " - coffee is available: " + isAvailable);
}

///////character datat type example///
let studentInitial = "S"; // Character (string of length 1)

show(); // Call the function

function show() {
  console.log(typeof studentInitial + " - student initial: " + studentInitial);
}

/////symbol data type example////
let id = Symbol("id");
showsymbolType();

function showsymbolType() {
  console.log(typeof id + "- $ ");
}

/// Show object example///
let colours = ["red,blue, yellow"];
nothing();

function nothing() {
  console.log(typeof colours + "-red,blue, yellow");
}
