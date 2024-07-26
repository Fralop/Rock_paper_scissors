// Create a function to generate random number from 1 to 3
function getComputerChoice () {
    let computerChoiceNumber = Math.floor (Math.random()*3) + 1;
    let computerChoice = "";
// Create a conditional to assign 1 to Rock, 2 to paper or 3 to scissors
    switch (computerChoiceNumber) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
// Return the selection
    return computerChoice;
}
// Call the function
// Test in the console
console.log(getComputerChoice());
// Create a function to capture user input
function getHumanChoice () {
    let humanText = prompt ("What is your choice? Rock, Paper or Scissors? Type only one !", "Make your choice here!")
    // Accept only Rock, Paper or Scissor as an input
    if (humanText.toLowerCase () !== "rock" && humanText.toLowerCase () !== "paper" && humanText.toLowerCase () !== "scissors") {
        alert ("You can only enter Rock, Paper or Scissors. Please try again!");
        humanText = undefined;
    }
// Return the selections
    return humanText;
}
// Call the function in the console
console.log(getHumanChoice ());