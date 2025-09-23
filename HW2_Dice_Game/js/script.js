/* Window event listener and method for hiding element
on window resize found here:
    - Window listener: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    - Hide on resize: https://stackoverflow.com/questions/9217499/applying-displayhidden-to-a-div-at-a-certain-window-width-using-js?utm_source=google.com
*/

// event listeners
window.addEventListener("resize", toggleAside);
document.querySelector("#rollBtn").addEventListener("click", playRound);
document.querySelector("#betUp").addEventListener("click", raiseBet);
document.querySelector("#betDown").addEventListener("click", lowerBet);

// global variables
let balance = 0;
let bet = 10;

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

function raiseBet() {
    if (bet < balance) {
        bet+= 10;
        document.querySelector("#betText").textContent = `$${bet}`;
    }
}

function lowerBet() {
    if (bet > 10) {
        bet-= 10;
        document.querySelector("#betText").textContent = `$${bet}`;    
    } 
}

function playRound() {
    // roll all dice
    let houseRolls = [diceRoll(), diceRoll()];
    let houseScore = houseRolls[0] + houseRolls[1];
    let playerRolls = [diceRoll(), diceRoll()];
    let playerScore = playerRolls[0] + playerRolls[1];

    document.querySelector("#HD1").src = "img/red_dice/r" + houseRolls[0] + ".png";
    document.querySelector("#HD2").src = "img/red_dice/r" + houseRolls[1] + ".png";

    document.querySelector("#PD1").src = "img/white_dice/w" + playerRolls[0] + ".png";
    document.querySelector("#PD2").src = "img/white_dice/w" + playerRolls[1] + ".png";

    // Display scores and who won
    document.querySelector("#houseInfo").textContent = "House rolled " + houseScore + "!";
    document.querySelector("#playerInfo").textContent = "You rolled " + playerScore + "!";
    // Balance logic for win or loss
    if (playerScore > houseScore) {
        let winnings = bet;
        balance += winnings;
        document.querySelector("#matchResponse").textContent = "You Win! Won $" + winnings;
    }
    else if (houseScore > playerScore) {
        document.querySelector("#matchResponse").textContent = "You lost :(";
        balance-= bet;
    }
    else {
        document.querySelector("#matchResponse").textContent = "Draw! No winners!!";
    }

    // update balance text
    document.querySelector("#balance").textContent = `Balance: $${balance}`;
    if (bet > balance) {
        bet = balance;
        document.querySelector("#betText").textContent = `$${bet}`;
    }
}

function diceRoll() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
    return roll;
}