console.log("Hello!");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Paper" && computerSelection == "Rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return "It's a Tie!";
  } else if (result == "Player") {
    return `You Win! ${playerSelection} beats ${computerSelection}!`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}! Try Again.`;
  }
}

function getPlayerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Rock, Paper, or Scissors");

    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}

  function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection));
        console.log("Next Round");
        if(checkWinner(playerSelection, computerSelection) == "Player") {
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            scoreComputer++;
        }
     }
     console.log("Game Over")
     if (scorePlayer > scoreComputer) {
        console.log("Player Wins!")
     }
     else if (scorePlayer < scoreComputer) {
        console.log("Computer Wins!");
     }
     else {
        console.log("It's a Tie!");
     }
  }

  game();


