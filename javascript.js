let playerSelection;
let playerScore=0;
let computerScore=0;

function playRound(playerSelection){
    if(computerScore==5||playerScore==5){
        return;
    }

    let computerSelection = getComputerChoice();

    console.log("you chose "+playerSelection);

    if (playerSelection == computerSelection){
        document.getElementById("roundResult").textContent=(`Draw! you both chose ${computerSelection}`);
    }else if((playerSelection == "rock" && computerSelection == "scissors")||(playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")){
        document.getElementById("roundResult").textContent=(`You Win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    }else {
        document.getElementById("roundResult").textContent=(`You Lose! ${computerSelection} beats ${playerSelection}`);
        computerScore++;
    }

    document.getElementById("playerScore").textContent=playerScore;
    document.getElementById("computerScore").textContent=computerScore;

    if(computerScore==5||playerScore==5){
        document.getElementById("gameOver").textContent=('GAME OVER! ');
        playerScore>computerScore?document.getElementById("gameOver").textContent+=('YOU WON!'):document.getElementById("gameOver").textContent+=('YOU LOST!')
        return;
    }
}
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    switch(randomNumber){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}
function restartGame(){
    playerScore=0;
    computerScore=0;
    document.getElementById("playerScore").textContent=playerScore;
    document.getElementById("computerScore").textContent=computerScore;
    document.getElementById("gameOver").textContent="";
}
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const restart = document.querySelector(".restart");

rock.addEventListener("click",()=>playRound("rock"));
paper.addEventListener("click",()=>playRound("paper"));
scissors.addEventListener("click",()=>playRound("scissors"));
restart.addEventListener("click", ()=>restartGame());