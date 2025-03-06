/**
 * getComputerChoice returns 3 random choices = rock,paper,scissors.
 */
// Trouble finding a solution for initial console log.
console.log("Ignore inital round. first round comes after. :)")
const choices = ["rock","paper","scissors"];

function getComputerChoice() {  
    const compChoices = choices[Math.floor(Math.random() * choices.length)];
    console.log(compChoices);
    return compChoices;
}

getComputerChoice();

// getHumanChoice displays a prompt on webpage and prints input to console.
function getHumanChoice() {
    let display = prompt ("Lets play Rock, Paper, Scissors!".toLowerCase());
    
    if (display === "rock"){
        console.log ("rock");
    }
    else if (display === "paper"){
        console.log ("paper");
    }
    else if (display === "scissors") {
        console.log ("scissors");
    }
    return display;
}

getHumanChoice()

// initial scores
let humanScore = 0;
let computerScore = 0;

// playRound holds all info for single round of game + score incrementation.
function playRound(humanChoice,computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
   if (humanChoice === computerChoice){
    console.log ("You tied this round!");
    humanScore++ , computerScore++;
   }
   else if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock" 
   ){
    console.log ("You Win This Round!");
    humanScore++;
   } else {
    console.log ("You lost this round...");
    computerScore++;
   }

}
   
//playRound();

 
// playGame uses simple for loop to playRound 5X. also prints simple string
// to seperate each round.
function playGame(humanChoice,computerChoice){
    for (let i = 0; i < 5; i++){
        playRound();
        console.log("------");
        }
        
        
    
}
playGame()

// prints final result of game.
if (humanScore > computerScore){console.log("Player Wins The Game!");}
else if (computerScore > humanScore){console.log("Computer wins the game..");}
else if (computerScore === humanScore){console.log("Its a Tie!");}