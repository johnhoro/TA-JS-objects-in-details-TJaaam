// Without Object

let title = "title";
let options = ["option1", "option2", "option3", "option4"];
let correctAnswerIndex = 2;
function isAnswerCorrect(index) {
  return index === correctAnswerIndex;
}
function getCorrectAnswer() {
  return options[correctAnswerIndex];
}

// With Object

let question = {
  title: "title",
  options: ["option1", "option2", "option3", "option4"],
  correctAnswerIndex: 2,
  isAnswerCorrect(index) {
    return index === question.correctAnswerIndex;
  },
  getCorrectAnswer() {
    return question.options[correctAnswerIndex];
  },
};

// Using function to create object

function createQues1(title, options, correctAnswerIndex) {
  let ques = {};
  ques.title = title;
  ques.options = options;
  ques.correctAnswerIndex = correctAnswerIndex;
  ques.isAnswerCorrect = function (index) {
    return index === ques.correctAnswerIndex;
  };
  ques.getCorrectAnswer = function () {
    return ques.options[correctAnswerIndex];
  };
  return ques;
}

// Using 'this' keyword

function createQues2(title, options, correctAnswerIndex) {
  let ques = {};
  ques.title = title;
  ques.options = options;
  ques.correctAnswerIndex = correctAnswerIndex;
  ques.isAnswerCorrect = function (index) {
    return index === this.correctAnswerIndex;
  };
  ques.getCorrectAnswer = function () {
    return this.options[correctAnswerIndex];
  };
  return ques;
}

let firstQuestion = createQues1(
  "Capital of Japan",
  ["India", "Sevilla", "Tokyo", "Las Palmas"],
  2
);
let secondQuestion = createQues2(
  "Capital of India",
  ["New York", "Delhi", "Texas", "California"],
  1
);
let thirdQuestion = createQues1(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
