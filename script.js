
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  result = "";
  if (playerMove === "Rock") {
    if (computerMove === "Rock") result = "Its a Tie! 😒";
    else if (computerMove === "Paper") result = "You Lose! 😭";
    else result = "You Win!😎";
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") result = "You Win!😎";
    else if (computerMove === "Paper") result = "Its a Tie!😒";
    else result = "You Lose! 😭";
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") result = "You Lose! 😭";
    else if (computerMove === "Paper") result = "You Win! 😎";
    else result = "Its a Tie!😒";
  }

  if (result === "You Win!") {
    score.wins += 1;
  } else if (result === "You Lose!") {
    score.losses += 1;
  } else if (result === "Its a Tie!") {
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

    if (randomNumber >= 0 && randomNumber < 1 / 3) computerMove = "Rock";
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
      computerMove = "Paper";

    if (randomNumber >= 2 / 3 && randomNumber <= 1) computerMove = "Scissors";

    return computerMove;
  }
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML =
    ` wins: ${score.wins}, losses: ${score.losses} ties: ${score.ties}`;
}


