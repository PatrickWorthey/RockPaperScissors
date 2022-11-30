const computerSelection = computerTurn();

const playerSelection = playerTurn();

playGame(computerSelection, playerSelection);

function computerTurn(){
    let x = Math.floor(Math.random() * 3);
    if(x == 0){
        return("rock");
    }else if(x == 1){
        return("paper");
    }else{
        return("scissors");
    }
}

function playerTurn()
{
    return prompt("Choose Rock, Paper, or Scissors").toLowerCase();

}

function playGame(computerSelection, playerSelection){
    if(computerSelection == "rock" && playerSelection == "rock" ||  computerSelection == "paper" && playerSelection == "paper"  || computerSelection == "scissors" && playerSelection == "sciccors"){
        alert("tie!");
    }else if(computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock" || computerSelection == "paper" && playerSelection == "scissors"){
        alert("player wins!");
    }else if (computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "rock" && playerSelection == "scissors"){
        alert("computer wins!");
    }else{
        alert("Enter correct choice!");
    }
}

console.log("Computer Selection \=", computerSelection, "Player Selection \=",playerSelection)