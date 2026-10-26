// array Methods
let array = ["john", "kris", "Darwin"];
// push()
// push() - Adds to the end
array.push("Faith");
console.log(array);
// pop()  2 
// pop() - Removes from the end
array.pop();
console.log(array);
// - pop() removes only the last item. Extra items passed are ignored
// unshift()
// unshift() - Adds to the beginning
array.unshift("Victor");
console.log(array);
// shift()
// shift() - Removes from the beginning
array.shift();
console.log(array);

// splice()
// splice() - Remove items from any position
// Removing items at any index
array.splice(0, 2);
console.log(array);
// - Starts at index 0 and removes 2 items.

// replacing items at any index
array.splice(1, 1, "Gratitude");
console.log(array);
// - Replaces 1 item at index 1 with "Getrude".

// Replacing items at any index
array.splice(0, 1, "Hannah", "fortune");
console.log(array);
// - Replaces item at index 3 with "Hannah".

// Extracting items from an array
let fiveFavMovies = [
  "spiderman",
  "spy kids",
  "money heist",
  "End-Game",
  "Extraction",
];
// slice()
// slice will copy the content of the main arrayay
let twoFavMovies = fiveFavMovies.slice(2);
console.log(twoFavMovies);
twoFavMovies = fiveFavMovies.slice(1, 3);
console.log(twoFavMovies); 



//joining two or more different arrayay
// *concat() - Join arrayays*
let boysname = ["john", "daniel", "victor"];
let girlsname = ["chidera", "princess", "divine"];
let allnames = boysname.concat(girlsname);
console.log(allnames);
//converting arrayys to string
//tostring()
// *toString() - Convert array to string
// - Converts arrayay to comma-separated string.
console.log(allnames.toString());
//join
// *join











// - Gets index
// let boysname = ["john", "daniel", "victor"]

console.log(
  boysname.indexOf("victor"),
  boysname.indexOf("john"),
  boysname.indexOf("Getrude"),
  boysname.indexOf("obi"),
);

//map
// *map() - Create new modified arrayay*
// Create a new arrayay with items * 5
let mutipleoffive = numbers.map(function (item) {
  return item * 5
});
console.log(mutipleoffive)

//filiter
// *filiter() - Pick only matching items*
let evenNumbers = numbers.filiter(function (item) {
  return item % 2 == 0;
});
console.log(evenNumbers);

//every
// every() - Check if all items pass*
// Returns 'true' if *all* items are > 0
let x = numbers.every(function (item) {
  return item > 1
});
console.log(x);
//some
// some() - Click if any item passes*
let y = numbers.some(function (item) {
  return item > 5;
});