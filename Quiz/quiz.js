const submitButton = document.getElementById("submit-button");
const correctAnswersSpan = document
  .getElementById("correct-answers")
  .querySelector("span");
const incorrectAnswersSpan = document
  .getElementById("incorrect-answers")
  .querySelector("span");

let correctAnswers = 0;
let incorrectAnswers = 0;

submitButton.addEventListener("click", function () {
  // Get the selected answer
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    // Check if the answer is correct
    if (selectedAnswer.value == "1") {
      // Replace "1" with the correct answer value
      correctAnswers++;
    } else {
      incorrectAnswers++;
    }
  } else {
    alert("Please select an answer.");
    return;
  }

  // Update the results
  correctAnswersSpan.textContent = correctAnswers;
  incorrectAnswersSpan.textContent = incorrectAnswers;

  // Clear the selected answer
  selectedAnswer.checked = false;
});
