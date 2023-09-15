function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    switch(randomNumber){
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;
        case 3:
            return "SCISSORS";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.trim();
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection == computerSelection){
        return "It's A Draw!";
    }else if((playerSelection == "Rock" && computerSelection == "SCISSORS")||(playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

const playerSelection = "   paPer ";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));