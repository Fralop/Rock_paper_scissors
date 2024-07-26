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