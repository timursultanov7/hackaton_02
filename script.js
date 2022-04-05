//JAVASCRIPT SHIT
let scoreSpan = document.getElementById("score");
let alert = document.getElementById("alert_user");

let body = document.body;

let questionDiv = document.getElementById("question_div");

function computerNumber() {
  let result = Math.floor(Math.random() * 20) + 1;
  return result;
}
let result = computerNumber();
console.log(result);
let score = 20;
let highscore = 0;

let againBtn = document.getElementById("again");
let btn = document.getElementById("btn_check");
let input = document.getElementById("input");
let highScoreSpan = document.getElementById("highscore");
scoreSpan.textContent = score;
highScoreSpan.textContent = highscore;
let questionMark = document.getElementById("question_mark");

// function checkNumber() {
btn.addEventListener("click", function () {
  // e.preventDefault();
  let userNumber = +input.value;

  if (userNumber === result) {
    alert.innerHTML = "YOU GUESSED!";
    questionMark.innerHTML = result;

    body.style.backgroundColor = "green";
    questionDiv.style.width = "300px";

    btn.disabled = true;
    input.disabled = true;
    highScoreSpan.textContent = score;
  } else if (userNumber < result) {
    alert.innerHTML = "too low baby!";
    score--;
    scoreSpan.textContent = score;
  } else if (userNumber > result) {
    alert.innerHTML = "too high baby";
    score--;
    scoreSpan.textContent = score;
  }
});
// }

// checkNumber();

againBtn.addEventListener("click", function () {
  score = 20;
  scoreSpan.textContent = score;
  btn.disabled = false;
  input.disabled = false;
  input.value = "";
  alert.innerHTML = "Start guessing...";
  questionMark.innerHTML = "?";
  body.style.backgroundColor = "#000";
  result = computerNumber();
  questionDiv.style.width = "150px";
});
