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
console.log(getComputerChoice());
