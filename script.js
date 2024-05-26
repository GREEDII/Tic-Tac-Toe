const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getUserChoice() {
  return choices[parseInt(prompt("1 = rock, 2 = paper, 3 = scissors")) - 1];
}

function playRound() {
  userChoice = getUserChoice();
  computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    console.log(`It's a tie! both players chose ${userChoice}`);
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
    userScore++;
  } else {
    console.log(`You lost! ${computerChoice} beats ${userChoice}`);
    computerScore++;
  }
}

function playGame() {
  userScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log(
    `Your score is: ${userScore}. Computer score is: ${computerScore}.`
  );
}

playGame();
