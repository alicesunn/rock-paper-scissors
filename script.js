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

function playerPlay() {
    let choice;
    do {
        //console.log("Enter rock, paper, or scissors:");
        choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    } while(choice != "rock" && 
    choice != "paper" && 
    choice != "scissors");
    return choice;
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
    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let repeat = "";
    let result;
    for (let i = 1; i <= 5; i++) {
        console.log(`Score: ${playerScore}-${computerScore}`);
        console.log(`${repeat} Round ${i} of 5`);
        result = playRound(playerPlay(), computerPlay());
        alert(result);
        repeat = "";
        if (result === "Computer wins!") computerScore++;
        else if (result === "Player wins!") playerScore++;
        else {
            repeat = "Repeating";
            i--;
        }
    }
}

game();