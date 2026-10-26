// RELATIONAL / CONDITIONAL / COMPARISON OPERATORS
let num1 = "25";
let num2 = 25;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 >= num2);
console.log(num1 <= num2);


// LOGICAL OPERATORS
// AND(&&)
console.log(num1 > 85 && num2 > 10);
// OR(||)
console.log(num1 > 5 || num2 > 30);
// NOT(!)
let x = num1 > 5;
console.log(!x);
// assignment operator
// simple assignment operator
num1 = 3;
// compound assignment operator
num1 += 5;
console.log(num1);
// precedence order
console.log((2 + 3) * 4);


// REGULAR EXPRESSION
let regex = /daniel/;
console.log(regex.test("daniel"));
// position matching symbols
let regx = /^snowel/;
console.log(regx.test("snowel"));
let REGEX = /hello$/;
console.log(REGEX.test("hello"));
// character classes symbols
regex = /[^abc]all/;
console.log(regex.test("callhhrg3ged34rt"));

regex = /\Dall\d6/;
console.log(regex.test("Dall96"));

// PASSWORD VALIDATOR FUNCTION
// const userPassword = prompt("Enter your password");
function valid_Password(password) {
  const hasSymbol = /[!@#$%^&*()_]+/;
  const hasUpperCase = /[A-Z]+/;
  const hasLowerCase = /[a-z]+/;
  const hasNumber = /[0-9]+/;
  
  const hasAtLeast8Characters = password.length >= 8;

  const containsAllRequirements = 
    hasSymbol.test(password) && 
    hasUpperCase.test(password) && 
    hasLowerCase.test(password) && 
    hasNumber.test(password) &&
    hasAtLeast8Characters;

  const displayMessage = containsAllRequirements ? "strong password" : "weak password";

  if (containsAllRequirements) {
    alert("valid password - " + displayMessage);
  } else {
    alert("invalid password - " + displayMessage);
  }
}

valid_Password(user_Password);