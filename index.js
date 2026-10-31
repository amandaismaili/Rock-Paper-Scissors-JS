function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;

    if(choice == 1) return "rock";
    else if (choice == 2) return "paper";
    else return "scissors";
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    let resDiv = document.getElementById("results");
    let numDiv = document.getElementById("num-score");
    let currRes = document.getElementById("curr-res");
    let play = true;
    
    function playRound(humanChoice, computerChoice){
        if(!play) return;
        if(humanChoice == "rock" && computerChoice == "paper"){
            resDiv.textContent = "You lose! Paper beats Rock.";
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors"){
            resDiv.textContent = "You win! Rock beats Scissors.";
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock"){
            resDiv.textContent = "You win! Paper beats Rock.";
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            resDiv.textContent = "You lose! Scissors beats Paper.";
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper"){
            resDiv.textContent = "You win! Scissors beats Paper.";
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            resDiv.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
        } else if (humanChoice == computerChoice) {
            resDiv.textContent = "Tie!!!";
        }

        currRes.textContent = `You: ${humanScore}. Computer: ${computerScore}`;
        
        if(humanScore == 5 || computerScore == 5){
            play = false;
            if(computerScore > humanScore){
                numDiv.textContent = `You lose! Your score: ${humanScore}. Computer score: ${computerScore}`;
            } else if (computerScore < humanScore){
                numDiv.textContent = `YOU WIN! Your score: ${humanScore}. Computer score: ${computerScore}`;
            }
        }
    }

    let rockButton = document.getElementById("rock-button");
    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice())
    });

    let paperButton = document.getElementById("paper-button");
    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice())
    });

    let scissorsButton = document.getElementById("scissors-button");
    scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice())
    });

    
}

playGame();