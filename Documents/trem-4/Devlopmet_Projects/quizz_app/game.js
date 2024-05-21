const quizQuestion = document.getElementById("quizQuestion");
const answerOptions = Array.from(document.getElementsByClassName("answerText"));
const progressLabel = document.getElementById("progressLabel");
const scoreDisplay = document.getElementById("scoreDisplay");
const progressFull = document.getElementById("progressFull");
let currentQuestion = {};
let canAnswer = false;
let score = 0;
let questionNumber = 0;
let questionsList = [];

const quizQuestions = [
  {
    question: "What does HTML stand for?",
    option1: "Hyper Text Markup Language",
    option2: "Hyperlinks and Text Markup Language",
    option3: "Home Tool Markup Language",
    option4: "Hyperlink Transfer Markup Language",
    correctOption: 1
  },
  {
    question: "Which programming language is used for styling web pages?",
    option1: "JavaScript",
    option2: "HTML",
    option3: "CSS",
    option4: "Python",
    correctOption: 3
  },
  {
    question: "What is the purpose of JavaScript in web development?",
    option1: "To add styles to web pages",
    option2: "To create interactive elements and dynamic content",
    option3: "To define the structure of web pages",
    option4: "To manage server-side operations",
    correctOption: 2
  }
];

const POINTS_PER_CORRECT = 10;
const TOTAL_QUESTIONS = 3;

startQuiz = () => {
  questionNumber = 0;
  score = 0;
  questionsList = [...quizQuestions];
  fetchNewQuestion();
};

fetchNewQuestion = () => {
  if (questionsList.length === 0 || questionNumber >= TOTAL_QUESTIONS) {
    localStorage.setItem("recentScore", score);
    return window.location.assign("/end.html");
  }

  questionNumber++;
  progressLabel.innerText = `Question ${questionNumber}/${TOTAL_QUESTIONS}`;
  progressFull.style.width = `${(questionNumber / TOTAL_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * questionsList.length);
  currentQuestion = questionsList[questionIndex];
  quizQuestion.innerText = currentQuestion.question;

  answerOptions.forEach(option => {
    const number = option.dataset["number"];
    option.innerText = currentQuestion["option" + number];
  });

  questionsList.splice(questionIndex, 1);
  canAnswer = true;
};

answerOptions.forEach(option => {
  option.addEventListener("click", e => {
    if (!canAnswer) return;

    canAnswer = false;
    const selectedOption = e.target;
    const chosenAnswer = selectedOption.dataset["number"];

    const applyClass =
      chosenAnswer == currentQuestion.correctOption ? "correctAnswer" : "incorrectAnswer";
    
    if (applyClass === "correctAnswer") {
      incrementScore(POINTS_PER_CORRECT);
    }

    selectedOption.parentElement.classList.add(applyClass);

    setTimeout(() => {
      selectedOption.parentElement.classList.remove(applyClass);
      fetchNewQuestion();
    }, 1000);
  });
});

incrementScore = points => {
  score += points;
  scoreDisplay.innerText = score;
};

startQuiz();
