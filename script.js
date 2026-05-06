
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") result = "Its a Tie! 😒";
    else if (computerMove === "paper") result = "You Lose! 😭";
    else result = "You Win! 😎";
  } else if (playerMove === "paper") {
    if (computerMove === "rock") result = "You Win! 😎";
    else if (computerMove === "paper") result = "Its a Tie! 😒";
    else result = "You Lose! 😭";
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") result = "You Lose! 😭";
    else if (computerMove === "paper") result = "You Win! 😎";
    else result = "Its a Tie! 😒";
  }

  if (result === "You Win! 😎") {
    score.wins += 1;
  } else if (result === "You Lose! 😭") {
    score.losses += 1;
  } else if (result === "Its a Tie! 😒") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  // console.log(localStorage.getItem("score"));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML =
    `you  &nbsp <img src="img/${playerMove}.png" class="imageresult"> 
    &nbsp \u2014 &nbsp
    <img src="img/${computerMove}.png" class="imageresult"> 
    &nbsp
    Computer`;


  function pickComputerMove() {
    let computerMove = "";

    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) computerMove = "rock";
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
      computerMove = "paper";

    if (randomNumber >= 2 / 3 && randomNumber <= 1) computerMove = "scissors";

    return computerMove;
  }
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML =
    ` wins: ${score.wins}, losses: ${score.losses} ties: ${score.ties}`;
}


