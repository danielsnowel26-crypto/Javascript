// let randomNumber = Math.floor(Math.random() * 10) + 1;
// console.log(randomNumber);
// let guess;

// while (true) {
//   guess = parseInt(prompt("Guess a number between 1 and 10:"));

//   if (guess === randomNumber) {
//     alert("Congratulations! You guessed the number!");
//     break;
//   } else if (guess < randomNumber) {
//     alert("Too low! Try again.");
//   } else {
//     alert("Too high! Try again.");
//   }
// }
// let userpassword;

// function password(userpassword) {
//   const hasUppercase = /[A-Z]/.test(userpassword);
//   const hasLowercase = /[a-z]/.test(userpassword);
//   const hasNumber = /[0-9]/.test(userpassword);
//   const hasSymbole = /[!@#$%^&*()_+]/.test(userpassword);
//   while (true) {
//     userpassword = prompt("enter password");

//     if (
//       userpassword.length >= 8 &&
//       hasSymbole &&
//       hasNumber &&
//       hasUppercase &&
//       hasLowercase
//     ) {
//       alert("Valid password");
//       break;
//     } else {
//       alert("Invalid password");
//     }
//   }
// }
// password(userpassword);
// console.log(password(userpassword));


///arrays

// An Array is an object type designed for storing data collections

// Key characteristics of JavaScript arrays are:

// Elements: An array is a list of values, known as elements.

// Ordered: Array elements are ordered based on their index.

// Zero indexed: The first element is at index 0, the second at index 1, and so on.

// Dynamic size: Arrays can grow or shrink as elements are added or removed.

// Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
const names = ["john", "micheal", "bright", "oluchi", 1, 7];
console.log(names);


// You can also create an empty array, and provide elements later:
const cars = [];

console.log(cars);
// You access an array element by referring to the index number:
// Note: Array indexes start with 0.
// [0] is the first element. [1] is the second element
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
console.log(cars);

cars[0] = "benz"
console.log(cars);


const truck = [
  "Saab",
  "Volvo",
  "golf",
  "tesla",
  "lambo",
  "toyota",
  "dodgu",
  "venza",
  "rolls royce",
  "bugati",
  "porsche",
  "pigut",
  "lexus",
  "land cruiser",
  "BMW",
];

let katapila = truck[8]
console.log(katapila);

document.write("i own a " + katapila);

console.log(truck.length);
console.log(truck.sort());
console.log(truck.reverse());