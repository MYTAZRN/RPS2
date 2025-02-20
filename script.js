function getComputerChoice() {
  const compChoice = Math.floor(Math.random()* 3);
    
  switch (compChoice) {
    case 0: "rock";
    console.log("rock");
    break;
    case 1: "paper";
    console.log("paper");
    break;
    case 2: "scissors";
    console.log("scissors");
    break;
  }

}

//getComputerChoice()

function getHumanChoice() {
  let humChoice = prompt ("Lets Play Rock, Paper, Scissors!");
  //console.log(humChoice);
}

//getHumanChoice()

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  

 if (humanChoice == computerChoice)
  {console.log("Tie!");}
  else if ( computerChoice == `scissors` && humanChoice == `paper`||
     computerChoice == `rock` && humanChoice == `scissors`||
     computerChoice == `paper` && humanChoice == `rock`)
  {console.log(`Win!`);}
  else 
 {console.log(`Lose...`);}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
  playRound();
  for (let i = 1; i <= 5; i++);

  if (humanScore > computerScore){
    console.log("You won the game!!!")
  } 
  else if (humanScore < computerScore){
    console.log("Oh No! You lost the game...")
  }
  else{
    console.log("it's a tie!")
  }
  
}
playGame()