const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultsElement = document.getElementById("results");

let playerScore = 0;
let computerScore = 0;
document.getElementById("computerScore").textContent = 'Computer Score: ' + computerScore;


function getComputerChoice(){
    let answerComputer= Math.ceil(Math.random()*3);
    if (answerComputer == 1) {
        return 'rock';
    }
    else if (answerComputer ==2)  {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}


function playRound(playerSelection, computerSelection){

    if(computerSelection == playerSelection){
        return "tied round";
    }else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ){
        computerScore++;
        document.getElementById("computerScore").textContent = 'Computer Score: ' + computerScore;
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }else{
        playerScore++;
        document.getElementById("playerScore").textContent = 'Player Score: ' + playerScore;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

rockButton.addEventListener("click", function(){
    let computerSelection = getComputerChoice();
    const roundResults= playRound("rock", computerSelection);
    updateResults(roundResults);
    checkWinner();
});

paperButton.addEventListener("click", function(){
    let computerSelection = getComputerChoice();
    const roundResults= playRound("paper", computerSelection);
    updateResults(roundResults);
    checkWinner();
});

scissorsButton.addEventListener("click", function(){
    let computerSelection = getComputerChoice();
    const roundResults= playRound("scissors", computerSelection);
    updateResults(roundResults);
    checkWinner();
});


function checkWinner(){
    if (computerScore>=5){
        resultsElement.innerHTML += `<p> Computer wins!</p>`;
        disableButtons();
    }else if (playerScore>=5){
        resultsElement.innerHTML += `<p> Player wins!</p>`;
        disableButtons();
    }
}

function updateResults(roundResults){
    resultsElement.innerHTML += `<p>${roundResults}</p>`;
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}


/* function game(){

        let valorclick = null;
        
        rockbutton.addEventListener("click", function(){
            valorclick = "ROCK";
            console.log(valorclick);
        });

        papperButton.addEventListener("click", function(){
            valorclick = "PAPER";
            console.log(valorclick);
        });

        scissorsButton.addEventListener("click", function(){
            valorclick = "SCISSORS";
            console.log(valorclick);
        });

        let playerSelection = valorclick;
        const computerSelection = getComputerChoice();
        let playRound = playRound(playerSelection,computerSelection);
        
        
        resultsElement.innerHTML += `<p>Round ${i}: ${playRound} </p>`;
    
}

rockbutton.addEventListener("click", game);
papperButton.addEventListener("click", game);
scissorsButton.addEventListener("click", game); */