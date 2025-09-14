//Event listeners
document.querySelector("#guessBtn").addEventListener("click", guess);

//Global Variables
let answer = Math.floor(Math.random() * 99) + 1;
let guesses = 0;
let numWins = 0;

console.log(answer);

function guess() {
    let userGuess = document.querySelector("#guessBox").value;
    guesses++;
    if (guesses > 7) {
        document.querySelector("#feedback").textContent = `Out of Guesses!`;
        return;
    }
    // alert(userGuess);
    // document.querySelector("#guesses").textContent += userGuess + " ";
   document.querySelector("#guesses").textContent += `${userGuess} `;
   if (userGuess < answer) {
    document.querySelector("#feedback").textContent = `${userGuess} is too low!`;
    document.querySelector("#feedback").style.color="red";
   }
   else if(userGuess > answer) {
    document.querySelector("#feedback").textContent = `${userGuess} is too high!`;
    document.querySelector("#feedback").style.color="red";
   }
   else{
    document.querySelector("#feedback").textContent =`${userGuess} Correct!`;
    document.querySelector("#feedback").style.color="#16f551";
   }
}

