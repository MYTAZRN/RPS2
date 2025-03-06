/**
 * getComputerChoice returns 3 random choices = rock,paper,scissors.
 */

function getComputerChoice() {
    let choices = Math.floor(Math.random() * 3);
    return choices;
}

//getComputerChoice()

function getHumanChoice() {
    let display = prompt ("Lets play Rock, Paper, Scissors!");
    return display;
}

//getHumanChoice()

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
   humanChoice = getHumanChoice();
   computerChoice = getComputerChoice();
   if (humanChoice === computerChoice){
    humanScore++ && computerScore++;
   }
   else if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock" 
   ){
    humanScore++;
   } else {
    computerScore++;
   }

}


playRound();

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound();
        
    }
}
playGame()