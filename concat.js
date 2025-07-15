//Concatenate is a method used to combine or join two or more arrays into one//
let intro = ["HTML","CSS","JS"]
let basics = ["Problem solving","Functions","Logics"]
let fundamentals = ["Algorythm","Functions","Logics"]
let cs= intro.concat(basics, fundamentals)
console.log(cs)

// flat method is for reducing nesting in an array//
let courses = [["HTML","CSS","JS"],
              ["Problem Solving","Coding","Git"],
              ["Algorythm","Functions","Logics"]
              ]

let subjects = courses.flat(Infinity)
console.log(subjects)