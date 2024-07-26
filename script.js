// Create a function to generate random number from 1 to 3
function getComputerChoice () {
    let computerChoiceNumber = Math.floor (Math.random()*3) + 1;
    let computerChoice = "";
    // Create a conditional to assign 1 to Rock, 2 to paper or 3 to scissors
    switch (computerChoiceNumber) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }
    // Return the selection
    return computerChoice;
}
// Create a function to capture user input
function getHumanChoice () {
    let humanText = prompt ("What is your choice? Rock, Paper or Scissors? Type only one !", "Make your choice here!").toLowerCase ();
    // Accept only Rock, Paper or Scissor as an input
    if (humanText !== "rock" && humanText !== "paper" && humanText !== "scissors") {
        alert ("You can only enter Rock, Paper or Scissors. Please try again!");
        humanText = undefined;
    }
    // Return the selections
    return humanText;
}
// Players score declaration
let humanScore = 0;
let computerScore = 0;
//Create Play Round function
function playRound (humanChoice, computerChoice) {
    // Game logic with linked switches
    let result = "";
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    result = "That's a tie!"
                    //humanScore = 0;
                    //computerScore = 0; 
                    break;
                case "paper":
                    result = "Computer wins! :("
                    //humanScore = 0;
                    computerScore += 1; 
                    break;
                case "scissors":
                    result = "Human wins! Yay! :)"
                    humanScore += 1;
                    //computerScore = 0; 
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "paper":
                    result = "That's a tie!"
                    //humanScore = 0;
                    //computerScore = 0; 
                    break;
                case "scissors":
                    result = "Computer wins! :("
                    //humanScore = 0;
                    computerScore += 1; 
                    break;
                case "rock":
                    result = "Human wins! Yay! :)"
                    humanScore += 1;
                    //computerScore = 0; 
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "scissors":
                    result = "That's a tie!"
                    //humanScore = 0;
                    //computerScore = 0; 
                    break;
                case "rock":
                    result = "Computer wins! :("
                    //humanScore = 0;
                    computerScore += 1; 
                    break;
                case "paper":
                    result = "Human wins! Yay! :)"
                    humanScore += 1;
                    //computerScore = 0; 
                    break;
            }
            break;
    }
//Show in console the result
console.log (humanChoice, computerChoice, result, humanScore, computerScore);
}
//Call the round function !
//console.log(playRound (humanSelection, computerSelection));
// Call the game function with n rounds.
function playGame(n) {
    for (let i=0; i<n; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice ();
        playRound(humanSelection, computerSelection);
    }
}
playGame(5);