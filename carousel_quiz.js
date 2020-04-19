
var quiz = {
question1: {
  question: "JavaScript statements are separated by what?",
  answerA: ko.observable("A: Periods" ),
  answerB: ko.observable ("B: Colons") ,
  answerC: ko.observable("C: Semi-Colons")
},
question2: {
  question: "JavaScript variables are __________ for storing data values.",
  answerA: ko.observable("A: Examples" ),
  answerB: ko.observable("B: Containers"),
  answerC:ko.observable("C: Placeholders")
},

question3: {
  question: "________________ is a block of code designed to perform a particular task.",
  answerA: ko.observable("A: A JavaScript object"),
  answerB: ko.observable("B: A JavaScript expression"),
  answerC:ko.observable("C: A JavaScript function")
},

question4: {
  question: "What are JavaScript strings used for?",
  answerA: ko.observable("A: Storing and manipulating text"),
  answerB: ko.observable("B: Adding numbers"),
  answerC:ko.observable("C: Concatenation")
},
question5: {
  question: "What operator is used for concatenation?",
  answerA: ko.observable("A: *"),
  answerB: ko.observable("B: +"),
  answerC:ko.observable("C: -")
},

question6: {
  question: "What does DOM stand for?",
  answerA: ko.observable("A: Document Objective Model"),
  answerB: ko.observable("B: Document Oriented Model"),
  answerC: ko.observable("C: Document Object Model")
},

question7: {
  question: "jQuery is a JavaScript library.",
  answerA: ko.observable("A: True"),
  answerB: ko.observable("B: False"),
  answerC:ko.observable("C: Maybe")
},

question8: {
  question: "What is $ shorthand for in this statement: \n$('button').click.toggleClass('hidden')?",
  answerA: ko.observable("A: jQuery"),
  answerB: ko.observable("B: Node"),
  answerC:ko.observable("C: Ajax")
},

question9: {
  question:"What is the purpose of this JavaScript code: var = database?",
  answerA: ko.observable("A: It declares a function named database"),
  answerB: ko.observable("B: It declares a variable named database"),
  answerC: ko.observable("C: It is a callback named database")
},

question10: {
  question: "How many times does this loop run? \nfor(i=0, i<=10, i++) { \nconsole.log(i); \n};",
  answerA: ko.observable("A: 1"),
  answerB: ko.observable ("B: 11"),
  answerC: ko.observable("C: 10")
}
};

ko.applyBindings (quiz);







