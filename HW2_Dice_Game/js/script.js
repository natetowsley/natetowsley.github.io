/* Window event listener and method for hiding element
on window resize found here:
    - Window listener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    - Hide on resize: https://stackoverflow.com/questions/9217499/applying-displayhidden-to-a-div-at-a-certain-window-width-using-js?utm_source=google.com
*/

// event listeners
window.addEventListener("resize", toggleAside); 

// global variables
let balance = 0;
let playerDice = ["w1", "w2", "w3", "w4", "w5", "w6"];
let houseDice = ["r1", "r2", "r3", "r4", "r5", "r6"];

// initial function call
startNewGame();
toggleAside();

function startNewGame() {
    balance = 100;

    // set default text content
    document.querySelector("#balance").textContent = "Balance: $" + balance;
    document.querySelector("#houseInfo").textContent = "";
    document.querySelector("#playerInfo").textContent = "";
}

function toggleAside() {
    x = document.querySelector("aside");
    if (window.innerWidth < 1300) {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}

function playRound() {
    
}

function playerRoll() {
    let index = Math.floor(Math.random() * 6);
    return playerDice[index];
}

function houseRoll() {
    let index = Math.floor(Math.random() * 6);
    return houseDice[index];
}