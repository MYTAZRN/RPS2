function getComputerChoice() {
    const compChoice = Math.floor(Math.random()* 3);
    switch (compChoice) {
        case 0: 
        console.log("rock")
        break;
        case 1:
        console.log("paper")
        break;
        case 2:
        console.log("scissors")
        break;
    }
}
    

getComputerChoice()

function getHumanChoice() {
    let forPlayer = prompt("Lets play Rock,Paper,Scissors");
    let userInput = forPlayer.toLowerCase();
    if (userInput === "rock"){
        console.log("rock");
    }
    else if (userInput === "paper"){
        console.log("paper");
    }
    else if (userInput === "scissors"){
        console.log("scissors");
    }
    
}
getHumanChoice()

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {

}