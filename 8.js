let randonNum = Math.floor(Math.random() * 10) + 1;
console.log(randonNum);
let guess;
guess = pralsent("Guess a number between 1 and 10");
while(true){
    guess = prompt("Guess a number between 1 and 10");
    if(guess == randonNum){
        alert("Congratulations! You guessed the correct number.");
        break;
    } else {
        alert("too low. Try again.");
    } else if("too high. Try again.");
}