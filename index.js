function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;

    if(choice == 1) return "rock";
    else if (choice == 2) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter your choice: ");
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();

        if(humanChoice == "rock" && computerChoice == "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        } else if (humanChoice == computerChoice) {
            console.log("Tie!!!");
        }
    }

    for(let i = 0; i < 5; i++){
        let compChoice = getComputerChoice();
        let userChoice = getHumanChoice();

        playRound(userChoice, compChoice);
    }

    if(computerScore > humanScore){
        console.log(`You lose! Your score: ${humanScore}. Computer score: ${computerScore}`);
    } else if (computerScore < humanScore){
        console.log(`YOU WIN! Your score: ${humanScore}. Computer score: ${computerScore}`);
    } else {
        console.log(`Draw! Score: ${humanScore}.`);
    }
}

playGame();