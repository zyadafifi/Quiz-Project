const question = document.getElementById("question");
const optionButtons = document.querySelectorAll("#options");
const explanation = document.getElementById("explanation");
let nextButton = document.querySelector(".next");
let paragraph = document.querySelector("p");
const fact = [
  {
    question: "'1' + '1' === '2'",
    answer: "false",
    explanation:
      "JavaScript will convert the number 1 to a string and then add the number 1 to the string.",
  },
  {
    question: "NaN === NaN",
    answer: "false",
    explanation:
      "NaN is the only JavaScript value that is not equal to itself.",
  },
  {
    question: "'5' - 1 === 4",
    answer: "true",
    explanation:
      "JavaScript coerces the string '5' to a number and then performs the subtraction.",
  },
  {
    question: "typeof null === 'object'",
    answer: "true",
    explanation:
      "In JavaScript, `null` is considered an object due to a historical bug in the language.",
  },
  {
    question: "[] + [] === ''",
    answer: "true",
    explanation:
      "When two arrays are added together in JavaScript, they are both coerced into empty strings, resulting in an empty string.",
  },
  {
    question: "undefined == null",
    answer: "true",
    explanation:
      "In JavaScript, `undefined` is loosely equal to `null`, but they are not strictly equal (`undefined === null` is false).",
  },
  {
    question: "0.1 + 0.2 === 0.3",
    answer: "false",
    explanation:
      "Due to floating-point precision issues in JavaScript, `0.1 + 0.2` does not exactly equal `0.3`.",
  },
  {
    question: "Function declarations are hoisted",
    answer: "true",
    explanation:
      "In JavaScript, function declarations are hoisted, meaning they are available before their definition in the code.",
  },
  {
    question: "'10' > 5",
    answer: "true",
    explanation:
      "JavaScript coerces the string '10' into a number, allowing the comparison with 5, which results in true.",
  },
  {
    question: "An empty array is truthy in JavaScript",
    answer: "true",
    explanation:
      "In JavaScript, empty arrays are truthy, meaning they will evaluate to true in conditional expressions.",
  },
];
function showExplanation(text) {
  explanation.textContent = text;
  explanation.style.display = "block";
}
function hideExplanation() {
  explanation.textContent = "";
  explanation.style.display = "none";
}
let currentIndex = 0;
function loadQuestions() {
  hideExplanation();
  question.textContent = fact[currentIndex].question;
  function isCorrect(guessString) {
    return guessString === fact[currentIndex].answer.toString();
  }
  for (let optionButton of optionButtons) {
    optionButton.addEventListener("click", () => {
      for (let optionButton of optionButtons) {
        optionButton.setAttribute("disabled", true);
      }
      if (isCorrect(optionButton.value)) {
        optionButton.classList.add("correct");
      } else {
        optionButton.classList.add("incorrect");
      }
      function handleAnswer() {
        showExplanation(fact[currentIndex].explanation);
      }
      handleAnswer();
      nextButton.style.display = "block";
    });
  }
}
loadQuestions();
nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < fact.length) {
    for (fbutton of optionButtons) {
      fbutton.classList.remove("correct");
      fbutton.classList.remove("incorrect");
      fbutton.removeAttribute("disabled");
    }
    loadQuestions();
  } else {
    paragraph.style.display = "none";
    question.textContent = "Quiz completed!";
    explanation.textContent = "You've answered all the questions.";
    for (let optionButton of optionButtons) {
      optionButton.style.display = "none";
    }
    nextButton.style.display = "none";
  }
});
