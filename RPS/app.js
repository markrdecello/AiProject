let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("Rock");
let paper_div = document.getElementById("Paper");
let scissors_div = document.getElementById("Scissors");

function getComputerChoice() {
  let choices = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(word) {
  if (word === "Rock") return "Rock";
  if (word === "Paper") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  let user = "User".fontcolor("green");
  let comp = "Computer".fontcolor("red");
  let outcome = "You win!".fontcolor("green");
  let userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. ${outcome}<br> ${user}: ${userChoice}<br> ${comp}: ${computerChoice}`;
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 600);
}

function lose(userChoice, computerChoice) {
  let user = "User".fontcolor("green");
  let comp = "Computer".fontcolor("red");
  let outcome = "You lose...".fontcolor("red");
  let userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. ${outcome}<br> ${user}: ${userChoice}<br> ${comp}: ${computerChoice}`;
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 600);
}

function draw(userChoice, computerChoice) {
  let user = "User".fontcolor("green");
  let comp = "Computer".fontcolor("red");
  let outcome = "It's a draw.".fontcolor("gray");
  let userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. ${outcome}<br> ${user}: ${userChoice}<br> ${comp}: ${computerChoice}`;
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 600);
}

function game(userChoice) {
  let computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, computerChoice);
      break;
      case "RockRock":
      case "PaperPaper":
      case "ScissorsScissors":
        draw(userChoice, computerChoice);
        break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("Rock"));

  paper_div.addEventListener('click', () => game("Paper"));

  scissors_div.addEventListener('click', () => game("Scissors"));
}

main();
