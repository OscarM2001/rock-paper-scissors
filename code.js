
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


function round(playerSelection, computerSelection){
    
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock';
    } 
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats paper';
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats scissors';
    } 
    else if (playerSelection == computerSelection) {
        return 'tied round';
    }
    else {
        return 'You Win! ' + playerSelection + ' beats ' +computerSelection;
    }
}


function game(){
    
    for (let i  = 1; i<=5 ; i++) {
        let playerSelection = prompt("Enter your rock paper scissors play");
        const computerSelection = getComputerChoice();
        let playRound = round(playerSelection,computerSelection);
        
        const resultsElement = document.getElementById("results");
        resultsElement.innerHTML += `<p>Round ${i}: ${playRound} </p>`;
    }
}

const startButton = document.getElementById("start-Button");
startButton.addEventListener("click", game)