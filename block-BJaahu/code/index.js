// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// Factory Pattern

// function createQuestion(title, options, correctAnswerIndex) {
//   let question = {};
//   question.title = title;
//   question.options = options;
//   question.correctAnswerIndex = correctAnswerIndex;

//   question.isAnswerCorrect = function (Index) {
//     return question.correctAnswerIndex === Index;
//   };
//   question.getCorrectAnswer = function () {
//     return correctAnswerIndex;
//   };
//   return question;
// }

// Prototypical Pattern

// let questionMethods = {
//   isAnswerCorrect: function (Index) {
//     return question.correctAnswerIndex === Index;
//   },
//   getCorrectAnswer: function () {
//     return correctAnswerIndex;
//   },
// };

// function createQuestion(title, options, correctAnswerIndex) {
//   let question = Object.create(questionMethods);
//   question.title = title;
//   question.options = options;
//   question.correctAnswerIndex = correctAnswerIndex;

//   return question;
// }

//Pseudoclassical Pattern (Put methods inside F.prototype and
//use `new` to call function)

// function CreateQuestion(title, options, correctAnswerIndex) {
//   this.title = title;
//   this.options = options;
//   this.correctAnswerIndex = correctAnswerIndex;
// }
// CreateQuestion.prototype = {
//   isAnswerCorrect: function (Index) {
//     return this.correctAnswerIndex === Index;
//   },
//   getCorrectAnswer: function () {
//     return this.correctAnswerIndex;
//   },
// };

//Class Pattern

class CreateQuestion {
  constructor(title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
  }
  isAnswerCorrect(Index) {
    return this.correctAnswerIndex === Index;
  }
  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

let firstQuestion = new CreateQuestion(
  "Where is the capital of Jordan",
  ["Tashkent", "Amaan", "Kuwait City", "Nairobi"],
  1
);
let secondQuestion = new CreateQuestion(
  "Where is the capital of Jamaica",
  ["Tashkent", "Amaan", "Kingston", "Nairobi"],
  2
);
