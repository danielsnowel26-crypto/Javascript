let userPassword;
while(true) {
 userPassword = prompt("Enter your password");
function validPassword(password) {
const hasSymbole = /[!@#$%^&*()_+]/.test(password);
const hasNumber = /[0-9]/.test(password);
const hasUppercase = /[A_Z]/.test(password);
const hasLowercase = /[a_z]/.test(password);
}

if (hasSymbole && hasNumber && hasUppercase && hasLowercase) {
     alert("Valid password");
   } else {
   alert("strong password" + "vaild password")
    break;
   }
     alert("Invalid password");
   }
 }

validPassword(userPassword);
console.log(userPassword)