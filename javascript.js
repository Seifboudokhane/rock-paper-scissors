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

function playRound(playerSelection){
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
}
let playerSelection;
let playerScore=0;
let computerScore=0;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click",()=>playRound("rock"));
paper.addEventListener("click",()=>playRound("paper"));
scissors.addEventListener("click",()=>playRound("scissors"));

// function game(){
//     let playerScore=0;
//     let computerScore=0;
//     let roundResult;
//     for (let i=0;i<5;i++){
//         let playerSelection=prompt("choose rock, paper or scissors");
//         let computerSelection=getComputerChoice();
//         roundResult = playRound(playerSelection,computerSelection);
//         switch(roundResult){
//             case -1:
//                 computerScore++;
//                 break;
//             case 1:
//                 playerScore++;
//                 break;
//             case 0:
//                 break;
//         }
//     }
//     if(playerScore==computerScore){
//         return "IT'S A DRAWN GAME!";
//     }else if(playerScore>computerScore){
//         return "YOU WON THE GAME!";
//     }else {
//         return "YOU LOST THE GAME!";
//     }
// }

// console.log(game());