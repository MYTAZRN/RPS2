/* Create a program that displays rock,paper,scissors randomly
using an array =[rock,paper,scissor] works.
create strings that lead to rock, paper, scissors being displayed randomly.
*/

function getComputerChoice (){
    let compOptions = Math.floor(Math.random()*3)
    switch (compOptions){
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

//getComputerChoice ()

function getHumanChoice (){
    let displayHum = prompt("Lets play Rock, Paper, Scissors!");
    console.log(displayHum);
}
//getHumanChoice ()

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    for (let i = 1; i < 5; 1++);
     
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);