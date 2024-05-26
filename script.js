const choices = ["rock", "paper", "scissors"];
const userScore = 0;
const computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getUserChoice() {
  return choices[parseInt(prompt("1 = rock, 2 = paper, 3 = scissors")) - 1];
}

function playRound() {
  userChoice = getUserChoice();
  computerChoice = choices[2];

  if (userChoice === computerChoice) {
    console.log(`It's a tie! both players chose ${userChoice}`);
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lost! ${computerChoice} beats ${userChoice}`);
  }
}
playRound();
// rock beats scissors, paper beats rock, scissors beats paper
