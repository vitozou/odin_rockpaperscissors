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
            console.log("You tie - rock vs rock");
        }
        else if(computerChoice.toLowerCase() == "paper") {
            console.log("You lose - paper beats rock");
        }
        else {
            console.log("You win - rock beats scissors");  
        }
    }
    else if(humanChoice.toLowerCase() == "paper") {
        if(computerChoice.toLowerCase() == "rock") {
            console.log("You win - paper beats rock");  
        }
        else if(computerChoice.toLowerCase() == "paper") {
            
            console.log("You tie - paper vs paper");  
        }
        else { // scissors
            console.log("You lose - scissors beats paper");
        }
    }
    else { // scissors
        if(computerChoice.toLowerCase() == "rock") {
            console.log("You lose - rock beats scissors");
        }
        else if(computerChoice.toLowerCase() == "paper") {
            console.log("You win - scissors beats paper");        
        }
        else {
            console.log("You tie - scissors vs scissors");
        }
    }
}

function playGame() {

    var humanScore = 0;
    var computerScore = 0;

    for(var i = 0; i < 5; i++) {
        var humanChoice = getHumanChoice();
        var computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

console.log("Hello World")



