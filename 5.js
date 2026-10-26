// Demonstrates both traditional string concatenation and
//  ES6 string interpolation.
//string interpolation``````
// const mulcounter = 67;
// console.log("The init vlue is" + mulcounter);
// console.log(`The initial vlue is ${mulcounter}`);

let number = parseInt( prompt("enter any number "));
if (number % 2 === 0) {
    alert(`${number} is even`);
} else {
        alert(`${number} is odd`);

}


// while loop
let counter = 1
while ( counter <= 10) {
    document.write(`<h1>orji micheal</h1>`)
    console.log(`counter`)
    counter++
}
// If you forget to increase the variable used in the condition,
//  the loop will never end. This will crash your browser or system.


let you = 5;
while (you < 10) {
  console.log("your age is less than 10");
  you++;
}
document.write("you are above 10 years old");


// creating multiplication table with loops
let mulcounter = parseInt(prompt("enter a number for multiplication table "));
let mulLimit = parseInt(prompt("enter a limit for multiplication table "));
let m = 1

while (m <= mulLimit) {
  document.write(`<h1> ${mulcounter} x ${m} =
     ${mulcounter * m} <h1>`);
  m++;
}