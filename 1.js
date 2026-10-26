//RELATIONAL /CONDITIONAL /COMPARISON OPERATORS
let num1 = "25";
let num2 = 25;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log(num1 >= num2);
console.log(num1 <= num2);


//LOGICAL OPERATORS
// AND(&&)
console.log(num1 > 85 && num2 > 10);
//OR(||)
console.log(num1 > 5 || num2 > 30);
// NOT(!)
let x = num1 > 5;
console.log(!x);
//asignement opperator
//simple assigemt operator
num1 = 3;
//compound assignement operator
num1 += 5;
console.log(num1);
//precedence order
console.log((2 + 3) * 4);


//REGULAR EXPERSIONS
let regex = /john/;
console.log(regex.test("john"));
//possition matching symbols
regex = /^fish/;
console.log(regex.test("fish are you "));
regex = /ben$/;
console.log(regex.test("uniben"));
//charater classes symbols
regex = /[^abc]all/;
console.log(regex.test("allhhrg3ged34rt"));

regex = /\Dall\d5/;
console.log(regex.test("8vall95"));

// const userPassword = prompt("Enter your password");
// function validPassword(password) {
//   const hasSymbole = /[!@#$%^&*()_+]/.test(password);
//   const hasNumber = /[0-9]/.test(password);
//   const hasUppercase = /[A_Z]/.test(password);
//   const hasLowercase = /[a_z]/.test(password);

//   if (hasSymbole && hasNumber && hasUppercase && hasLowercase) {
//     alert("Valid password");
//   } else {
//     alert("Invalid password");
//   }
// }

// validPassword(userPassword);