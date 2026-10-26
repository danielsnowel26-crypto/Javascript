//FOR
for (count = 1; count <= 10; count++) {
  document.write(`<h1>hello world </h1>`);
}

let links = document.getElementsByTagName("a");

for (let i = 2; i <= links.length; i++) {
  document.write(`<h1>this is link number ${i} </h1>`);
  console.log("links");
}

// for (let school = 5; school <= 25; school++) {
//   console.log("will this ever run");
// }

//DO while
let x = 15;
do {
  document.write(`<h1>3 x ${x} = ${3 * x}</h1>`);
  x++;
} while (x <= 15);

let z = 1;
do {
  document.write(`<h1>4 x ${z} = ${4 * z}</h1>`);
  z++;
} while (z <= 20);

//jump statments
//continue
// The continue statement breaks one iteration (in the loop),
//  if a specified condition occurs,
//  and continues with the next iteration in the loop.

// This example skips the value of 3:
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  document.write(`the number is ${i}<br>`);
}
//break
// The break statement can also be used to jump out of a loop:
for (let y = 1; y <= 10; y++) {
  if (y === 4) {
    break;
  }
  document.write(`<h1>${y}</h1>`);
}

// Math.floor(x) returns the value of x rounded down to its nearest integer:
Math.floor(4.9);
Math.floor(4.7);
Math.floor(4.4);
Math.floor(4.2);
Math.floor(-4.2);
console.log(Math.floor(-4.99));


// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());
 
let randomNumber = console.log(Math.floor(Math.random() * 10) + 1);