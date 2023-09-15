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
        console.log("It's A Draw!");
        return 0;
    }else if((playerSelection == "Rock" && computerSelection == "SCISSORS")||(playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER")){
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    }else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }
}

function game(){
    let playerScore=0;
    let computerScore=0;
    let roundResult;
    for (let i=0;i<5;i++){
        let playerSelection=prompt("choose Rock, Paper or scissors");
        let computerSelection=getComputerChoice();
        roundResult = playRound(playerSelection,computerSelection);
        switch(roundResult){
            case -1:
                computerScore++;
                break;
            case 1:
                playerScore++;
                break;
            case 0:
                break;
        }
    }
    if(playerScore==computerScore){
        return "IT'S A DRAW!";
    }else if(playerScore>computerScore){
        return "YOU WIN!";
    }else {
        return "YOU LOSE!";
    }
}

console.log(game());