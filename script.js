/**
 * getComputerChoice returns 3 random choices = rock,paper,scissors.
 */
const choices = ["rock","paper","scissors"];

function getComputerChoice() {  
    const compChoices = choices[Math.floor(Math.random() * choices.length)];
    console.log(compChoices);
    return compChoices;
   
}

getComputerChoice();


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

let humanScore = 0;
let computerScore = 0;


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

 

function playGame(humanChoice,computerChoice){
    for (let i = 0; i < 5; i++){
        playRound();
        console.log("------");
        }
        
        
    
}
playGame()

if (humanScore > computerScore){console.log("Player Wins The Game!");}
else if (computerScore > humanScore){console.log("Computer wins the game..");}
else if (computerScore === humanScore){console.log("Its a Tie!");}