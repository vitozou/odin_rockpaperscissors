// function getComputerChoice() {
//     var randomChoice = Math.random() * 3;
//     if(randomChoice < 1) return "rock";
//     else if(randomChoice < 2) return "paper";
//     else return "scissors";
// }

// function getHumanChoice() {
//     var choice = prompt("Rock paper scissors: ");
//     return choice;
// }

// function playRound(humanChoice, computerChoice) {
//     if(humanChoice.toLowerCase() == "rock") {
//         if(computerChoice.toLowerCase() == "rock") {
//             console.log("You tie - rock vs rock");
//         }
//         else if(computerChoice.toLowerCase() == "paper") {
//             console.log("You lose - paper beats rock");
//         }
//         else {
//             console.log("You win - rock beats scissors");  
//         }
//     }
//     else if(humanChoice.toLowerCase() == "paper") {
//         if(computerChoice.toLowerCase() == "rock") {
//             console.log("You win - paper beats rock");  
//         }
//         else if(computerChoice.toLowerCase() == "paper") {
            
//             console.log("You tie - paper vs paper");  
//         }
//         else { // scissors
//             console.log("You lose - scissors beats paper");
//         }
//     }
//     else { // scissors
//         if(computerChoice.toLowerCase() == "rock") {
//             console.log("You lose - rock beats scissors");
//         }
//         else if(computerChoice.toLowerCase() == "paper") {
//             console.log("You win - scissors beats paper");        
//         }
//         else {
//             console.log("You tie - scissors vs scissors");
//         }
//     }
// }

// function playGame() {

//     var humanScore = 0;
//     var computerScore = 0;

//     for(var i = 0; i < 5; i++) {
//         var humanChoice = getHumanChoice();
//         var computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//     }
// }

var humanScore = 0;
var computerScore = 0;
const humanScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultsText = document.createElement("p");
const resultsDiv = document.getElementById("results");
resultsDiv.appendChild(resultsText);

function getComputerChoice() {
    var randomChoice = Math.random() * 3;
    if(randomChoice < 1) return "rock";
    else if(randomChoice < 2) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    var choice = prompt("Rock paper scissors: ");
    return choice;
}

function playRound(humanChoice, computerChoice) {


    if(humanChoice.toLowerCase() == "rock") {
        if(computerChoice.toLowerCase() == "rock") {
            resultsText.textContent = "You tie - rock vs rock";
        }
        else if(computerChoice.toLowerCase() == "paper") {
            resultsText.textContent = "You lose - paper beats rock";
            computerScore++;
        }
        else {
            resultsText.textContent = "You win - rock beats scissors";
            humanScore++;
        }
    }
    else if(humanChoice.toLowerCase() == "paper") {
        if(computerChoice.toLowerCase() == "rock") {
            resultsText.textContent = "You win - paper beats rock";
            humanScore++;
        }
        else if(computerChoice.toLowerCase() == "paper") {
            resultsText.textContent = "You tie - paper vs paper";  
        }
        else { // scissors
            resultsText.textContent = "You lose - scissors beats paper";
            computerScore++;
        }
    }
    else { // scissors
        if(computerChoice.toLowerCase() == "rock") {
            resultsText.textContent = "You lose - rock beats scissors";
            computerScore++;
        }
        else if(computerChoice.toLowerCase() == "paper") {
            resultsText.textContent = "You win - scissors beats paper";        
        }
        else {
            resultsText.textContent = "You tie - scissors vs scissors";
            humanScore++;
        }
    }

    updateScore();

}

function updateScore() {
    humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}


function playGame() {
    for(var i = 0; i < 5; i++) {
        var humanChoice = getHumanChoice();
        var computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    // MAKE THE DISPLAY SCORE ALSO ZERO
}

console.log("Hello World")

const buttons = document.querySelectorAll("button");

buttons.forEach((button)  => {
    button.addEventListener("click", () => {
        var playerChoice = button.id;
        var computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    });
});



