const score = document.querySelector("#score");
const resultText = document.querySelector("#result");
const choices = document.querySelector("#choice");
let pScore = 0; 
let cScore = 0;
let gamePlay = true;

const buttons = document.querySelectorAll(".rps");
console.log(buttons);
buttons.forEach(button => button.addEventListener("click", playerPlay));

function computerPlay() {
    let play = Math.floor(Math.random()*3);
    let choice;
    switch (play) {
        case 0:
            choice = "rock";
            break;
        case 1: 
            choice = "paper";
            break;
        case 2: 
            choice = "scissors";
            break;
    }
    return choice;
}

function playerPlay(e) {
    // console.log(this.id);
    if (gamePlay === true) playRound(this.id, computerPlay());
}

function playRound(playerChoice, computerChoice) {
    console.log(`Player: ${playerChoice} \nComputer: ${computerChoice}`);
    let result = "";
    if (playerChoice === "rock") {
        if (computerChoice === "paper") result = `Computer wins!`;
        else if (computerChoice === "scissors") result = `Player wins!`;
        else result = `Draw!`;
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "scissors") result = `Computer wins!`;
        else if (computerChoice === "rock") result = `Player wins!`;
        else result = `Draw!`;
    }
    else if (playerChoice === "scissors") {
        if (computerChoice === "rock") result = `Computer wins!`;
        else if (computerChoice === "paper") result = `Player wins!`;
        else result = `Draw!`;
    }
    showScore(result, playerChoice, computerChoice);
}

function showScore(r, p, c) {
    if (r === "Player wins!") pScore++;
    else if (r === "Computer wins!") cScore++;
    choices.textContent = `player: ${p} / computer: ${c}`;
    resultText.textContent = r;
    score.textContent = `${pScore} - ${cScore}`;
    if (pScore === 5 || cScore === 5) {
        gameOver();
    }
}

function gameOver() {
    const game = document.createElement("h1");
    game.textContent = "Game over! Refresh to play again.";
    document.querySelector("div").append(game);
    gamePlay = false;
}