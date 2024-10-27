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
//function getHumanChoice () {
//    let humanText = prompt ("What is your choice? Rock, Paper or Scissors? Type only one !", "Make your choice here!").toLowerCase ();
//    // Accept only Rock, Paper or Scissor as an input
//    if (humanText !== "rock" && humanText !== "paper" && humanText !== "scissors") {
//        alert ("You can only enter Rock, Paper or Scissors. Please try again!");
//        humanText = undefined;
//    }
//    // Return the selections
//    return humanText;
//}
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
                    result = "Computer wins! 🤦‍♂️"
                    //humanScore = 0;
                    computerScore += 1; 
                    break;
                case "scissors":
                    result = "Human wins! Yay! 😊"
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
                    result = "Computer wins! 🤦‍♂️"
                    //humanScore = 0;
                    computerScore += 1; 
                    break;
                case "rock":
                    result = "Human wins! Yay! 😊"
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
                    result = "Computer wins! 🤦‍♂️"
                    //humanScore = 0;
                    computerScore += 1; 
                    break;
                case "paper":
                    result = "Human wins! Yay! 😊"
                    humanScore += 1;
                    //computerScore = 0; 
                    break;
            }
            break;
    }
//Show results in an array
return [i, humanChoice, computerChoice, result, humanScore, computerScore]; 
}
//Call the round function !
//console.log(playRound (humanSelection, computerSelection));
// Call the game function with n rounds.
//function playGame(n) {
//    for (let i=0; i<n;) {
//        const humanSelection = getHumanChoice();
//        //Added a condition to increment counter only if human enters word correctly!
//        if (humanSelection !== undefined) {
//            i++;
//        } 
//        const computerSelection = getComputerChoice ();
//        playRound(humanSelection, computerSelection);
//    }
//    // Adds the conditional to place an alert and say who won
//    if (humanScore > computerScore) {
//        alert (`Human has won ${humanScore} vs ${computerScore}! Yay! :)`);
//    } else if (humanScore < computerScore) {
//        alert (`Computer has won ${computerScore} vs ${humanScore}! Booo! :(`);
//    } else {
//        alert (`It's a tie at ${computerScore}. Not bad, human !`);
//    }
//}
// Call the function to plan the game n number of times.
// Declare n, to ask the human how many times to play
//let n = prompt ("how many times do you want to play?", 5);
//playGame(n);

//Individual Event listeners per button
//const btnPa = document.querySelector("#Pa");
//const btnSc = document.querySelector("#Sc");
//const btnRo = document.querySelector("#Ro");
//
//btnPa.addEventListener("click", (e) => {
//    humanSelection = e.target.textContent;
//    computerSelection = getComputerChoice ();
//    playRound(humanSelection, computerSelection);
//});
//
//btnSc.addEventListener("click", () => {
//    humanSelection = "scissors";
//    computerSelection = getComputerChoice ();
//    playRound(humanSelection, computerSelection);
//});
//
//btnRo.addEventListener("click", () => {
//    humanSelection = "paper";
//    computerSelection = getComputerChoice ();
//    playRound(humanSelection, computerSelection);
//});

let i=0;
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener("click", playGame);
});

function playGame (e) {
    i++;
    const body = document.querySelector("body");
    const div = document.createElement("div");
    const tittle = document.createElement("h1");
    if (i <=5) {
    humanSelection = e.target.textContent;
    computerSelection = getComputerChoice ();
    roundResults = playRound(humanSelection, computerSelection);
    const para = document.createElement("p");
    para.textContent = 
    `In match ${roundResults[0]}, you selected ${roundResults[1]} and the computer selected ${roundResults[2]}: ${roundResults[3]}
    Current score is Human ${roundResults[4]} points and Computer ${roundResults[5]} points`;
    div.appendChild(para);       
    } else {
        if (humanScore > computerScore) {
            tittle.textContent = `You have played 5 times ... Human has won ${humanScore} vs ${computerScore}! Yay! 🎉🎉`;
            } else if (humanScore < computerScore) {
                tittle.textContent = `You have played 5 times ... Computer has won ${computerScore} vs ${humanScore}! Sad! 😢`;
            } else {
                tittle.textContent = `You have played 5 times ... It's a tie at ${computerScore}. Not bad, human! 💪`;
            }
        div.appendChild(tittle);
        btns.forEach((btn) => {
            btn.removeEventListener("click", playGame);
        });
    }
    body.appendChild(div);
};
